// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    findRouterLinkFor(routeName: string): Chainable<Element>;
    enterTemperatureForConverter(temp: number): Chainable<Element>;
  }
}
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/** This finds the link for the named route */
Cypress.Commands.add("findRouterLinkFor", (routeName: string) => {
  return cy.get(`[data-router-link=${routeName}]`);
});


//  cy.get('[data-temp-converter-entry]').type('212');

Cypress.Commands.add("enterTemperatureForConverter", (temp: number) => {
  return cy.get('[data-temp-converter-entry]').type(temp.toString());
})
