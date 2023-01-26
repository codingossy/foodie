import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );

}
