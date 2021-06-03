import '../styles/globals.css';
import '../styles/style.css';
import '../styles/fonts.css';
import '../styles/login.css';
import '../styles/loader.css';
import '../styles/panel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '/helpers/Context';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
