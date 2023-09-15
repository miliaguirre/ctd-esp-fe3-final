// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../Components/Card'
import { usecontextGlobal } from '../Components/utils/GlobalContext.jsx'

const Home = () => {
    const {dentistState} = usecontextGlobal()
    return (
        <main className="Home" >
            <h1>Dentists:</h1>
            <h3>Click on the card to see dentist information.</h3>
            <div className='card-grid'>                
                {dentistState.dentistsList.map(dentist => (<Card dentist={dentist} key ={dentist.id}/>))}
            </div>
        </main>
    )
}

export default Home