import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import dataImport from '../json/mascotas.json'
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 250,
    width: '85%!important'
  },
  detail: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "left",
    color: "#2f4e72",
    fontWeight: "bold!important",
    fontSize: "1.1rem",
  },
  tableCelldetail: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#757575",
    fontSize: "1rem",
  },
  tabledetail: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#2f4e72",
    fontWeight: "bold!important",
    fontSize: "1.1rem",
  },
  titleDetail: {
    flexGrow: 1,
    
    marginLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    textAlign: "left",
    color: "#bd1c5a",
    fontWeight: "bold!important",
    fontSize: "1.3rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  paper1: {
    marginTop: theme.spacing(2),
    textAlign: "Left",

    color: theme.palette.text.secondary,
  },
}));

function createData(peso, fecha) {
    return { peso, fecha };
  }

const rows = [
    createData(25, '02/02/2020'),
    createData(20, '06/12/2019'), 
  ];

 


const Mascota = () => {
  const classes = useStyles();
  const [mascotas, setMascotas] = useState();
  const [ pesos, setPesos ] = useState();
  const [ textButton, setTextButton ] = useState('mas')

  const handleClickMore = () => {
    if(textButton === 'mas'){
      setPesos(dataImport[0].pesos)
      setTextButton('menos')
    }else{
      seePesos()
      setTextButton('mas')
    }
    
  }
  const seePesos = () => {
    let thePesos = []
    thePesos.push(dataImport[0].pesos[0])
    thePesos.push(dataImport[0].pesos[1])
    setPesos(thePesos)
  }

  useEffect(() => {
    setMascotas(dataImport)
    seePesos()

  }, [])



  

  return (
    <div className={classes.root}>
        
      <Grid  container spacing={0}>
        <Grid item xs={12} sm={6}>  
        {mascotas ? mascotas.map((mascota) => (
          <Paper key={mascota.id} className={classes.paper}>
            <Typography>Especie:</Typography>
            <Typography className={classes.detail}>{mascota.especie}</Typography>
            <Typography>Raza:</Typography>
            <Typography className={classes.detail}>{mascota.raza}</Typography>
            <Typography>Sexo:</Typography>
            <Typography className={classes.detail}>{mascota.sexo}</Typography>
            <Typography>Esterilizado:</Typography>
            <Typography className={classes.detail}>{mascota.esterilizado}</Typography>
          </Paper>
           )):
           <Paper className={classes.paper}>
            <Typography>Especie:</Typography>
            <Typography className={classes.detail}></Typography>
            <Typography>Raza:</Typography>
            <Typography className={classes.detail}></Typography>
            <Typography>Sexo:</Typography>
            <Typography className={classes.detail}></Typography>
            <Typography>Esterilizado:</Typography>
            <Typography className={classes.detail}></Typography>
          </Paper>
           };
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Edad:</Typography>
            <Typography className={classes.detail}>3 Años</Typography>
            <Typography>Fecha nacimiento:</Typography>
            <Typography className={classes.detail}>01 / 02 / 2017</Typography>
            <Typography>Chip:</Typography>
            <Typography className={classes.detail}>1234567890</Typography>
            <Typography>Num Registro:</Typography>
            <Typography className={classes.detail}>112233</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper1}>
          <Typography className={classes.titleDetail}>
            Registro Pesos:
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} align="center" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCelldetail}>Peso Kg:</TableCell>
                  <TableCell className={classes.tableCelldetail} align="right">Fecha registro</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pesos ? pesos.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className={classes.tabledetail} component="th" scope="row">
                      {row.peso}
                    </TableCell>
                    <TableCell className={classes.tabledetail} align="right">{row.fecha}</TableCell>
                  </TableRow>
                )):<></>}
              </TableBody>
              {dataImport[0].pesos.length > 2 ? <Button onClick={handleClickMore}>Ver {textButton}</Button> : <></>}
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      
    </div>
  );
};

export default Mascota;
