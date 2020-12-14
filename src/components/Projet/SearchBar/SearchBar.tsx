import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
      test: {
         
      }
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1}>
          <p>Veuillez rechercher votre projet :</p>
          <TextField id="outlined-basic" label="Recherche.." variant="outlined" />
        </Box>
      </Box>
    </div>
  );
}