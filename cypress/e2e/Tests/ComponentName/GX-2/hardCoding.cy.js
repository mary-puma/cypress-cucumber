describe("TC Hard Code - Login", () =>
{
    beforeEach("Visitar la pagina de Login", ()=>{
        cy.visit("https://demo.testim.io")
        cy.contains("Log in").should("be.visible")
        cy.contains("Log in").click();
    })

    it("TC1: Hacer Login exitosamente", ()=>{
        cy.get("[type='text']").eq(4)
        .type("Upex")
        cy.get("[type='password']")
        .type("12345")
        cy.get("button[type='submit']")
        .click();
        cy.contains("HELLO").should("be.visible")

    })

})