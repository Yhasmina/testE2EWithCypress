import { LoginPage } from '../../actions/login/loginPage';

describe('Login to PopZ', () => {

    const loginPage: LoginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should link recover password exists', () => {
        loginPage.fillUserEmail('manager.demo@popz.com');
        loginPage.getLinkRecoverPassword().should('exist');
    });

    it('should success',() => {
        loginPage.fillUserEmail('manager.demo@popz.com');
        loginPage.fillPassword('Mercure1!');
        cy.url().should('include', '/employee/dashboard');
    });

});