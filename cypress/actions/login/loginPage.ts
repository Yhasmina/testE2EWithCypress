export class LoginPage {

    visit(): void {
      cy.visit("/");
    }
  
    getUserEmail(): any {
      return cy.get(`[name=email]`);
    }
  
    getPassword(): any {
      return cy.get(`[id=ctl00_ContentPlaceHolder1_PasswordTextBox]`);
    }

    getErrorMessage(): any {
        return cy.get(`[id=ctl00_ContentPlaceHolder1_ErrorTextLabel]`);
    }

    getLinkRecoverPassword(): any {
        return cy.get(`[id=ctl00_ContentPlaceHolder1_Label1]`);
    }

    fillUserEmail(userEmail: string): void {
      const field = this.getUserEmail();
      field.clear();
      field.type(userEmail);
      this.next();
    }
  
    fillPassword(password: string): void {
      const field = this.getPassword();
      field.clear();
      field.type(password);
      this.connect();
    }
  
    private next(): void {
      const button = cy.get(`[name=submit]`);
      button.click();
    }

    private connect(): void {
        const button = cy.get(`[type=submit]`);
        button.click();
    }
  }