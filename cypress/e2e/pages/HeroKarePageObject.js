class HeroKareObject{
    elements = {
       documentsList:()=>cy.get('.documentsList'),
       documentAnchor:()=>cy.get('tr:nth-child(2) td:nth-child(1) a:nth-child(1)'),
       documentDate:()=>cy.get(':nth-child(2) > .documentDate'),
       documentSelect:()=>cy.get('.documentSelect1'),
       documentButton:()=>cy.get(':nth-child(2) > :nth-child(4) > .updateButton'),
       documentSpan:()=>cy.get('tr:nth-child(2) td:nth-child(5) span:nth-child(1)'),
       
    }

    clickAnchor(){
        this.elements.documentAnchor().click({force: true});
    }

    selectAprove(option){
        this.elements.documentSelect().select(option);
    }

    clickButton(){
        this.elements.documentAnchor().click({force: true});
    }
}
export default new HeroKareObject();