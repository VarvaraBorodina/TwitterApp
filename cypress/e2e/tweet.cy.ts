import cypress from 'cypress'

describe('Test log in page', () => {
  const tweet = 'Some tweet'
  beforeEach(() => {
    cy.login()
  })

  it('Check Tweet button', () => {
    cy.contains('Tweet')
  })

  it('No tweets first', () => {
    cy.contains('0 tweets')
    cy.contains('No tweet yet :(')
  })

  it('Add tweet', () => {
    cy.contains('Tweet').click()
    cy.get('textarea').first().type(tweet)

    cy.contains('Tweet').click()
    cy.contains(tweet).click()
    cy.contains('1 tweets')
  })

  it('Tweet appear on feed page', () => {
    cy.contains('Feed').click()
    cy.contains('Tweet').click()
  })

  it('No like first', () => {
    cy.contains('0')
  })

  it('Like tweet', () => {
    cy.contains('0').click()
    cy.get('[data-cy=like]').click()
    cy.contains('1')
  })

  it('Remove like', () => {
    cy.contains('1').click()
    cy.get('[data-cy=like]').click()
    cy.contains('0')
  })

  it('Delete tweet', () => {
    cy.get('[data-cy=delete]').click()
    cy.contains(tweet).should('not.exist')
    cy.contains('No tweet yet :(')
    cy.contains('0 tweets')
  })
})
