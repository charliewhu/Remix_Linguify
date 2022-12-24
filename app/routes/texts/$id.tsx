import { useLoaderData } from "@remix-run/react"

type LoaderData = { id: number; name: string; body: string }

export default function TextDetail() {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.body}</div>
    </div>
    )
  }
  