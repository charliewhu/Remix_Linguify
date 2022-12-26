import type { MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "My Texts",
});


export default function TextList() {
  return (
    <div>text list page</div>
  )
}
