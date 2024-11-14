import React, { useState, useEffect } from "react";
import { getDeparts, creatDepart, updateDepart, deleteDepart, createDepart } from "../services/api";

const Depart = () => {
  const [departs, setDeparts] = useState([]);
  const [newDepart, setNewDepart] = useState({
      numero_depart: '',
      nom_destination: '',
      date: '',
      nature_correspondance: '',
      numero_correspondance: '',
      designation: ''
  });
  const [editDepart, setEditDepart] = useState(null);

  useEffect(() => {
    getDeparts();
}, []);   

    const getDeparts = async () => {
        const response = await getDeparts();
        setDeparts(response.data);   
    };

    const handleChange = (e) => {
        setNewDepart({ ...newDepart, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createDepart(newDepart);
        setNewDepart({ numero_Depart: '', nom_Destinataire: '', date: '', nature_correspondance: '', numero_correspondance: '', designation: ''});
        getDeparts();
    };

    const handleEditChange = (e) => {
        setEditDepart({...editDepart, [e.target.name]: e.target.value });
    };
    
    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateDepart(editDepart.id, editDepart);
        setEditDepart(null);
        getDeparts();
    };

    const handleEdit = (depart) => {
        setEditDepart(depart);
    };
    const handleDelete = async (id) => {
        await deleteDepart(id);
        getDeparts();
    };

    return (
        <div>
            <h2>Départs</h2>

            <form onSubmit={handleSubmit}>
                <h3>Ajouter un nouveau départ</h3>
                <input type="text" name="numero_Depart" value={newDepart.numero_Depart} onChange={handleChange} placeholder="Nummero de Depart" />
                <input type="text" name="nom_Destinataire" value={newDepart.nom_Destinataire} onChange={handleChange} placeholder="Nom_Destinataire" />
                <input type="text" name="date" value={newDepart.date} onChange={handleChange} placeholder="Date" />
                <input type="text" name="nature_Correspondance" value={newDepart.nature_Correspondance} onChange={handleChange} placeholder="Nature de Correspondance" />
                <input type="text" name="numero_Correspondance" value={newDepart.numero_Correspondance} onChange={handleChange} placeholder="Numero de Correspondance" />
                <input type="text" name="designation" value={newDepart.designation} onChange={handleChange} placeholder="Designation" />
                <button type="submit">AJOUTER</button>
            </form>
             {editDepart && (
                <form on onSubmit={handleUpdate}>
                    <h3>MODIFIER LE DEPART</h3>
                    <input type="text" name="numero_Depart" value={editDepart.numero_Depart} onChange={handleEditChange} placeholder="Numerode de Depart" />
                    <input type="text" name="nom_Destinataire" value={editDepart.nom_Destinataire} onChange={handleEditChange} placeholder="Nom_Destinataire" />
                    <input type="text" name="date" value={editDepart.date} onChange={handleEditChange} placeholder="Date" />
                    <input type="text" name="nature_Correspondance" value={editDepart.nature_Correspondance} onChange={handleEditChange} placeholder="Nature de Correspondance" />
                    <input type="text" name="numero_correspondance" value={editDepart.numero_Correspondance} onChange={handleEditChange} placeholder="Numero de Correspondance" />
                    <input type="text" name="designation" value={editDepart.designation} onChange={handleEditChange} placeholder="Designation" />
                    <button type="submit">METTRE A JOUR</button>
                    <button type="button" onClick={() => setEditDepart(null)}>ANNULER</button>
                </form>
             )}

            <ul>
                {departs.map((depart) => (
                    <li key={depart.id}>
                        {depart.numero_Depart} - {depart.nom_Destinataire} - {depart.date} - {depart.nature_Correspondace} - {depart.numero_Correspondance} - {depart.designation}
                        <button onClick={() => handleEdit(depart)}>MODIFIER</button>
                        <button onClick={() => handleDelete(depart.id)}>SUPPRIMER</button> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Depart;
