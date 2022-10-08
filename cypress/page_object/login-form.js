export class LoginForm {
  loginByMail(userEmail, userPassword) {
    cy.get("#_loginByMail").click();
    cy.get("[name='username']")
      .first()
      .type(userEmail)
      .should("have.value", userEmail);
    cy.get("[name='password']")
      .first()
      .type(userPassword)
      .should("have.value", userPassword);
    cy.contains("button", "Увійти").click();
  }
}
