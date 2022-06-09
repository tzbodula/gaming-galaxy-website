import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="../../static/favicon.png" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          ></script>

          <script async src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
            <address-fields section="top">
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
