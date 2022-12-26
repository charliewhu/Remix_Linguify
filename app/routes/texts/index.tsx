import type { MetaFunction} from "@remix-run/node";
import textService from "services/texts.service";

export const meta: MetaFunction = () => ({
  title: "My Texts",
});

export default function TextList() {
  return (
    <div>
        {textService.map(text => (
            <li key={text.id}>{text.name}</li>
        ))}
    </div>
  )
}
