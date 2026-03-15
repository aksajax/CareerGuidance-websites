import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const WebsiteChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Namaste Abhishek! Main CGP AI Assistant hoon. Main aapki kya madad kar sakta hoon?' }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://127.0.0.1:8000";

    // Auto scroll to bottom
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post(`${BASEURL}/api/chat/`, { message: input });
            const botMsg = { role: 'bot', text: response.data.reply };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "Sorry, server band hai!" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* --- Chat Window --- */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 h-[500px] bg-white shadow-2xl rounded-3xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
                    {/* Header */}
                    <div className="bg-indigo-600 p-5 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                            <h3 className="font-bold">CGP AI Support</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${
                                    msg.role === 'user' 
                                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
                                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100 shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && <div className="text-xs text-gray-400 animate-pulse">AI is thinking...</div>}
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

            {/* --- Floating Toggle Button --- */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-indigo-600 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95"
            >
                {isOpen ? (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
                ) : (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                )}
            </button>
        </div>
    );
};

export default WebsiteChat;