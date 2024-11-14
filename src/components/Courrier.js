import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCourriers, createCourrier, updateCourrier, deleteCourrier } from "../services/api";

const Courrier = () => {
  const [courriers, setCourriers] = useState([]);
  const [editCourrier , setEditCourrier] = useState();
  const [newCourrier, setNewCourrier] = useState({
    nature_Correspondance: '',
    numero_courrier: '',
    provenance: '',
    date_correspondance: '',
    text: '',
    observation: '',
    destinataires: {
        secrettariat: false,
        chef_SRB: false,
        cellule_d_App_et_Coord: false,
        PRMP: false,
        BAAF: false,
        Cellule_PERS: false,
        Compta_Log: false,
        MEDECIN: false,
        Div_PE: false,
        Bur_MTA: false,
        Bur_LBA: false,
        Garage_Ad_tif: false,
        DIV_Ex_B_RFM: false,
        Bur_Ex_B: false,
        Bur_RFM: false,
        Div_Fin_Loc_EPN: false,
        Bureau_Fin_Loc: false,
        Bureau_EPN: false,
        CIR: false,
        Bur_F_A: false,
        Bur_M: false,
        AUTRE: false,
    },
    options_Choisies: {
        Pour_Lecture_Tournante: false,
        Pour_Avis: false,
        Pour_Classement_Aux_Dossiers: false,
    },
    Autres_Observations: {
        Pour_La_Suite_A_Donner: false,
        Pour_Procedure_A_Suivre: false,
        Pour_Instruction_Permanente: false,
        Pour_Attribution: false,
        Pour_Information: false,
        Pour_Classement_RT_Suivi_De_L_Execution: false,
        Pour_Notification_A_L_Interesse: false,
        Pour_Etude_et_M_en_Parler: false,
        M_en_Parler_au_Telephone: false,
        Me_Rendre_Compte: false,
        Me_Rappeler: false,
        Pour_Affichage: false,
        Garde_En_Instance: false,
        Venir_En_Parler: false,
        Dossiers_tres_Importants: false,
    },
});

useEffect(() => {
    getCourriers();
}, []);

    const getCourriers = async () => {
        try {
          const response = await axios.get("/api/courriers");
          setCourriers(response.data);
        } catch (error) {
            console.error("Erreur lors la récupération des courriers:", error);
        }
    }; 

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            const [category, key] = name.split(".");
            if(category === "destinataires" || category ==="optionsChoisies" || category === "autresObservations") {
                setNewCourrier((prev) => ({
                    ...prev,
                    [category]: {
                        ...prev[category],
                        [key]: checked,
                    },
                }));
            }
        } else {
          setNewCourrier((prev) => ({ ...prev, [name]: value }));
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("/api/courriers", newCourrier);
          getCourriers();
          setNewCourrier({
            nature_Correspondance: '',
            numero_courrier: '',
            provenance: '',
            date_correspondance: '',
            text: '',
            observation: '',
            destinataires: {
              secrettariat: false,
              chef_SRB: false,
              cellule_d_App_et_Coord: false,
              PRMP: false,
              BAAF: false,
              Cellule_PERS: false,
              Compta_Log: false,
              MEDECIN: false,
              Div_PE: false,
              Bur_MTA: false,
              Bur_LBA: false,
              Garage_Ad_tif: false,
              DIV_Ex_B_RFM: false,
              Bur_Ex_B: false,
              Bur_RFM: false,
              Div_Fin_Loc_EPN: false,
              Bureau_Fin_Loc: false,
              Bureau_EPN: false,
              CIR: false,
              Bur_F_A: false,
              Bur_M: false,
              AUTRE: false,
            },
            options_Choisies: {
              Pour_Lecture_Tournante: false,
              Pour_Avis: false,
              Pour_Classement_Aux_Dossiers: false,
            },
            Autres_Observations: {
              Pour_La_Suite_A_Donner: false,
              Pour_Procedure_A_Suivre: false,
              Pour_Instruction_Permanente: false,
              Pour_Attribution: false,
              Pour_Information: false,
              Pour_Classement_RT_Suivi_De_L_Execution: false,
              Pour_Notification_A_L_Interesse: false,
              Pour_Etude_et_M_en_Parler: false,
              M_en_Parler_au_Telephone: false,
              Me_Rendre_Compte: false,
              Me_Rappeler: false,
              Pour_Affichage: false,
              Garde_En_Instance: false,
              Venir_En_Parler: false,
              Dossiers_tres_Importants: false, 
            },
        });
      } catch(error) {
        console.error("Erreur lors de la récupération des courriers:", error);
      }
    };

    const handleEditChange = (e) => {
        setEditCourrier({...editCourrier, [e.target.name]: e.target.value });
    };
    const handleEdit = (edit_courrier)=>{
        setEditCourrier(edit_courrier)
    }
    const handleUpdate = async (e) => {
        e.preventDefault(editCourrier.id, editCourrier.data);
        // await updateDepart(editDepart.id, editDepart);
        await updateCourrier();
        setEditCourrier(null);
        getCourriers()
        // getDeparts();
    };

    const handleDelete = async (id) => {
        await deleteCourrier(id);
        getCourriers();
    };
    return (
      <div>
        <h2>COURRIERS</h2>
        <form onSubmit={handleSubmit}>
          <h3>Ajouter un nouveau courrier</h3>
          <input type="text" name="nature_Correspondance" value={newCourrier.nature_Correspondance} onChange={handleChange} placeholder="Nature de Correspondance" required />
          <input type="text" name="numero_Courrier" value={newCourrier.numero_courrier} onChange={handleChange} placeholder="Numéro de Courrier" required />
          <input type="text" name="provenance" value={newCourrier.provenance} onChange={handleChange} placeholder="Provenanace" required /> 
          <input type="text" name="date_Correspondance" value={newCourrier.date_Correspondance} onChange={handleChange} placeholder="Date de Correspondance" required />
          <input type="text" name="objet" value={newCourrier.objet} onChange={handleChange} placeholder="Objet" required />
          
          <label>Observation:</label>
        <select
          name="observation"
          value={newCourrier.observation}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une observation</option>
          <option value="Pour attribution">Pour attribution</option>
          <option value="Pour information">Pour information</option>
          <option value="Pour lecture tournante">Pour suivi d'exécution</option>
          <option value="Dossiers tres importants">Dossiers tres importants</option>
          <option value="Pour avis">Pour avis</option>
          <option value="Pour classement aux dossiers">Pour classement aux dossiers</option>
          <option value="Pour la suite a donner">Pour la suite a donner</option>
          <option value="Pour procedure a suivre">Pour procedure a suivre</option>
          <option value="Pour instruction permanente">Pour instruction permanente</option>
          <option value="Pour classement RT suivi de l'execution">Pour classement RT suivi de l'execution</option>
          <option value="Pour notification a l'interesse">Pour notification a l'interesse</option>
          <option value="Pour etude et m'en parler">Pour etude et m'en parler</option>
          <option value="M'en parler au telephone">M'en parler au telephone</option>
          <option value="Me rendre compte">Me rendre compte</option>
          <option value="Me rappeler">Me rappeler</option>
          <option value="Pour affichage">Pour affichage</option>
          <option value="Garder en instance">Garder en instance</option>
          <option value="Venir en parler">Venir en parler</option>
        </select>

        <div>
          <h4>Destinataires:</h4>
          <label>
            <input
              type="checkbox"
              name="destinataires.secretariat"
              checked={newCourrier.destinataires.secretariat}
              onChange={handleChange}
            />
            Secrétariat
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.chefSRB"
              checked={newCourrier.destinataires.chefSRB}
              onChange={handleChange}
            />
            Chef SRB
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.cellulePers"
              checked={newCourrier.destinataires.cellulePers}
              onChange={handleChange}
            />
            Cellule PERS
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.compta_Log"
              checked={newCourrier.destinataires.compta_Log}
              onChange={handleChange}
            />
            Compta & Log
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.medecin"
              checked={newCourrier.destinataires.medecin}
              onChange={handleChange}
            />
            Médecin
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.cellule d'App et Coord"
              checked={newCourrier.destinataires.cellule_d_App_Coord}

              onChange={handleChange}
            />
            cellule d'App et Coord
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.PRMP"
              checked={newCourrier.destinataires.PRMP}
              onChange={handleChange}
            />
            PRMP
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.BAAF"
              checked={newCourrier.destinataires.BAAF}
              onChange={handleChange}
            />
            BAAF
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Div.PE"
              checked={newCourrier.destinataires.Div.PE}
              onChange={handleChange}
            />
            Div.PE
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur.MTA"
              checked={newCourrier.destinataires.Bur.MTA}
              onChange={handleChange}
            />
            Bur.MTA
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur.LBA"
              checked={newCourrier.destinataires.Bur.LBA}
              onChange={handleChange}
            />
            Bur.LBA
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Garage_Ad_tif"
              checked={newCourrier.destinataires.Garage_Ad_tif}
              onChange={handleChange}
            />
            Garage Ad/tif
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Div.Ex°B et RFM"
              checked={newCourrier.destinataires.Div.Ex_B_RFM}
              onChange={handleChange}
            />
            Div.Ex°B et RFM
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur Ex°B"
              checked={newCourrier.destinataires.Bur_Ex_B}

              onChange={handleChange}
            />
            Bur Ex°B
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur RFM"
              checked={newCourrier.Bur_RFM}
              onChange={handleChange}
            />
            Bur RFM
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Div Fin Loc_EPN"
              checked={newCourrier.destinataires.Div_Fin_Loc_EPN}
              onChange={handleChange}
            />
            Div Fin Loc & EPN
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.CIR"
              checked={newCourrier.destinataires.CIR}
              onChange={handleChange}
            />
            CIR
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur F & A"
              checked={newCourrier.Bur_F_A}
              onChange={handleChange}
            />
            Bur F & A
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Bur M"
              checked={newCourrier.destinataires.Bur_M}
              onChange={handleChange}
            />
            Bur M
          </label>
          <label>
            <input
              type="checkbox"
              name="destinataires.Autre.............."
              checked={newCourrier.destinataires.Autre}
              onChange={handleChange}
            />
            Autre..............
          </label>
          </div>

          <button type="submit">AJOUTER COURRIER</button> 
        </form>


        {editCourrier && (
          <form onSubmit={handleUpdate}>
            <h3>Modifier le courrier</h3>
            <input type="text" name="nature_Correspondace" value={editCourrier.nature_Correspondance} onChange={handleEditChange} placeholder="Nature de Correspondance" />
            <input type="text" name="numero_Courrier" value={editCourrier.numero_Courrier} onChange={handleEditChange} placeholder="Numéro de Courrier" />
            <input type="text" name="provenance" value={editCourrier.date_Correspondance} onChange={handleEditChange} placeholder="Provenance" />
            <input type="text" name="date_Correspondance" value={editCourrier.date_Correspondance} onChange={handleEditChange} placeholder="Date de Correspondance" />
            <input type="text" name="objet" value={editCourrier.objet} onChange={handleEditChange} placeholder="Objet" />
            <input type="text" name="observation" value={editCourrier.observation} onChange={handleEditChange} placeholder="Observation" />
            <button type="submit">METTRE A JOUR</button>
            <button type="button" onClick={() => setEditCourrier(null)}>ANNULER</button>
         </form>
        )}

       <ul>
          {courriers.map((courrier) => (
            <li key={courrier.id}>
                {courrier.nature_Correspondance} - {courrier.numero_Courrier} - {courrier.provenance} - {courrier.date_Correspondance} - {courrier.objet} - {courrier.observation}
                <button onClick={() => handleEdit(courrier)}>MODIFIER</button>
                <button onClick={() => handleDelete(courrier.id)}>SUPPRIMER</button>
            </li>
         ))}
       </ul>
     </div>
    );
};

export default Courrier;