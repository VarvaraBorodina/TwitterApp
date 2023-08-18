/// <reference types="cypress" />
// ***********************************************

import ROUTE_NAMES from '../routeNames'

Cypress.Commands.add('login', () => {
  cy.visit(ROUTE_NAMES.LOGIN)
  cy.get('input[name=login]').type('test@mail.ru')
  cy.get('input[name=password]').type('password')
  cy.get('button').click()
})

Cypress.Commands.add('feed', () => {
  cy.login()
  cy.wait(2000)
  cy.contains('Feed').click()
})
