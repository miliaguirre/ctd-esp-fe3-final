/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import { usecontextGlobal } from '../Components/utils/GlobalContext'

const Navbar = () => {    
    const {dentistDispatch, dentistState} = usecontextGlobal()

    return (
    <div className='navbar'>
        <div className='links'>            
            <Link to={routes.home}><h1 className='link'>Home</h1></Link>
            <Link to={routes.contact}><h1 className='link'>Contact</h1></Link>
            <Link to={routes.favs}><h1 className='link'>Favs</h1></Link>
            
            {dentistState.dentistTheme?
            <button  style={{backgroundColor:'#302F2F', color:'#FAD2D2',borderRadius:'10px', fontSize: '20px'}}
            onClick={() => dentistDispatch({type: 'THEME', payload:dentistState.dentistTheme?false:true})}
            >☽</button>            
            :            
            <button className='button navbar-button dark' style={{backgroundColor:'#FAD2D2', color:'#302F2F',borderRadius:'10px', fontSize: '24px'}} 
            onClick={() => dentistDispatch({type: 'THEME', payload:dentistState.dentistTheme?false:true})}
            >☀</button>}
        </div>
    </div>
)
}

export default Navbar