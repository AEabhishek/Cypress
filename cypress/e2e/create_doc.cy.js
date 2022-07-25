describe('vtiger',()=>{

it('create document' ,()=>{

    cy.visit('http://localhost:8888/index.php?')

    cy.get('.inputs > :nth-child(2) > input').type('admin')

    cy.get(':nth-child(5) > input').type('admin')

    cy.get('#submitButton').click()

    cy.get('tr > :nth-child(14)').click()

    cy.get(':nth-child(1) > table > tbody > tr > [style="padding-right:0px;padding-left:10px;"] > a > img').click()

    cy.get(':nth-child(3) > :nth-child(2) > .detailedViewTextBox').type('Alok varma')

    cy.get('iframe').then(function($iframe){
        const iframecontent=$iframe.contents().find('html')

        cy.wrap(iframecontent)
        // cy.get('[disabled]').click({force: true})
        // cy.get(5000)
        .type('Sir Isaac Newton PRS (25 December 1642 – 20 March 1726/27[a]) was an English mathematician, physicist, astronomer, alchemist, theologian, and author (described in his time as a "natural philosopher") widely recognised as one of the greatest mathematicians and physicists of all time and among the most influential scientists. He was a key figure in the philosophical revolution known as the Enlightenment. His book Philosophiæ Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), first published in 1687, established classical mechanics. Newton also made seminal contributions to optics, and shares credit with German mathematician Gottfried Wilhelm Leibniz for developing infinitesimal calculus')
    })

    cy.get('#cke_44 > .cke_icon').click()

    cy.get('#cke_5 > .cke_icon').click()

    cy.get('#cke_6 > .cke_icon').click()

    cy.get('#cke_7 > .cke_icon').click()

    // cy.get('#cke_56 > a > .cke_openbutton').click().select('Blue titles')

    // cy.get('#cke_57 > a > .cke_openbutton').type('Heading 2')

    // cy.get('#cke_58 > a > .cke_openbutton').type('Arial')

    // cy.get('#cke_59 > a > .cke_openbutton').type('18')


    cy.get('#filename_I__').selectFile("C:/Users/Abhi Akshay/Desktop/methids 2.txt")

    cy.get(':nth-child(13) > td > div > .save').click()

    cy.wait(2000)

    cy.get("[src='themes/softed/images/user.PNG']").trigger('mouseover')

    cy.contains('Sign Out').click()


})

})