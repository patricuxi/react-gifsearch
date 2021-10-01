import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    // const [inputValue, setInputValue] = useState();// si en useState no le pasamos nada, es undefined!

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder={'Search gif...'}
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    //Ser categories es lo que pasamos en export const AddCategory = ({setCategories})

    setCategories: PropTypes.func.isRequired
}
