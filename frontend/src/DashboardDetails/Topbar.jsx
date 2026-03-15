import { useEffect, useState } from 'react';
import { getUser } from '../utils/auth'; // auth.js se import karein

function Topbar() {
  const [user, setUser] = useState({ username: '', email: 'Add' });

  useEffect(() => {
    // 1. Data load karein
    const userData = getUser();
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Avatar ke liye naam ka pehla akshar
  const avatarLetter = user.username ? user.username[0].toUpperCase() : 'U';

  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-slate-950 text-white">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="text-right">
          {/* 2. Dynamic Data */}
          <p className="text-sm font-medium">{user.username}</p>
          <p className="text-xs text-white/50">{user.email}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold">
          {avatarLetter}
        </div>
      </div>
    </header>
  );
}

export default Topbar;