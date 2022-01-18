/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
describe('Movie Tests', () => {

    before(() => {
        cy.visit("/")
    });

    context("Stars",()=>{
        it('Hover and Click Star', () => {
            cy.get(".movie-stars :nth-child(5) svg")
                .trigger('mouseover')
                .then(($value)=>{
                    cy.get(".movie-stars svg").each(($el)=>{
                        cy.wrap($el).should('have.class', "active")  
                    })
                    cy.wrap($value).click().should('have.class', "active")
                })
        });  
    })    

    context('Modals',() => {
        
        it('Open and Close Movie Modal', () => {
            cy.contains("ASSISTIR AGORA").click();
            cy.wait(5000)
            cy.get('iframe').should("be.visible")
            cy.wait(5000)
            cy.get(".modal-video-close-btn").click()
            cy.get('iframe').should("not.exist")
        });
        
        it('Open and Close Trailer Modal', () => {
            cy.contains("TRAILER").click();
            cy.wait(5000)
            cy.get('iframe').should("be.visible")
            cy.wait(5000)
            cy.get(".modal-video-close-btn").click()
            cy.get('iframe').should("not.exist")
        });


    })
    
    context('Resolution', ()=>{
        it('Show Movie Banner in Desktop', () => {
            cy.viewport(1000,660)
            cy.get("img").should('be.visible')
        });

        it('Hidden Movie Banner in Mobile', () => {
            cy.viewport(767,768)
            cy.get("img").should('not.be.visible')
        });
    })
    
})
