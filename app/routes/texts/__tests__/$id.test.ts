import { loader } from '../$id';

describe('Loader', () => {
  it('should return data from API', async () => {
    const request = new Request('http://fake.api/1/');
    const response = await loader({request, context: {}, params: { id: "1" } });

    expect(response).toEqual({id: 1, name: "name", body: "body"})
  })
})