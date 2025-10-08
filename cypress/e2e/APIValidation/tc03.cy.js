//https://restful-booker.herokuapp.com/apidoc/index.html
describe('End to End Validation of all the APIs', ()=>{

    it('End to End Validation', ()=>{

        let tokenValue;
        // Authenticate and assert we receive a token
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            headers: { 'Content-Type': 'application/json' },
            body: {
                username: 'admin',
                password: 'password123'
            }
        }).then((response) => {
            // Basic assertions
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            // You can log the token if needed for downstream requests
            cy.log('Auth token:', response.body.token)
            tokenValue = response.body.token
        })
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'GET'
        }).then((response)=>{

            expect(response.status).to.eq(200)
            
        })
    
    })
})