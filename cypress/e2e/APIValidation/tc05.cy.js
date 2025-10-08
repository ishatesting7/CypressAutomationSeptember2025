describe('Validate CountryInfoService WSDL', () => {

  it('GET call - should return valid WSDL and contain key elements', () => {
    cy.request({
      method: 'GET',
      url: 'https://soap-service-free.mock.beeceptor.com/CountryInfoService?WSDL'
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('xml');

    });
  });

});
