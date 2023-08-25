import cypress from 'cypress'

import { ROUTE_NAMES } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl!.toString()

describe('Test log in page', () => {
  beforeEach(() => {
    cy.visit(ROUTE_NAMES.PROFILE)
  })

  it('Redirect to auth page without autharithation', () => {
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.HOME}`)
  })

  it('Chech user after log in', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.contains('test test')
  })

  it('Edit profile', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.contains('Edit profile').click()

    cy.get('input[name=name]').type(`1`)
    cy.contains('Save').click()
    cy.contains('test1 test')

    cy.contains('Edit profile').click()
    cy.get('input[name=name]').clear()
    cy.get('input[name=name]').type(`test`)
    cy.contains('Save').click()
  })

  it('Check user age', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)
    cy.contains('26 years old')
  })

  it('Add telegarm', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)

    cy.contains('Edit profile').click()
    cy.get('input[name=telegram]').clear()
    cy.get('input[name=telegram]').type(`myTelegram`)
    cy.contains('Save').click()

    cy.contains('@myTelegram 26 years old')

    cy.contains('Edit profile').click()
    cy.get('input[name=telegram]').clear()
    cy.contains('Save').click()
  })

  it('Log out', () => {
    cy.login()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)

    cy.contains('Log out').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.HOME}`)
  })
})
