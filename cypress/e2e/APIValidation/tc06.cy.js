// cypress/e2e/ping.spec.js

describe('Ping / HealthCheck API', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com'

  it('should return healthy status (GET /ping)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/ping`,
      failOnStatusCode: false  // so we can catch unexpected statuses
    }).then((resp) => {
      // Inspect status code
      expect([200, 201]).to.include(resp.status)
      // Optionally, check body
      // e.g. if body is empty:
      expect(resp.body).to.be.oneOf([{}, '', null])
      // Or if spec mentions something else, validate accordingly
    })
  })

  it('should 404 for wrong path', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pingg`, 
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.equal(404)
    })
  })

  it('method not allowed for POST /ping', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/ping`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([404, 405]).to.include(resp.status)
    })
  })

  it('should respond quickly', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/ping`,
      failOnStatusCode: false
    }).then((resp) => {
      // Cypress’s built-in timing is in ms
      expect(resp.duration).to.be.lessThan(500)  // adjust threshold as needed
    })
  })

  it('should accept trailing slash if allowed', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/ping/`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([200, 201]).to.include(resp.status)
    })
  })
})
