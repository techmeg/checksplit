import React from 'react'
import {useState} from 'react'


const Context = React.createContext()

function ContextProvider({children}){
    const [checkData, setCheckData] = useState({tip: '', total: '', diners: '', kids: '', adults: '', bar: ''});

    function handleChange(event){
        const {name, value} = event.target
        setCheckData(prevCheckData => {
            return {
                ...prevCheckData,
                [name]: value
            }
        })

    }

    function resetCheckData() {
        setCheckData({tip: '', total: '', diners: '', kids: '', adults: '', bar: ''})
    }

    return (
        <Context.Provider value={{checkData, handleChange, resetCheckData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}