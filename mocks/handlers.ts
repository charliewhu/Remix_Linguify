import { rest } from 'msw'

export const handlers = [
  rest.get(`**/api/texts/1/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'name',
        body: 'body',
      }),
    )
  }),
  rest.post('**/api/texts/', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        id: 1,
        name: 'name',
        body: 'body',
      })
    )
  }),
  rest.get('**/api/texts/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        id: 1,
        name: 'name1',
        body: 'body1',
      },
      {
        id: 2,
        name: 'name2',
        body: 'body2'
      }
    ])
    )
  })
]