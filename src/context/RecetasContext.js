import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, guardarReceteas] = useState([]);
    const [ busqueda, buscarReceta ] = useState({
        ingrediente: '',
        categoria: ''
    });

    return(
        <RecetasProvider
        value={{
            buscarReceta
        }}
        >
            {props.children}
        </RecetasProvider>
    );
}

export default RecetasProvider;