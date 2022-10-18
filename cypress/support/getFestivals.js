Cypress.Commands.add('getFestivalsDetails',()=>{
    cy.api({url:'/'}).then((response)=>{
        expect(response.status).to.eq(200)
    })
    cy.api({
        method: 'GET',
        url: Cypress.env('getFestivalsEndPoint'),
        failOnStatusCode: false
    }).then((response)=>{
        return response
    })
})