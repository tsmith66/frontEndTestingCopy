describe('getting the api', () => {

  beforeEach(() => cy.request('http://localhost/movies').as('movies'))
  it('should return the 200 status code.', () => {
    cy.get('@movies').its('status').should('be.equal', 200)
  });
  it('has json content type', () => {
    cy.get('@movies').its('headers').its('content-type').should('include', 'application/json');
  });

  it('has the correct body', () => {
    cy.get('@movies').its('body').should('have.a.property', 'data');
    // cy.get('@movies').its('body').get('data').should('have.length', 5);
  });
});
