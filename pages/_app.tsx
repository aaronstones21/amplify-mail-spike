import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import awsmobile from '../aws-exports.js';
import '../styles/globals.css';

Amplify.configure({ ...awsmobile, ssr: true});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
