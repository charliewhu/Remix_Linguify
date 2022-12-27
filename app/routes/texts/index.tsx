import type { LoaderFunction, MetaFunction} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import textService from "services/texts.service";

type LoaderData = { id: number; name: string; body: string }

export const meta: MetaFunction = () => ({
  title: "My Texts",
});

export const loader: LoaderFunction = async () => {
  const data: Array<LoaderData> = await textService.getTexts()
  return data
}

export default function TextList() {
  const data = useLoaderData<Array<LoaderData>>()
  
  return (
    <div>
      {data.map(text => (
        <li key={text.id}>
          <Link to={text.id.toString()} data-testid='textItem'>
            {text.id}-{text.name}
          </Link>
        </li>
      ))}
    </div>
  )
}
    