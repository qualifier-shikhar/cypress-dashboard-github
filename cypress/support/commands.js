// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (password) => {
    //Perform Login click
    cy.contains("Login").click();
  
    // cy.get("#loginLink").then(($link) => {
    //     return $link.text()
    // }).as("linkText")
  
    //Shorthand way of working with promise using invoke
    cy.get("#loginLink").invoke("text").as("linkText");
  
    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });
    cy.url().should("include", "/Account/Login")
  
    //Enter Username and Password
    cy.get("#UserName").type(Cypress.env("username"));
    cy.get("#Password").type(password);
  
    cy.get(".btn").click({ force: true });
  });
  