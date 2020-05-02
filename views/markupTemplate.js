const markupTemplate = (hydration) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Server-side rendered React PWA">
        <title>SSR React PWA</title>
        </head>
        <body>
        <div id="root">${hydration}</div>
        <script src="/app.bundle.js" defer></script>
        </body>
        </html>
        `
}
          //<link rel="stylesheet" href="/style.bundle.css">

export default markupTemplate