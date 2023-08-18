import cypress from 'cypress'

import ROUTE_NAMES from '../routeNames'

describe('Test log in page', () => {
  it('Lignt theme first', () => {
    cy.login()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Lignt theme first on feed page', () => {
    cy.feed()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Change theme', () => {
    cy.feed()
    cy.get('div[data-cy=toggle]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(30, 37, 41)')
  })

  it('Change theme save after reload', () => {
    cy.feed()
    cy.get('div[data-cy=toggle]').click()
    cy.reload()
    cy.get('body').should('have.css', 'background-color', 'rgb(30, 37, 41)')
  })

  it('Change theme back to light', () => {
    cy.feed()
    cy.get('div[data-cy=toggle]').click()
    cy.get('div[data-cy=toggle]').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('Dark theme on profile page', () => {
    cy.feed()
    cy.get('div[data-cy=toggle]').click()
    cy.visit(ROUTE_NAMES.PROFILE)
    cy.get('body').should('have.css', 'background-color', 'rgb(30, 37, 41)')
  })
})
