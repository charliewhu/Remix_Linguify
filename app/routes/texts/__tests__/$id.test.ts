import { loader } from '../$id';

describe('Loader', () => {
  it('should return data from API', () => {
    const request = new Request('http://fake.api/1/');
    const response = loader({request, context: {}, params: { id: "1" } });

    expect(response).toEqual(2)
  })
})