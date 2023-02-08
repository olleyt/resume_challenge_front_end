describe('Visitor Counter Test', () => {
    let startingValue;
    beforeEach(() => {
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('.badge.badge-info').as('counterContainer')
      cy.get('@counterContainer').then(($label) => {
        startingValue = parseInt($label.text())
      })
    })
    it('checks the value of the visitor counter', () => {
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('@counterContainer').then(($label) => {
        const value = parseInt($label.text())
        expect(value).to.equal(startingValue + 1)
      })
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('@counterContainer').then(($label) => {
        const value = parseInt($label.text())
        expect(value).to.equal(startingValue + 2)
      })
    })
  })

  
  
  
  