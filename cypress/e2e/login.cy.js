describe("login e2e testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should contains ", () => {
    cy.contains("CircleCi CI/CD testingdsdsdsdsds");
  });
  it("should be clickable and fillable", () => {
    cy.get('input[name="username"]').focus();
    cy.get('input[name="username"]').type("hbeanjarah");
    cy.get('input[name="username"]').blur();

    cy.get('input[name="password"]').focus();
    cy.get('input[name="password"]').type("azerty123");
    cy.get('input[name="password"]').blur();
  });
});
