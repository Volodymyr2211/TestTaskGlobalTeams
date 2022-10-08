import * as UserData from "../fixtures/user.data.json";
import { LoginForm } from "../page_object/login-form.js";
import { EditProfileForm } from "../page_object/edit-profile-form.js";

const loginForm = new LoginForm();
const editProfileForm = new EditProfileForm();

describe("Profile editing cheking:", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Check that user can edit 'Навички' field", () => {
    cy.get("#login-link").click();
    cy.get("#_loginDialog").should("be.visible");

    loginForm.loginByMail(UserData.Email, UserData.Password);

    cy.get("[src='https://s.dou.ua/img/avatars/25x25_anon.png']").click();
    cy.get(".b-author > div.name").should("have.text", UserData.Name);

    editProfileForm.editProfileSkils(UserData.skils);
    cy.get(".user_skills > p").should("have.text", UserData.skils);
  });
});
