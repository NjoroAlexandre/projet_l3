import React, { useState, useEffect } from 'react';
import { getArrivees, createArrivee, deleteArrivee, updateArrivee } from '../services/api';

const Arrivee = () => {
    const [arrivees, setArrivees] = useState([]);
    const [newArrivee, setNewArrivee] = useState({
        id_courrier: '',
        date: '',
        provenance: '',
        heure: '',
        nom_service: ''
    });
    const [editArrivee, setEditArrivee] = useState(null);

    useEffect(() => {
        getArrivees_data();
    }, []);

    const getArrivees_data = async () => {
        const response = await getArrivees();
        // console.log(response.data[0].id_arrivee)
        setArrivees(response.data);
    };

    const handleChange = (e) => {
        setNewArrivee({ ...newArrivee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createArrivee(newArrivee);
        setNewArrivee({ date: '', provenance:'', heure:'', nom_service:'' });
        getArrivees();
    };
    
    const handleEditChange = (e) => {
        setEditArrivee({...editArrivee, [e.target.name]: e.target.value });
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateArrivee(editArrivee.id, editArrivee);
        setEditArrivee(null);
        getArrivees();
    };

    const handleEdit = (arrivee) => {
        setEditArrivee(arrivee);
    };

    const handleDelete = async (id) => {
        await deleteArrivee(id);
        getArrivees();
    };

    return (
        <div>
            <h1>Arrivées</h1>

            <form onSubmit={handleSubmit}>
                <h2>Ajouter une nouvelle arrivée</h2>
             <input
                type='text'
                name='date'
                value={newArrivee.date}
                onChange={handleChange}
                placeholder='Date'
                />
             <input
                type='text'
                name='provenance'
                value={newArrivee.provenance}
                onChange={handleChange}
                placeholder='Provenance'
              />
              <input
                type='text'
                name='heure'
                value={newArrivee.heure}
                onChange={handleChange}
                placeholder='heure'
               />
              <input
                type='text'
                name='nom_Service'
                value={newArrivee.nom_Service}
                onChange={handleChange}
                placeholder='Nom Service'
              />
              <button type='submit'>AJOUTER</button>
            </form>

            {editArrivee && (
             <form onSubmit={handleUpdate}>
              <h2>Modifier l'arrivée</h2>
              <input
                type='text'
                name='date'
                value={editArrivee.date}
                onChange={handleEditChange}
                placeholder='Date'
              />
              <input
                type='text'
                name='provenance'
                value={editArrivee.provenance}
                onChange={handleEditChange}
                placeholder='Provenance'
              />
              <input
                type='text'
                name='heure'
                value={editArrivee.heure}
                onChange={handleEditChange}
                placeholder='Heure'
              />
              <input
                type='text'
                name='nom_Service'
                value={editArrivee.nom_Service}
                onChange={handleEditChange}
                placeholder='Nom Service'
               /> 
               <button type='submit'>METTRE A JOUR</button>
               <button type='button' onClick={() => setEditArrivee(null)}>ANNULER</button>
               </form>
            )}
            <ul>
                {arrivees.map((arrivee, index) => (
                    <li key={index}>
                        {arrivee.date} - {arrivee.provenance} - {arrivee.heure} - {arrivee.nom_Service}
                        <button onClick={() => handleEdit(arrivee)}>MODIFIER</button>
                        <button onClick={() => handleDelete(arrivee.id_arrivee)}>SUPPRIMER</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Arrivee;
