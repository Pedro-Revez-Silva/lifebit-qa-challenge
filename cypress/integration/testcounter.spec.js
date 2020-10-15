/// <reference types="cypress" />


context('Test Counter App', () => {
    before(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Items are 0 (initial state)', () => {
    
			cy.get('[data-cy=totalCounters]').contains('0');
			cy.get('[data-cy=itemCount]').eq(0).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(1).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(2).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(3).contains('Zero');

		})
		
		it('Increment Counter value', () => {

			cy.get('[data-cy=incrementButton]').eq(0).click();
			cy.get('[data-cy=itemCount]').eq(0).contains('1');

			cy.get('[data-cy=incrementButton]').eq(1).click();
			cy.get('[data-cy=itemCount]').eq(1).contains('1');

			cy.get('[data-cy=incrementButton]').eq(2).click();
			cy.get('[data-cy=itemCount]').eq(2).contains('1');

			cy.get('[data-cy=incrementButton]').eq(3).click();
			cy.get('[data-cy=itemCount]').eq(3).contains('1');

			cy.get('[data-cy=incrementButton]').eq(3).click();
			cy.get('[data-cy=itemCount]').eq(3).contains('2');

			cy.get('[data-cy=incrementButton]').eq(2).click();
			cy.get('[data-cy=itemCount]').eq(2).contains('2');

		})

		it('Decrement Counter value', () => {

			cy.get('[data-cy=decrementButton]').eq(2).click();
			cy.get('[data-cy=itemCount]').eq(2).contains('1');

			cy.get('[data-cy=decrementButton]').eq(3).click();
			cy.get('[data-cy=itemCount]').eq(3).contains('1');

		})

		it('Total Counter Number is incremented', () => {

			cy.get('[data-cy=totalCounters]').contains('4');

		})

		it('Reset counter', () => {

			cy.get('[data-cy=resetCounter]').click();

			cy.get('[data-cy=totalCounters]').contains('0');
			cy.get('[data-cy=itemCount]').eq(0).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(1).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(2).contains('Zero');
			cy.get('[data-cy=itemCount]').eq(3).contains('Zero');

		})
		
		it('Delete Counter', () => {

			cy.get('[data-cy=deleteCounter]').eq(3).click();
			cy.get('[data-cy=itemCount]').should('have.length', 3);

		})

		it('Reset the amount of counters', () => {

			cy.get('[data-cy=deleteCounter]').eq(0).click();
			cy.get('[data-cy=deleteCounter]').eq(0).click();
			cy.get('[data-cy=deleteCounter]').click();

			cy.get('[data-cy=resetCounterNumber]').click();
			cy.get('[data-cy=itemCount]').should('have.length', 4);

		})
    
  })
  