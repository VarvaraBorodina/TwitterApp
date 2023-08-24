import cypress from 'cypress'

import { ROUTE_NAMES } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl!.toString()

describe('Test auth page', () => {
  beforeEach(() => {
    cy.visit(ROUTE_NAMES.SIGNUP)
  })

  it('Redirect to auth page', () => {
    cy.contains('Use email').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.HOME}`)
  })

  it('Sign up', () => {
    cy.get('input[name=email]').type(`${new Date().getTime()}@mail.ru`)
    cy.get('input[name=phone]').type(`+${new Date().getTime()}`)
    cy.get('input[name=name]').type(`myName`)
    cy.get('input[name=lastName]').type(`myLastName`)
    cy.get('input[name=password]').type('password')

    cy.get('input[value=Gender]').click()
    cy.contains('Man').click()

    cy.get('input[value=Day]').click()
    cy.contains('10').click()

    cy.get('input[value=Month]').click()
    cy.contains('May').click()

    cy.get('input[value=Year]').click()
    cy.contains('2003').click()

    cy.get('button').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)

    cy.contains(`myName myLastName`)
  })

  it('Not enough data to sign up', () => {
    cy.get('button').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.SIGNUP}`)

    cy.contains(`name is a required field`)
  })

  it('User already exist', () => {
    cy.get('input[name=email]').type(`test@mail.ru`)
    cy.get('input[name=phone]').type(`+${new Date().getTime()}`)
    cy.get('input[name=name]').type(`myName`)
    cy.get('input[name=lastName]').type(`myLastName`)
    cy.get('input[name=password]').type('password')

    cy.get('input[value=Gender]').click()
    cy.contains('Man').click()

    cy.get('input[value=Day]').click()
    cy.contains('10').click()

    cy.get('input[value=Month]').click()
    cy.contains('May').click()

    cy.get('input[value=Year]').click()
    cy.contains('2003').click()

    cy.get('button').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.SIGNUP}`)

    cy.contains(`Email already exist`)
  })
})
