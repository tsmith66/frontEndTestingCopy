// movies-raw.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('movies raw', () => {

  it('using good data', () => {
    cy.intercept('GET', 'http://localhost/movies', { fixture: 'movies-raw-ok.json' })
    cy.visit('/movies/raw');

    cy.get('[data-movies-raw-list]').children('li').should('have.length', 2);
    cy.get('[data-movies-raw-list-item=0]').should('contain.text', 'Jaws by Spielberg was released in (unknown)');
    cy.get('[data-movies-raw-error]').should('not.exist');
    cy.get('[data-movies-raw-list-item=1]').should('contain.text', 'Apocolypse Now by Coppola was released in 1974');
  });

  it('displays a message when the api is down', () => {
    cy.intercept('GET', 'http://localhost/movies', { statusCode: 404 });
    cy.visit('/movies/raw');

    cy.get('[data-movies-raw-list]').should('not.exist');
    cy.get('[data-movies-raw-error]').should('contain.text', 'Sorry! There was error!');
  });
});
