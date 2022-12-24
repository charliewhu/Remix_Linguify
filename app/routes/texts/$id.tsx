import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"

type LoaderData = { id: number; name: string; body: string }

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: LoaderData = {
    id: 1,
    name: "fake",
    body: "fake body"
  };
  return data
}

export default function TextDetail() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.body}</div>
    </div>
    )
  }
  