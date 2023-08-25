import cypress from 'cypress'

import { ROUTE_NAMES } from '../routeNames'

const baseUrlL: string = Cypress.config().baseUrl!.toString()

describe('Test log in page', () => {
  beforeEach(() => {
    cy.visit(ROUTE_NAMES.LOGIN)
  })

  it('Redirect to sign up page', () => {
    cy.contains('Sign Up To Twitter').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.SIGNUP}`)
  })

  it('Log in with email', () => {
    cy.get('input[name=login]').type('test@mail.ru')
    cy.get('input[name=password]').type('password')
    cy.get('button').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)

    cy.contains('test test').click()
  })

  it('Log in with phone', () => {
    cy.get('input[name=login]').type('+0012233444')
    cy.get('input[name=password]').type('password')
    cy.get('button').click()
    cy.url().should('eq', `${baseUrlL}${ROUTE_NAMES.PROFILE}`)

    cy.contains('test test').click()
  })

  it('Log in with wrong password', () => {
    cy.get('input[name=login]').type('test@mail.ru')
    cy.get('input[name=password]').type('password1')
    cy.get('button').click()

    cy.contains('Wrong password').click()
  })

  it('Log in with wrong email', () => {
    cy.get('input[name=login]').type('test@mail.ru1')
    cy.get('input[name=password]').type('password')
    cy.get('button').click()

    cy.contains('User not found').click()
  })

  it('Log in with wrong phone', () => {
    cy.get('input[name=login]').type('+00122334441')
    cy.get('input[name=password]').type('password')
    cy.get('button').click()

    cy.contains('User not found').click()
  })
})
