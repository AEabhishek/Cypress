describe('vtiger',()=>{
    it('launch it ',()=>{
        cy.visit("http://localhost:8888/index.php")

        cy.title().should('include',"vtiger")

        cy.get('[name="user_name"]').type('admin')


        cy.get('[name="user_password"]').type('admin')

        cy.get('#submitButton').click()

        cy.get('#headerrow_2 > [align="left"] > b').scrollIntoView()

        // cy.title().should('include',"Home")

        // cy.contains('More').trigger('mouseover')

        // cy.contains('Campaigns').click()

            
    })
})