// src/utils/auth.js
export const saveTokens = (data) => {
    // Django se token aate hain
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    
    // Django views.py se humne 'username' aur 'email' bheja hai
    const userData = {
        username: data.username, 
        email: data.email
    };
    
    console.log("Saving user data:", userData); // Browser console mein ye check karo
    localStorage.setItem("user", JSON.stringify(userData));
};

export const getUser = () => {
    const user = localStorage.getItem("user");
    // Extra safety check
    if (!user || user === "undefined" || user === "{}") return null;
    return JSON.parse(user);
};

export const clearTokens = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
};

export const getAccessToken = () => localStorage.getItem("access_token");

export const authFetch = (url, options = {}) => {
    const token = getAccessToken();
    const headers = options.headers ? {...options.headers} : {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    return fetch(url, {...options, headers});
};