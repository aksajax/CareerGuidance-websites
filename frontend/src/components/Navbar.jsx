import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { clearTokens, getAccessToken } from '../utils/auth.js';
import axios from 'axios'; // API Call ke liye

function Navbar() {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    // --- CHATBOT STATES ---
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste! Main CGP AI Assistant hoon. Main aapki kya madad kar sakta hoon?' }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const isLoggedIn = !!getAccessToken();
    

    // Auto-scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }

         const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
    }, [messages]);

    // const handleLogout = () => {
    //     clearTokens();
    //     navigate('/');
    // };
    const handleLogout = () => {
  clearTokens();          // localStorage se token delete
  localStorage.removeItem("token"); // agar token alag se store hai
  navigate("/", { replace: true });

  // force reload so Navbar state reset ho jaye
  window.location.reload();
};
  

    // --- CHATBOT SEND LOGIC ---
    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            // Django Chatbot API ko call karna
            const response = await axios.post(`${BASEURL}/api/chat/`, { message: input });
            setMessages(prev => [...prev, { role: 'bot', text: response.data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "Server busy hai, kripya thodi der baad koshish karein." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <nav className={`fixed top-0 w-full z-50 border-b border-black/60 shadow-lg 
  transition-all duration-300 ease-out
  ${scrolled
    ? "bg-[#0b0b0b]/90 backdrop-blur-md scale-[1.03] shadow-lg"
    : "bg-transparent scale-100"}
  `}>
    
              <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
                <div className="flex items-center justify-between h-22 ">
            
                  {/* Logo */}
                 <Link to="/" className="flex items-center gap-3 group">
  
  <div
    className="w-9 h-9 rounded-xl 
               bg-lime-400 text-black 
               flex items-center justify-center 
               font-bold text-lg
               shadow-[0_0_15px_rgba(163,230,53,0.6)]
               transition group-hover:scale-110"
  >
    C
  </div>

  <span className="text-white font-semibold text-lg tracking-wide">
    CGP
  </span>

</Link>

            
                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            
                    {/* Product Dropdown */}
                   
                       <div className="relative group">
              <span className="cursor-pointer hover:text-white flex items-center gap-1">
                Product ▾
              </span>
            
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#111] border border-white/10 rounded-xl shadow-xl
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-3 space-y-1 text-sm">
            
                  <Link to="/products"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Product List
                  </Link>
            
                  <Link to="/product/ai-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    AI website builder
                  </Link>
            
                  <Link to="/product/integrations"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Data source integrations
                  </Link>
            
                  <Link to="/product/cms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Headless CMS integrations
                  </Link>
            
                  <Link to="/product/localization"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Localization
                  </Link>
            
                  <Link to="/product/templates"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Static website templates
                  </Link>
            
                  <Link to="/product/forms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Form management system
                  </Link>
            
                  <Link to="/product/seo"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    SEO toolkit
                  </Link>
            
                  <Link to="/product/figma"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Figma plugin
                  </Link>
            
                </div>
              </div>
            </div>
                       <div className="relative group">
              <span className="cursor-pointer hover:text-white flex items-center gap-1">
                Product ▾
              </span>
            
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#111] border border-white/10 rounded-xl shadow-xl
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-3 space-y-1 text-sm">
            
                  <Link to="/product/website-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Professional website builder
                  </Link>
            
                  <Link to="/product/ai-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    AI website builder
                  </Link>
            
                  <Link to="/product/integrations"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Data source integrations
                  </Link>
            
                  <Link to="/product/cms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Headless CMS integrations
                  </Link>
            
                  <Link to="/product/localization"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Localization
                  </Link>
            
                  <Link to="/product/templates"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Static website templates
                  </Link>
            
                  <Link to="/product/forms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Form management system
                  </Link>
            
                  <Link to="/product/seo"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    SEO toolkit
                  </Link>
            
                  <Link to="/product/figma"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Figma plugin
                  </Link>
            
                </div>
              </div>
            </div>
                       <div className="relative group">
              <span className="cursor-pointer hover:text-white flex items-center gap-1">
                Product ▾
              </span>
            
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#111] border border-white/10 rounded-xl shadow-xl
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-3 space-y-1 text-sm">
            
                  <Link to="/product/website-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Professional website builder
                  </Link>
            
                  <Link to="/product/ai-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    AI website builder
                  </Link>
            
                  <Link to="/product/integrations"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Data source integrations
                  </Link>
            
                  <Link to="/product/cms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Headless CMS integrations
                  </Link>
            
                  <Link to="/product/localization"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Localization
                  </Link>
            
                  <Link to="/product/templates"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Static website templates
                  </Link>
            
                  <Link to="/product/forms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Form management system
                  </Link>
            
                  <Link to="/product/seo"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    SEO toolkit
                  </Link>
            
                  <Link to="/product/figma"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Figma plugin
                  </Link>
            
                </div>
              </div>
            </div>
                       <div className="relative group">
              <span className="cursor-pointer hover:text-white flex items-center gap-1">
                Product ▾
              </span>
            
              <div className="absolute top-full left-0 mt-3 w-72 bg-[#111] border border-white/10 rounded-xl shadow-xl
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-3 space-y-1 text-sm">
            
                  <Link to="/product/website-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Professional website builder
                  </Link>
            
                  <Link to="/product/ai-builder"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    AI website builder
                  </Link>
            
                  <Link to="/product/integrations"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Data source integrations
                  </Link>
            
                  <Link to="/product/cms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Headless CMS integrations
                  </Link>
            
                  <Link to="/product/localization"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Localization
                  </Link>
            
                  <Link to="/product/templates"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Static website templates
                  </Link>
            
                  <Link to="/product/forms"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Form management system
                  </Link>
            
                  <Link to="/product/seo"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    SEO toolkit
                  </Link>
            
                  <Link to="/product/figma"
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5">
                    Figma plugin
                  </Link>
            
                </div>
              </div>
            </div>
        
            
                    <Link to="/colleges" className="hover:text-white">
                      CollegeList
                    </Link>
            
                    <Link to="/pricing" className="hover:text-white">
                      Pricing
                    </Link>
                  </div>
            
                  {/* Right Actions */}
                  <div className="hidden md:flex items-center gap-4">
                    {!isLoggedIn ? (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-2 text-sm text-gray-300 hover:text-white"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90"
                        >
                          Start for free
                        </Link>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setIsChatOpen(!isChatOpen)}
                          className="text-gray-300 hover:text-white text-sm"
                        >
                          ChatBot
                        </button>
            
                        <Link to="/cart" className="relative text-gray-300 hover:text-white">
                          🛒
                          {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 w-5 h-5 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">
                              {cartCount}
                            </span>
                          )}
                        </Link>
            
                        <button
                          onClick={handleLogout}
                          className="text-red-400 hover:text-red-500 text-sm"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>
            
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-300 hover:text-white"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </nav>
            


            {/* --- INTEGRATED AI CHATBOT WINDOW --- */}
            {isLoggedIn && isChatOpen && (
                <div className="fixed bottom-24 right-6 w-[350px] md:w-[380px] h-[500px] bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden z-[100] flex flex-col animate-in slide-in-from-bottom-10 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 text-white flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🤖</div>
                            <div>
                                <p className="font-bold text-sm">CGP AI Assistant</p>
                                <p className="text-[10px] text-indigo-100">Always Online</p>
                            </div>
                        </div>
                        <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 rounded-full p-1">&times;</button>
                    </div>

                    {/* Chat Messages Area */}
                    <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                                    msg.role === 'user' 
                                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="text-xs text-gray-400 italic">Typing...</div>}
                        <div ref={scrollRef}></div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t flex gap-2">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none text-sm focus:ring-1 focus:ring-indigo-400"
                        />
                        <button 
                            onClick={sendMessage}
                            className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            {isLoggedIn && (
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-tr from-indigo-600 to-violet-500 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all z-[101] flex items-center justify-center"
                >
                    {isChatOpen ? (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m18 15-6-6-6 6"/></svg>
                    ) : (
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    )}
                </button>
            )}
        </>
    );
}

export default Navbar;