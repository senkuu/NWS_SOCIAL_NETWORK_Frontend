import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, RadioProps } from '@material-ui/core';
import clsx from 'clsx';
import FormLabel from '@material-ui/core/FormLabel';
import { useForm } from 'react-hook-form';
import {NewGuild } from 'services/guilds/guilds'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        textfield: {
            padding: "4px"
        },
        checkbox: {
            width: "50px"
        },
        div:{
            margin:"auto",
             width: "500px",
             marginTop:"2%" 
        },
        submit:{
            backgroundColor: "#25ee28",
            marginLeft:"10px",
            width:"200px",
        }
    }),
);


function NewGuilds(){
    const classes = useStyles();
    const {register, handleSubmit} = useForm()
    const onSubmit = (data: any) => {
    var nom = data.nom;
    var description = data.description;
    NewGuild(nom,description);
    return(<Redirect to={`/listeDesGuildes`} />)
    }
    
    return (
        <div className={classes.div}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <div>
                        <TextField name="nom" inputRef={register}  className={classes.textfield} id="outlined-basic" label="Nom de la guilde" variant="outlined" />
                        
                    </div>
                    <div>
                        <TextField name="description" inputRef={register} className={classes.textfield} id="outlined-basic" label="description" variant="outlined" />   
                    </div>
                    <div>

                        <Button type="submit"  className={classes.submit}> Créer guilde </Button>
                    </div>
                </FormControl>
            </form>
        </div>
    )
}

export default NewGuilds