import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CardMedia from "@material-ui/core/CardMedia";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Mascota from './Mascota';
import Cliente from './Cliente';
import CalendarioSanitario from './CalendarioSanitario';
import AtencionHistorial from './AtencionHistorial'
import dataImport from '../json/mascotas.json'
import foto from '../img/perro1.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#164a7c!important",
    color: theme.palette.text.secondary,
  },

  menuButton: {
    "&:hover": {
      backgroundColor: "#00000000!important",
    },
    marginRight: theme.spacing(2),
    color: "#164a7c",
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold!important",
  },
  detail: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    textAlign: "left",
    color: "#ffffff",
    fontWeight: "bold!important",
  },
  textTypo: {
    flexGrow: 1,
    color: "#000000",
    fontWeight: "bold!important",
  },
  textTypo2: {
    flexGrow: 1,
    color: "#ffffff",
    fontWeight: "bold!important",
  },
  icon: {
    color: "#000000",
    fontWeight: "bold!important",
  },
}));

const Mascotas = props => {
  const classes = useStyles();
  const [ mascota, setMascota ] = useState()

  useEffect(() => {
    setMascota(dataImport[0])
  }, [])

  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "mascota",
    1: "cliente",
    2: "calendario",
    3: "atencion",
  };

  const indexToTabName = {
    mascota: 0,
    cliente: 1,
    calendario: 2,
    atencion: 3,
  };
 

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/mascotas/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Toolbar>
              <Typography edge="start" variant="h6" className={classes.title}>
                Detalles paciente
              </Typography>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ArrowBackIosIcon className={classes.icon} />
                <Typography className={classes.textTypo}>Volver</Typography>
              </IconButton>
            </Toolbar>
          </Paper>
        </Grid>
        <Grid container>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            {mascota ? 
            <>
              <CardMedia
              className={classes.media}
              image={foto}
              title="Paella dish"
            />
            <img src={foto} />
            </>:<></>}
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          {mascota ?
          <Paper className={classes.paper1}>
            <div className={classes.detail}>
              <Typography>Mascota: {mascota.mascota}</Typography>
              <Typography>Especie: {mascota.especie}</Typography>
              <Typography>Cliente: {mascota.cliente}</Typography>
              <Typography>Num. Registro Cliente: {mascota.numReg}</Typography>
            </div>
          </Paper>
          :
          <Paper className={classes.paper1}>
              <div className={classes.detail}>
                <Typography>Mascota: </Typography>
                <Typography>Especie: </Typography>
                <Typography>Cliente: </Typography>
                <Typography>Num. Registro Cliente: </Typography>
              </div>
            </Paper>
          }
          
        </Grid>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
          <AppBar position="static">
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="Mascota" />
              <Tab label="Cliente" />
              <Tab label="Calendario sanitario" />
              <Tab label="Atenciones e historial" />
            </Tabs>
          </AppBar>
          
          {selectedTab === 0 && <Mascota />}
          {selectedTab === 1 && <Cliente />}
          {selectedTab === 2 && <CalendarioSanitario />}
          {selectedTab === 3 && <AtencionHistorial />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mascotas;
