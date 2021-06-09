describe('routing from the root', () => {

  beforeEach(() => {
    cy.visit('/');
  });
  it('can go to converter', () => {
    cy.findRouterLinkFor('converter').click();
    cy.get('[data-temp-converter]');
  });

  it('can go home', () => {
    cy.findRouterLinkFor('home').click();
    cy.get('[data-home]');
  });
  it('when not found redirect to home', () => {
    cy.visit('/tacos');
    cy.get('[data-home]');
  });
});
