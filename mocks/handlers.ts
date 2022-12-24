import { rest } from 'msw'

export const handlers = [
  rest.get(`**/texts/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        name: 'name',
        body: 'body',
      }),
    )
  }),
]