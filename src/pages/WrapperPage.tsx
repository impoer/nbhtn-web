import { persistor } from '../store/store';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AuthPage from './AuthPage';

function WrapperPage() {
    return (
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <Routes>
                        <Route path="/login" element={<AuthPage />} />
                    </Routes>
                </div>
            </PersistGate>
        </BrowserRouter>
    );
}

export default WrapperPage;
