import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='http://fonts.cdnfonts.com/css/clash-display'
          rel='stylesheet'
        />
        <link
          href='https://api.fontshare.com/css?f[]=switzer@400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
