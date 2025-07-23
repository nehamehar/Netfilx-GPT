import { Provider } from "react-redux";
import Body from "./components/Body"
import { AuthProvider} from "./components/AuthContext";
import appStore from "./utils/appStore";

function App() {
  return (
    <AuthProvider>
      <Provider store={appStore}>
        <Body/>
      </Provider>
   </AuthProvider>

  )
}

export default App;
