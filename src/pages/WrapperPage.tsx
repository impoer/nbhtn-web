import { persistor, RootState } from '../store/store';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './LayoutPage';
import MyReactCodeEditor from '../components/ReactCodeEditor';
import ChatPage from './ChatPage';
import UsersPage from './UsersPage';
import SettingsPage from './SettingsPage';
import AuthPage from './AuthPage';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';

function WrapperPage() {
    const user = useSelector((state: RootState) => state.user);

    return (
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <Routes>
                        <Route path="/login" element={<AuthPage />} />
                        <Route element={<Layout />}>
                            <Route 
                              path="/" 
                              element={
                                <ProtectedRoute>
                                  <MyReactCodeEditor />
                                </ProtectedRoute>
                              } 
                            />
                            <Route 
                              path="/chat" 
                              element={
                                <ProtectedRoute>
                                  <ChatPage />
                                </ProtectedRoute>
                              } 
                            />
                            <Route 
                              path="/users" 
                              element={
                                <ProtectedRoute>
                                  <UsersPage />
                                </ProtectedRoute>
                              } 
                            />
                            <Route 
                              path="/settings" 
                              element={
                                <ProtectedRoute>
                                  <SettingsPage />
                                </ProtectedRoute>
                              } 
                            />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Route>
                    </Routes>
                </div>
            </PersistGate>
        </BrowserRouter>
    );
}

export default WrapperPage;
