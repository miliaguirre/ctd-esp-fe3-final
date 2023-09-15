/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import Card from '../Components/Card'
import { usecontextGlobal } from '../Components/utils/GlobalContext'
function Favs() {
    const {dentistState}= usecontextGlobal()

        return (
            <>
                <h1>Dentists Favs</h1>
                <div className="card-grid">            
                    {dentistState.dentistLike.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}            
                </div>           
            </>
        );
}

export default Favs;