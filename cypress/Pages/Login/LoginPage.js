class LoginPage {
  txtLoginEmail() {
    return cy.get('[data-qa="login_email"]').clear(); // Cleans and returns the text field to be ready to use.
  }

  txtLoginPassword() {
    return cy.get('[data-qa="login_password"]').clear(); // Cleans and returns the text field to be ready to use.
  }

  btnSignInButton() {
    return cy.get('[data-qa="signin_button"]');
  }

  loginToSlack(username, password) {
    this.txtLoginEmail().type(username);
    this.txtLoginPassword().type(password);
    this.btnSignInButton().click();
  }
}
export default LoginPage;
