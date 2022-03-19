/// <reference types = "cypress" />
describe('my fourth testsuite',function()
{
    it('my fourth test case', function(){
   //checkbox 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')

    })
})
    