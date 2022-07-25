describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8888/index.php')

    cy.get('.inputs > :nth-child(2) > input').type("admin")
    cy.get(':nth-child(5) > input').type("admin")
    cy.get('#submitButton').click()
    cy.get('tr > :nth-child(6) > a').click()
    cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()
    cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type("mango12345678909")
    cy.get(':nth-child(9) > :nth-child(2) > .small').select("Education")
    cy.get(':nth-child(10) > :nth-child(2) > .small').select("Customer")
    cy.get(':nth-child(22) > td > div > .save').click()
    cy.wait(2000)
    cy.get("[src='themes/softed/images/user.PNG']").trigger('mouseover')
    cy.contains('Sign Out').click()
 
  })
})