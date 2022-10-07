import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastProvider } from 'react-toast-notifications'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />;
    </ToastProvider>
  )
}
