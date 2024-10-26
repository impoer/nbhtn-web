import { Provider } from 'react-redux';
import store from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import WrapperPage from './pages/WrapperPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId='661452861668-eo85l7lnvggfhbjl2camohn7grbma1qu.apps.googleusercontent.com'>
      <Provider store={store}>
        <WrapperPage/>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
