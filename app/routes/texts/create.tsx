import type { MetaFunction } from "@remix-run/node"; 
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  title: "New Text",
}); 

export default function create() {
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
