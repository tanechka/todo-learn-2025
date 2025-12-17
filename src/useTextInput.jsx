import React, { useState } from 'react';

function useTextInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        type: 'text',
        value,
        onChange: (event) => {
            handleChange(event);
        },
        clear: () => {
            setValue('');
        }
    };
}

export default useTextInput;