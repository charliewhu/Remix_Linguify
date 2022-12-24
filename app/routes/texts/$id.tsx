import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import textService from "../../../services/texts.service"

type LoaderData = { id: number; name: string; body: string }

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: LoaderData = await textService.getText(+params.id)
  return data
}

export default function TextDetail() {
  const data = useLoaderData<LoaderData>()
  console.log(data)

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.body}</div>
    </div>
    )
  }
  