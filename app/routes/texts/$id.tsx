import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import textService from "../../../services/texts.service"

type LoaderData = { id: number; name: string; body: string }

export const loader: LoaderFunction = async ({ params }) => {
  const data: LoaderData = await textService.getText(params.id)
  return data
}

export default function TextDetail() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <Link to="/texts/" data-testid="goBackBtn">Back</Link>
      <div>{data.name}</div>
      <div>{data.body}</div>
    </div>
  )
}
  