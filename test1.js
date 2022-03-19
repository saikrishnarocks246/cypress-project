/// <reference types = "cypress" />
describe('my first testsuite',function()
{
    it('my first test case', function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    cy.get(".product:visible").should("have.length",4)
    cy.get(".products").find(".product").should("have.length",4)
    cy.get(':nth-child(2) > .product-action > button').click()
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
    cy.get(".products").find(".product").each(($el, index, $list) =>{
    const textVeg = $el.find("h4.product-name").text()
    if(textVeg.includes("cashews"))
    {
     cy.wrap.$el.find("button").click()
    }
})
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})
 //const logo=cy.get('.brand')
})

})
