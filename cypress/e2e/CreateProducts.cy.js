describe('empty spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:8888/index.php?action=Login&module=Users")

    cy.title().should('include',"vtiger")

    cy.get('.inputs > :nth-child(2) > input').type("admin")

    cy.get(':nth-child(5) > input').type("admin")

    cy.get('#submitButton').click()

    cy.title().should('include',"Home")

    cy.get(':nth-child(12) > a').click()

    cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()

    cy.title().should('include',"Products")

    cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type("mango12334")

    cy.get(':nth-child(6) > :nth-child(2) > .small').select("Hardware")

    cy.get(':nth-child(5) > :nth-child(4) > .small').select("LexPon Inc.")


    cy.get('[value="T"]').click()

    cy.get('#my_file_element').selectFile("C:/Users/Abhi Akshay/Desktop/methids 2.txt")


    cy.get(':nth-child(31) > td > div > .save').click()

    cy.wait(2000)

    cy.get("[src='themes/softed/images/user.PNG']").trigger('mouseover')

    cy.contains('Sign Out').click()

    cy.title().should('include',"vtiger")


  })
})