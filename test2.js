/// <reference types = "cypress" />
describe('my first testsuite',function()
{
    it('my first test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').each(($el, index, $list) =>{
    const textVeg = $el.find("h4.product-name").text()
    if(textVeg.includes("cashews"))
    {
     cy.wrap.$el.find("button").click()
    }
})
    })
})