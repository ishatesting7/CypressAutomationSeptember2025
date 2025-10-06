describe("API Validation - GET Request", () => {
    it("Validate GET Request", () => {
        // Endpoint - https://restful-booker.herokuapp.com/apidoc/index.html

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking'
        }).then((response) => {
            // Print the response body
            cy.log(JSON.stringify(response.body));

            // Validate the status code
            expect(response.status).to.eq(201);

            // Validate the response body contains at least one booking
            expect(response.body.length).to.be.greaterThan(0);

            // Validate specific fields in the first booking object
            expect(response.body[0]).to.have.property('bookingid');
        });
    
    })
    it('Validate GET Request with Query Parameters', () => {
        // Endpoint with Query Parameters - https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            qs: {
                firstname: 'Jim',
                lastname: 'Brown'
            }
        }).then((response) => {
            // Print the response body
            cy.log(JSON.stringify(response.body));

            // Validate the status code
            expect(response.status).to.eq(200);

            // Validate the response body contains at least one booking
            expect(response.body.length).to.be.greaterThan(0);

            // Validate specific fields in the first booking object
            expect(response.body[0]).to.have.property('bookingid');

            
        });
    });

    it('Intercept Request', ()=>{
        //Validate the intercept request
        cy.intercept()
        
    })
})