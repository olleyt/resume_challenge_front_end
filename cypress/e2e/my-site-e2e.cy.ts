describe('Visitor Counter Test', () => {
    let startingValue;
    beforeEach(() => {
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('.btn-info').as('counterContainer')
      cy.get('@counterContainer').then(($btn) => {
        startingValue = parseInt($btn.text())
      })
    })
    it('checks the value of the button info element', () => {
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('@counterContainer').then(($btn) => {
        const value = parseInt($btn.text())
        expect(value).to.equal(startingValue + 1)
      })
      cy.visit('https://test.coolarchitect.link/')
      cy.wait(3000) // wait for 3 seconds
      cy.get('@counterContainer').then(($btn) => {
        const value = parseInt($btn.text())
        expect(value).to.equal(startingValue + 2)
      })
    })
  })

  
  
  
  