// cypress/e2e/restful-booker.cy.js
describe('Restful-Booker API End-to-End Test Suite', () => {
    // Define initial payloads and authentication credentials
    const authPayload = {
        username: 'admin',
        password: 'password123',
    };

    let initialBookingPayload = {
        firstname: 'Jane',
        lastname: 'Doe',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: '2025-01-01',
            checkout: '2025-01-05',
        },
        additionalneeds: 'Breakfast',
    };

    let updatedBookingPayload = {
        firstname: 'Jane', // Same firstname
        lastname: 'Doe-Updated', // Full update changes last name
        totalprice: 999, // Changed price
        depositpaid: false, // Changed deposit status
        bookingdates: {
            checkin: '2025-02-10',
            checkout: '2025-02-15',
        },
        additionalneeds: 'Dinner and Lunch',
    };

    // --- Setup: Get Auth Token ---
    before('Authenticate and obtain a token', () => {
        cy.request({
            method: 'POST',
            url: '/auth',
            body: authPayload,
        }).then((response) => {
            // Assert that the token creation was successful
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            // Store the token as an alias for subsequent tests
            cy.wrap(response.body.token).as('token');
            cy.log(`Authentication successful. Token: ${response.body.token.substring(0, 10)}...`);
        });
    });

    // --- API 1: Health Check (GET /ping) ---
    it('1. Should confirm the API is up and running with a Health Check', () => {
        cy.request({
            method: 'GET',
            url: '/ping',
        }).then((response) => {
            expect(response.status).to.eq(201); // Restful-Booker uses 201 for ping success
            expect(response.body).to.eq('Created');
        });
    });

    // --- API 2: Create Booking (POST /booking) ---
    it('2. Should successfully create a new booking', () => {
        cy.request({
            method: 'POST',
            url: '/booking',
            body: initialBookingPayload,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('bookingid').and.be.a('number');
            expect(response.body.booking.firstname).to.eq(initialBookingPayload.firstname);
            // Store the dynamic bookingid as an alias
            cy.wrap(response.body.bookingid).as('bookingId');
            cy.log(`Booking created with ID: ${response.body.bookingid}`);
        });
    });

    // --- API 3: Get Booking (GET /booking/:id) ---
    it('3. Should retrieve the newly created booking by ID', function() {
        // Use the stored alias 'bookingId'
        cy.request({
            method: 'GET',
            url: `/booking/${this.bookingId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.firstname).to.eq(initialBookingPayload.firstname);
            expect(response.body.lastname).to.eq(initialBookingPayload.lastname);
            expect(response.body.totalprice).to.eq(initialBookingPayload.totalprice);
        });
    });

    // --- API 4: Update Booking (PUT /booking/:id) ---
    it('4. Should fully update the booking details using PUT', function() {
        // Use both stored aliases: 'bookingId' and 'token'
        cy.request({
            method: 'PUT',
            url: `/booking/${this.bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Authorization header required for PUT/PATCH/DELETE
                'Cookie': `token=${this.token}`,
            },
            body: updatedBookingPayload,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Verify the update
            expect(response.body.lastname).to.eq(updatedBookingPayload.lastname);
            expect(response.body.totalprice).to.eq(updatedBookingPayload.totalprice);
        });
    });

    // --- API 5: Partial Update Booking (PATCH /booking/:id) ---
    it('5. Should partially update the booking (e.g., totalprice and needs) using PATCH', function() {
        const patchPayload = {
            totalprice: 1999, // New price
            additionalneeds: 'Late Checkout', // New need
        };

        cy.request({
            method: 'PATCH',
            url: `/booking/${this.bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${this.token}`,
            },
            body: patchPayload,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Verify only patched fields were updated
            expect(response.body.totalprice).to.eq(patchPayload.totalprice);
            expect(response.body.additionalneeds).to.eq(patchPayload.additionalneeds);
            // Ensure non-patched fields from the PUT remain the same
            expect(response.body.lastname).to.eq(updatedBookingPayload.lastname);
        });
    });

    // --- API 6: Delete Booking (DELETE /booking/:id) ---
    it('6. Should delete the booking successfully', function() {
        cy.request({
            method: 'DELETE',
            url: `/booking/${this.bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                // The DELETE request typically returns 201 Created on success for this API
                'Cookie': `token=${this.token}`,
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.eq('Created');
        });
    });

    // --- API 7: Verify Deletion (GET /booking/:id) ---
    it('7. Should verify the booking is deleted by getting a 404', function() {
        cy.request({
            method: 'GET',
            url: `/booking/${this.bookingId}`,
            failOnStatusCode: false, // Prevent Cypress from failing on 404
        }).then((response) => {
            // Verify that trying to retrieve the deleted booking returns 404 Not Found
            expect(response.status).to.eq(404);
            expect(response.body).to.eq('Not Found');
        });
    });

    // --- API 8: Get All Bookings (GET /booking) ---
    it('8. Should list all bookings and confirm the deleted ID is not present', function() {
        cy.request({
            method: 'GET',
            url: '/booking',
            qs: {
                // Optional: Filter by the first name used in the E2E flow to narrow the search
                firstname: initialBookingPayload.firstname
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            
            // Check that the deleted bookingId is NOT in the list
            const isBookingIdPresent = response.body.some(booking => booking.bookingid === this.bookingId);
            expect(isBookingIdPresent).to.be.false;
        });
    });
});