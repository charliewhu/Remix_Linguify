import { loader } from '../index';

describe('Loader', () => {
  it('should return data from the API', async () => {

    let request = new Request('http://fake.com/api/texts/');

    const response = await loader({request, context: {}, params: {}});

    expect(response).toEqual(
      [
        {id: 1, name: "name1", body: "body1"},
        {id: 2, name: "name2", body: "body2"}
      ]
    );
  })
})