import { action } from '../create';

describe('Action', () => {
  it('should redirect to TextDetail page', async () => {
    
    let body = new URLSearchParams({
      name: "name",
      body: "body"
    });

    let request = new Request('http://fake.com/api/texts/', {
      method: "POST",
      body,
    });

    const response = await action({ request, params: {}, context: {} });

    expect(response.status).toEqual(302);
  })
})