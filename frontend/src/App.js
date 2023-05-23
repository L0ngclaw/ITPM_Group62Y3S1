import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import the styles for ToastContainer

import Header from './Components/Header';
import Footer from './Components/Footer';
import AddService from './Pages/AddService';
import SearchPage from './Pages/SearchPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<AddService />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </main>
                <Footer />
                <ToastContainer autoClose={3000} hideProgressBar />
            </BrowserRouter>
        </>
    );
}

export default App;
