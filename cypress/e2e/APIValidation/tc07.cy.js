// cypress/e2e/api/booking_get.spec.js

describe('GET Booking by ID API Tests', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com'
  const validId = 11
  const invalidId = 999999
  const invalidStringId = 'abc'

  it('TC01 - should fetch booking by valid ID', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${validId}`
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.headers['content-type']).to.include('application/json')
      expect(resp.body).to.have.all.keys(
        'firstname',
        'lastname',
        'totalprice',
        'depositpaid',
        'bookingdates',
        'additionalneeds'
      )
      expect(resp.body.bookingdates).to.have.all.keys('checkin', 'checkout')
      expect(resp.body.firstname).to.be.a('string')
      expect(resp.body.lastname).to.be.a('string')
      expect(resp.body.totalprice).to.be.a('number')
      expect(resp.body.depositpaid).to.be.a('boolean')
    })
  })

  it('TC02 - should return 404 for invalid numeric ID', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${invalidId}`,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('TC03 - should return error for invalid string ID', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${invalidStringId}`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([400, 404]).to.include(resp.status)
    })
  })

  it('TC04 - should validate response time', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${validId}`
    }).then((resp) => {
      expect(resp.duration).to.be.lessThan(1000)
    })
  })

  it('TC05 - should validate headers', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/booking/${validId}`
    }).then((resp) => {
      expect(resp.headers).to.have.property('content-type')
      expect(resp.headers['content-type']).to.include('application/json')
      expect(resp.headers).to.have.property('server')
    })
  })

  it('TC06 - should fail for invalid HTTP method', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/booking/${validId}`,
      failOnStatusCode: false
    }).then((resp) => {
      expect([404, 405]).to.include(resp.status)
    })
  })
})
