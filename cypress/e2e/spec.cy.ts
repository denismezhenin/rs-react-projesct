afterEach(() => {
  cy.window().trigger("unload");
});
describe("Navigation test", () => {
  it("rendered main page with form", () => {
    cy.visit("/");
    cy.get("input").should("have.value", "");
    cy.get("button").should("have.text", "Search");
  });
  it("navigate to form page after clicking on form in the header", () => {
    cy.visit("/");
    cy.contains("FORM").click();
    cy.get("input[name=secondName]").should("have.value", "");
  });
  it("navigate to form about after clicking on form in the header", () => {
    cy.visit("/");
    cy.contains("ABOUT").click();
    cy.get("h2").should("have.text", "This should be information about us");
  });
});

describe("form page", () => {
  it("form submit created a new user with popup message", () => {
    cy.visit("/form");
    cy.get("input[name=secondName]")
      .should("have.value", "")
      .type("Dzianis")
      .should("have.value", "Dzianis");
    cy.get("input[name=firstName]")
      .should("have.value", "")
      .type("Miazhenin")
      .should("have.value", "Miazhenin");
    cy.get("input[name=birthday]")
      .should("have.value", "")
      .type("1999-12-31")
      .should("have.value", "1999-12-31");
    cy.get("input[type=radio]")
      .should("have.length", 2)
      .first()
      .check()
      .should("be.checked");
    cy.get("input[type=checkbox]")
      .should("have.length", 1)
      .check()
      .should("be.checked");
    cy.get("select[name=country]")
      .should("have.value", "")
      .select("Albania")
      .should("have.value", "Albania");
    cy.get("select[name=country]").invoke("val").should("include", "Albania");
    cy.get("input[type=file]").selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: "image.jpg",
      mimeType: "image/jpg",
      lastModified: Date.now(),
    });
    cy.get("button").click();
    cy.get(".item__name").should("have.text", "Name: Miazhenin Dzianis");
    cy.get(".pop-up-active")
      .find("p")
      .should("have.text", "User has been successfully created");
    cy.get(".pop-up-active")
      .trigger("click", { clientX: 1, clientY: 1 })
      .click();
  });
});

describe("test main page", () => {
  it("rendered cards at main page", () => {
    cy.visit("/");
    cy.contains("Rick Sanchez").should("have.class", "item__name");
  });
  it("input value should be like entered", () => {
    cy.visit("/");
    cy.get("input").type("rick{enter}").should("have.value", "rick");
  });
  it("rendered card with pop-up after clicking on small card", () => {
    cy.visit("/");
    cy.get("#1").click();
    cy.get(".item_big_card__information")
      .get(".item_big_card__name")
      .should("have.text", "Rick Sanchez")
      .parent()
      .get(".close")
      .click();
  });
});
