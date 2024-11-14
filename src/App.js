import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Arrivee from './components/Arrivee';
import Courrier from './components/Courrier';
import Depart from './components/Depart';
import './styles.css';
import Login from './components/login/Login';

function App() {
    return (
        <Router>
        <div className='App'>
            {/* <Navbar /> */}
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/arrivees" element={<Arrivee />} />
                    <Route path="/courriers" element={<Courrier />} />
                    <Route path="/departs" element={<Depart />} />
                </Routes>
            </div>
        </div>
        </Router>
    );
}

export default App;
