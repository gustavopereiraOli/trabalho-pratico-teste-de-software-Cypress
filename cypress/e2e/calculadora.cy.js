describe('Calculadora', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  //teste funcional ou de interface: garantir que os campos sejam limpos
  it('deve limpar os campos ao clicar em limpar', () => {
    cy.get('[data-cy="num1"]').type('10')
    cy.get('[data-cy="operacao"]').select('+')
    cy.get('[data-cy="num2"]').type('5')
    cy.get('[data-cy="calcular"]').click()
    cy.get('[data-cy="limpar"]').click()
    cy.get('[data-cy="num1"]').should('have.value', '')
    cy.get('[data-cy="num2"]').should('have.value', '')
    cy.get('[data-cy="resultado"]').should('be.empty')
  })
})