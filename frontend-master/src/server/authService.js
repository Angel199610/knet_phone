// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1'; // Change to your backend API

// Login the user and store the access token
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  const { access_token, user } = response.data;
  localStorage.setItem('token', access_token);
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

// Logout the user and clear the stored token
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get the current user from localStorage
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Check if the user is an admin
export const isAdmin = () => {
  const user = getCurrentUser();
  return user && user.is_admin;
};

// Get the access token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};
