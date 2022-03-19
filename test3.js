/// <reference types = "cypress" />
describe('my third testsuite',function()
{
    it('my third test case', function(){
   //checkbox 
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
    cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    //staticdropdown
    cy.get('select').select('option2').should('have.value','option2')
    //dynamic
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($e1,index, $list) => {
        if($e1,text()==="India")
        {
         cy.wrap.$e1.click()
        }
    })





    })
})