import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/auth';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = getUser();
        console.log("LocalStorage Data:", data); // Console mein check karne ke liye
        setUser(data);
    }, []);

    // 1. Loading State: Jab tak data nahi milta, tab tak ye dikhega
    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <p>Loading user profile...</p>
            </div>
        );
    }

    // 2. Avatar Letter: Safe tarike se nikalna
    const avatarLetter = user.username ? user.username[0].toUpperCase() : 'U';

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-lime-400">Profile Details</h2>
            
            <div className="space-y-4">
                <div className="flex justify-center mb-6">
                    {/* Avatar with fallback */}
                    <div className="w-20 h-20 rounded-full bg-lime-400 text-black flex items-center justify-center text-3xl font-bold border-4 border-white/20">
                        {avatarLetter}
                    </div>
                </div>

                <div className="border-b border-white/10 pb-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider">Username</label>
                    <p className="text-lg font-medium">{user.username || "Not Available"}</p>
                </div>
                
                <div className="border-b border-white/10 pb-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider">Email Address</label>
                    <p className="text-lg font-medium">{user.email || "Not Available"}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;