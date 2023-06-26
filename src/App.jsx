import {
  BrowserRouter ,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AuthProvider from './setup/AuthProvider';
import Routers from "./setup/RoutesManager/Routers";

function App() {


  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  )

}

export default App
