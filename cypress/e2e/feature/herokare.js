import HeroKareObject from '../pages/HeroKarePageObject';
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.viewport(1280, 720);
    
  });

Given("A List of documents from a user",()=>{
    cy.visit("/");       
    HeroKareObject.elements.documentsList().should('have.length',3); 
});

When('A Kare Employee clicks in a document to open',()=>{
   HeroKareObject.clickAnchor();
})

Then('Verify that everything correspond with the user and expiration date',()=>{  

})

Then('The user update the status to approved',()=>{
    HeroKareObject.elements.documentButton().should('not.be.enabled');
    HeroKareObject.selectAprove("approve");
    HeroKareObject.elements.documentButton().should('be.enabled');
    HeroKareObject.clickButton();
})

Then('the document is updated',()=>{
   HeroKareObject.elements.documentSpan().should('to.have.text','approve');
})

