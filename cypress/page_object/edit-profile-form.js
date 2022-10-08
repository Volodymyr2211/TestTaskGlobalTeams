export class EditProfileForm {
  editProfileSkils(skils) {
    cy.get("[href='https://dou.ua/edit-profile/']").click();
    cy.get("textarea#txtSkill").clear().type(skils).should("have.value", skils);
    cy.get("button#btnSubmit").click();
  }
}
