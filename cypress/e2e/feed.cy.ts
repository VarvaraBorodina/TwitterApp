import cypress from 'cypress'

import ROUTE_NAMES from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl!.toString()

describe('Test log in page', () => {
  beforeEach(() => {
    cy.visit(ROUTE_NAMES.FEED)
  })

  it('Redirect to auth page without autharithation', () => {
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.HOME}`)
  })

  it('Visit feed', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.wait(1000)
    cy.contains('Feed').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.FEED}`)
  })

  it('No log out', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.wait(1000)
    cy.contains('Feed').click()
    cy.contains('Log out').should('not.exist')
  })

  it('Save user after reload', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.wait(1000)
    cy.contains('Feed').click()
    cy.reload()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.FEED}`)
  })
})
