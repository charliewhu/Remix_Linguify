import React from 'react';
import type { MetaFunction } from "@remix-run/node"; 

export const meta: MetaFunction = () => ({
  title: "New Text",
}); 

export default function create() {
  return (
    <>
      <form method='POST'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
      </form>
    </>
  );
}
