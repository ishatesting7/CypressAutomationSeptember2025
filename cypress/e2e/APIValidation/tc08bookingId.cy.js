/// <reference types="cypress" />

describe('Create Booking API Tests', () => {

    let bookingEndpoint = 'https://restful-booker.herokuapp.com/booking';
  
    beforeEach(() => {
      cy.fixture('bookingData').as('data');
    });
  
    // ✅ Positive Test Case - Valid Booking
    it('TC01 - Create Booking Successfully with Valid Data', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.validBooking
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
        expect(response.body.booking.firstname).to.eq(this.data.validBooking.firstname);
        expect(response.body.booking.lastname).to.eq(this.data.validBooking.lastname);
        expect(response.body.booking.totalprice).to.eq(this.data.validBooking.totalprice);
        expect(response.body.booking.depositpaid).to.be.true;
        expect(response.body.booking.bookingdates.checkin).to.eq(this.data.validBooking.bookingdates.checkin);
        expect(response.body.booking.bookingdates.checkout).to.eq(this.data.validBooking.bookingdates.checkout);
      });
    });
  
    // ❌ Negative Test - Missing Firstname
    it.only('TC02 - Should Fail when firstname is Missing', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.missingFirstname
      }).then((response) => {
        expect(response.status).to.be.oneOf([400, 500]); // API may return 500 for missing required fields
      });
    });
  
    // ❌ Negative Test - Invalid totalprice Type
    it('TC03 - Should Fail when totalprice is not a Number', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.invalidTotalPrice
      }).then((response) => {
        expect(response.status).to.be.oneOf([400, 500]);
      });
    });
  
    // ✅ Boundary Test - Check-in equals Check-out
    it('TC04 - Should Allow Same Checkin and Checkout Dates', function () {
      const sameDateBooking = {
        ...this.data.validBooking,
        bookingdates: {
          checkin: "2019-01-01",
          checkout: "2019-01-01"
        }
      };
  
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        headers: { 'Content-Type': 'application/json' },
        body: sameDateBooking
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.booking.bookingdates.checkin).to.eq("2019-01-01");
        expect(response.body.booking.bookingdates.checkout).to.eq("2019-01-01");
      });
    });
  
    // ✅ Content-Type Validation
    it('TC05 - Validate Response Content-Type Header', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.validBooking
      }).then((response) => {
        expect(response.headers['content-type']).to.include('application/json');
      });
    });
  
    // ✅ Schema Validation (Basic)
    it('TC06 - Validate Booking JSON Structure', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.validBooking
      }).then((response) => {
        const booking = response.body.booking;
        expect(booking).to.have.all.keys(
          'firstname',
          'lastname',
          'totalprice',
          'depositpaid',
          'bookingdates',
          'additionalneeds'
        );
        expect(booking.bookingdates).to.have.all.keys('checkin', 'checkout');
      });
    });
  
    // ✅ Performance Test
    it('TC07 - Response Time Should be Under 2 Seconds', function () {
      cy.request({
        method: 'POST',
        url: bookingEndpoint,
        headers: { 'Content-Type': 'application/json' },
        body: this.data.validBooking
      }).then((response) => {
        expect(response.duration).to.be.lessThan(2000);
      });
    });

    it.only('TC08 - Validating by missing checkin and checkout data', function(){

        cy.request({
            method:'POST',
            url:bookingEndpoint,
            headers:{'Content-Type':'application/json'},
            failOnStatusCode:false,
            body:this.data.missingCheckinCheckout
        }).then((response) =>{
            expect(response.status).to.be.oneOf([500,400])
        })
    })
  });
  