import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

// 1. Axios Instance create karein
const API = axios.create({
    baseURL: API_BASE_URL,
});

// 2. Request Interceptor: Har request se pehle token check karega
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token'); // Login ke baad yahan save karna
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 3. Response Interceptor: Agar 401 (Unauthorized) aaye toh login page par bhejne ke liye
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // localStorage.clear(); // Optional: Clean up
            // window.location.href = '/login'; // User ko login par redirect kar do
        }
        return Promise.reject(error);
    }
);

// --- API Functions ---

export const generateRoadmap = async (data) => {
    try {
        const response = await API.post('roadmaps/generate/', data);
        return response.data;
    } catch (error) {
        console.error("Error generating roadmap:", error);
        throw error;
    }
};

export const fetchRoadmaps = async () => {
    try {
        const response = await API.get('roadmaps/list/');
        return response.data;
    } catch (error) {
        console.error("Error fetching roadmaps:", error);
        throw error;
    }
};

export const updateMilestone = async (id, isCompleted) => {
    try {
        const response = await API.patch(`roadmaps/milestone/${id}/update/`, {
            is_completed: isCompleted
        });
        return response.data;
    } catch (error) {
        console.error("Error updating milestone:", error);
        throw error;
    }
};

// Login Function (Token lene ke liye)
export const loginUser = async (credentials) => {
    const response = await API.post('token/', credentials);
    if (response.data.access) {
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
    }
    return response.data;
};

export default API;