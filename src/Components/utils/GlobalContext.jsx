/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useReducer, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const contextGlobal = createContext()
const initialDentistState = {
    dentistsList: [],
    dentist: {},
    dentistLike :JSON.parse(localStorage.getItem('dentistLikeStorage'))||[],
    dentistTheme : true 
}

const dentistReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state,dentistsList: action.payload}
        case 'GET_DENTIST': 
            return {...state, dentist: action.payload}        
        case 'DENTIST_LIKE':
            return {...state, dentistLike:[...state.dentistLike, action.payload]}        
        case 'DENTIST_DELETE': 
            return {...state, dentistLike: action.payload}     
        case 'THEME': 
            return {...state, dentistTheme: action.payload}                
        default:
            throw new Error()
    }
}

/* eslint-disable react/prop-types */
const Context = ({children}) => {  
    const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialDentistState)
    const urlList = `https://jsonplaceholder.typicode.com/users`

    useEffect(() => {
        axios(urlList)
        .then(res => dentistDispatch({type: 'GET_LIST', payload: res.data}))
    }, [urlList])

    useEffect(() => {
    localStorage.setItem('dentistLikeStorage', JSON.stringify(dentistState.dentistLike))
    }, [dentistState.dentistLike])

    return(
        <contextGlobal.Provider value={{dentistState, dentistDispatch}}>
        {children}
        </contextGlobal.Provider>
    )
}
export default Context

// eslint-disable-next-line react-refresh/only-export-components
export const usecontextGlobal = () => useContext(contextGlobal)

