import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/magnific-popup.css'
import '../styles/fontawesome-all.min.css'
import '../styles/slick.css'
import '../styles/aos.css'
import '../styles/default.css'
import '../styles/responsive.css'
import '../styles/style.css'
import '../styles/grid.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
