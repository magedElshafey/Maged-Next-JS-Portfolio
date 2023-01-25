import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Components/Redux/store";
import SharedLayOut from "../Components/LayOut/SharedLayOut";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SharedLayOut>
        <Component {...pageProps} />
      </SharedLayOut>
    </Provider>
  );
}

export default MyApp;
