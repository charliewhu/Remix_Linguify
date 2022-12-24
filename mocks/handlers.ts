import { rest } from 'msw'

let url = "https://linguify.up.railway.app/api"

export const handlers = [
  rest.get(`${url}/texts/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]