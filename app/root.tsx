import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

if (process.env.NODE_ENV === 'development') {
  require('../mocks/server') 
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Linguify",
  viewport: "width=device-width,initial-scale=1",
}); 

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
