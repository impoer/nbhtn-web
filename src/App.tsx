// src/App.tsx
import { Provider } from 'react-redux';
import store from './store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import ProtectedRoute from './components/ProtectedRoute';
import NavigationBar from './components/Sidebar'; // Updated to NavigationBar
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register'];
  const isNavbarVisible = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="app-container">
      {isNavbarVisible && <NavigationBar />}
      <div className="content">
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accounts"
            element={
              <ProtectedRoute>
                <Accounts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <GoogleOAuthProvider clientId="661452861668-eo85l7lnvggfhbjl2camohn7grbma1qu.apps.googleusercontent.com">
      <Provider store={store}>
        <Router>
          <AppContent />
        </Router>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
