import cypress from 'cypress'

import { ROUTE_NAMES } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl!.toString()

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(ROUTE_NAMES.HOME)
  })

  it('Redirect to log in page', () => {
    cy.contains('Log in').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.LOGIN}`)
  })

  it('Redirect to sign up page', () => {
    cy.contains('Sign up with phone or email').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.SIGNUP}`)
  })
})
