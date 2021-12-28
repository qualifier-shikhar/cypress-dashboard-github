/// <reference types="Cypress" />

describe('Testing of EA App', ()=>{
    before("Login to Application", ()=> {
        cy.visit("http://eaapp.somee.com/");
        cy.fixture("eauser").as("user")

        cy.get("@user").then((user)=> {
            cy.login(user.Password)    
        })
    })
    it("Performing Benefit Operation", () => {

        cy.contains("Employee List").click()
        cy.get('.table').find('tr')
            .contains("John").parent()
            .contains("Benefits")
            .click()
        cy.get('.table').find('tr').as("rows")

        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple: true})
        })
    })
})