import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PDFChatBot from './components/PDFChatBot';
import CollegeList from './collegepage/CollegeList';
import CollegeDetails from './collegepage/CollegeDetails';
import WebsiteChat from './ChatBots/WebsiteChat';
import Trys from './pages/Trys';
import Homepage from './pages/Homepage';

import PrivateRouter from './components/PrivateRouter';
import Dashboard from './DashboardDetails/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/colleges" element={<CollegeList />} />
        <Route path="/college/:id" element={<CollegeDetails />} />

        {/* 🔐 PROTECTED ROUTES */}
        <Route element={<PrivateRouter />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/chatbot" element={<PDFChatBot />} />
          <Route path="/chat" element={<WebsiteChat />} />
          <Route path="/try" element={<Trys />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
