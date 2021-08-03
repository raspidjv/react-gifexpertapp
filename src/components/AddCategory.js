import { useState } from 'react';
import propTypes from 'prop-types';

// export const AddCategory = ( props ) => {
export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
        // props.setCategorias(cats => [...cats, inputValue ]);
        // setCategorias(cats => [...cats, inputValue ]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submittd!');
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats]);
            // setCategorias(cats => [...cats, inputValue ]);
            setInputValue('');
        }
    }


    return ( <form onSubmit = { handleSubmit } >
        <h3> Add Category </h3> 
        <input type = "text"
         value = { inputValue }
         onChange = { handleInputValue }
        />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: propTypes.func.isRequired
}