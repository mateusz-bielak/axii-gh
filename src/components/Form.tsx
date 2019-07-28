import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface FormProps {
    onSubmit: (value: string) => void;
}

const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingLeft: theme.spacing(1),
    },
}));

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const classes = useStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs sm={6} md={4}>
                    <TextField
                        id="username"
                        label="Github username:"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                        fullWidth
                    />
                </Grid>
                <Grid item className={classes.button}>
                    <Button color="primary" variant="outlined" type="submit">
                        Search user
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
