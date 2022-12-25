import type { ActionFunction, MetaFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node"; 
import { Form } from "@remix-run/react";
import textService from "services/texts.service";

export const meta: MetaFunction = () => ({
  title: "New Text",
});

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData()
  const name = form.get('name')
  const body = form.get('body')

  textService.postText({name, body})

  return redirect('/texts/1')
}

export default function TextCreate() {
  return (
    <>
      <Form method='post'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <textarea
          name='body'
          id='body'
          placeholder='Body'
        />
        <button type='submit'>
          Create
        </button>
      </Form>
    </>
  );
}
