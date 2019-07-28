import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                onSubmit(value);
            }}
        >
            <TextField
                id="username"
                label="Username:"
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
            />
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default Form;
