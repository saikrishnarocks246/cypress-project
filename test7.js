/// <reference types = "cypress" />
describe('my seventh testsuite',function()
{
    it('my seventh test case', function(){
   //checkbox 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#opentab").then(function(el)
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)
    })

    })
})