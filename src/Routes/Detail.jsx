/* eslint-disable no-unused-vars */
import React from "react"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { usecontextGlobal } from '../Components/utils/GlobalContext'

const Detail = () => {
    const {dentistState, dentistDispatch} = usecontextGlobal()
    const params = useParams()
    console.log(params.id)   
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
    
    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res)
            dentistDispatch({type: 'GET_DENTIST', payload: res.data})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    
    return ( 
        <div className="Detail"> 
            <div>
                <h1>Dentist information:</h1> 
                <table>
                    <tr><h1>{dentistState.dentist.name}</h1></tr>
                    <tr><h2>📧 {dentistState.dentist.email}</h2></tr>
                    <tr><h2>📲 {dentistState.dentist.phone}</h2></tr>
                    <tr><h2>💻 {dentistState.dentist.website}</h2></tr>
                </table> 
            </div> 
        </div>
    )
}

export default Detail