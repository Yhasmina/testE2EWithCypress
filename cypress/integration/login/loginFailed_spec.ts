import { LoginPage } from '../../actions/login/loginPage';

describe('Login to PopZ fail ', () => {

    const loginPage: LoginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    xit('because email is wrong', () => { 
        loginPage.fillUserEmail('testFail@cegid.com');
        cy.get('h2').should('contain', 'Error');
    });

    it('because email not it a email address', () => {
        loginPage.fillUserEmail('user')
        loginPage.getUserEmail().should('have.attr', 'error');
    });

    it('because password is wrong',() => {
        loginPage.fillUserEmail('manager.demo@popz.com');
        loginPage.fillPassword('Mercure1?');
        loginPage.getErrorMessage().should('exist');
    });

});