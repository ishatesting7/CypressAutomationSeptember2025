describe('Create Booking and Validate DB', () => {

    it('POST Create Booking via API', () => {
  
      // Step 1 - Create Booking
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          firstname: 'Jim',
          lastname: 'Brown',
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01'
          },
          additionalneeds: 'Breakfast'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
  
        // Step 2 - Extract booking id
        const bookingId = response.body.bookingid;
        cy.log(`Booking ID: ${bookingId}`);
  
        // Step 3 (Optional) - Validate in Database
        // Example: Check if this booking exists in a test DB (if you store API data)
        const query = `SELECT * FROM bookings WHERE booking_id = ${bookingId}`;
        cy.task('queryDb', query).then((result) => {
          cy.log(JSON.stringify(result));
          // Add validation if your DB has data for bookings
          // expect(result[0].firstname).to.eq('Jim');
        });
      });
    });
  });
  