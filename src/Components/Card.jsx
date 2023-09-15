/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom"
import { usecontextGlobal } from '../Components/utils/GlobalContext'

// eslint-disable-next-line react/prop-types
const Card = ({ dentist }) => {
    const {dentistState,dentistDispatch} = usecontextGlobal()
    const findFav = dentistState.dentistLike.find(fav => fav.id === dentist.id)

    const addFav = () => { 
        if(!findFav){
            dentistDispatch({type: 'DENTIST_LIKE', payload: dentist})
        } else {
            const filteredFavs = dentistState.dentistLike.filter(fav => fav.id !== dentist.id)
            dentistDispatch({type: 'DENTIST_DELETE', payload: filteredFavs})}
    }

    return (    
        <div className="card">            
            <Link key={dentist.id}to={'/detalle/' +dentist.id} style={{ textDecoration: 'none'}}>
                <img src=" /images/doctor.jpg" alt='Doctor' style={{width:'100%'}}/>
                <h1 style={{textAlign:'center',color: 'Black'}}>{dentist.name}</h1>
                <h2 style={{textAlign:'center',color: 'white'}}>Username: {dentist.username}</h2>
            </Link>
            <button onClick={addFav} style={{display:'flex', marginBottom:'5px',flexDirection:'column',  alignItems: 'center'}}>
                <span style={{ alignSelf: 'center' }}>Add to Favorites</span>
                <span className="star-icon" style={{ fontSize: '20px', alignSelf: 'center' }}>
                    {findFav ? 'Already added' : '⭐'}</span>
            </button>
        </div>   
    )
}

export default Card