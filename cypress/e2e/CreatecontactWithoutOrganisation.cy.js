describe('vtiger',()=>{
    it('open app',()=>{
        cy.visit("http://localhost:8888/index.php?action=Login&module=Users")

        cy.title().should('include',"vtiger")
        cy.get('.inputs > :nth-child(2) > input').type("admin")
        
        cy.get(':nth-child(5) > input').type("admin")

        cy.get('#submitButton').click()

        cy.title().should('include',"Home")

        cy.get(':nth-child(8) > a').click()


        cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()

        cy.title().should('include',"Contacts")

        cy.get(':nth-child(3) > :nth-child(2) > .small').select('Mrs.')

        cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type('bharath')


    })
})