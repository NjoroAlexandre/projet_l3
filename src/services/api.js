import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Remplace par l'URL de ton API

export const getArrivees = () => axios.get(`${API_URL}/arrivees`);
export const createArrivee = (data) => axios.post(`${API_URL}/arrivees`, data);
export const getDeparts = () => axios.get(`${API_URL}/departs`);
export const createDepart = (data) => axios.post(`${API_URL}/departs`, data);
export const getCourriers = () => axios.get(`${API_URL}/courriers`);
export const createCourrier = (data) => axios.post(`${API_URL}/courriers`, data);

export const updateArrivee = (id, data) => axios.put(`${API_URL}/arrivees/${id}`, data);
export const updateCourrier = (id, data) => axios.put(`${API_URL}/courriers/${id}`, data);
export const updateDepart = (id, data) => axios.put(`${API_URL}/departs/${id}`, data);

export const deleteArrivee = (id) => axios.delete(`${API_URL}/arrivees/${id}`);
export const deleteCourrier = (id) => axios.delete(`${API_URL}/courriers/${id}`);
export const deleteDepart = (id) => axios.delete(`${API_URL}/departs/${id}`);

// partie pour la gestion des utilisateur

export const getOneUser = (data) => axios.post(`${API_URL}/OneUser`, {
    params: data
  });