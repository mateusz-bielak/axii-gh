import React, { useState } from 'react';

const Form = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit(value);
            }}
        >
            <label>Type GitHub username:</label>
            <input
                type="text"
                name="username"
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Form;
