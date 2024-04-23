import { type FreshContext, FreshScripts } from "@fresh/core";

export default function App({ Component }: FreshContext) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-2-example</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
        <FreshScripts />
      </body>
    </html>
  );
}
