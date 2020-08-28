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
import AddIcon from '@material-ui/icons/Add';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
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
  flexGrid: {
    display:'flex'
  },
  flexGrid2: {
    display:'flex', 
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },

  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
      border:'0px'
    },
  },
  paperBoxShadow: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  paper1: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#164a7c!important",
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
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(0),
    },
  },
  editarButton: {
    [theme.breakpoints.down('sm')]: {
      background:'#dc3318',
      color:'#ffffff',
      padding:'7px',
      fontSize:'0.8em',
      borderRadius: '10px',

    },
  },
  editarTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize:'1rem',
      alignSelf:'center',
      color:'#dc3318'
    },
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold!important",
    [theme.breakpoints.down('sm')]: {
      fontSize:'1.5rem',
    },
  },
  detail: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    textAlign: "left",
    color: "#ffffff",
    fontWeight: "bold!important",
  },
  appBarDetail: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor:'#ffffff!important',
      borderRadius:'10px 10px 0px 0px!important',
      
    },
  },
  tabDetail: {
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.9rem!important',
      background:'#e9e9e9!important',
      color:'#9a9a9a',
      maxWidth:'101.5px!important',
      textTransform:'capitalize!important',
      borderRadius:'10px 10px 0px 0px!important',
      border: '1px'
    },
  },
  tabSelectedDetail: {
    [theme.breakpoints.down('sm')]: {
      background:'#e10b62!important'
    },
  },
  img: {
    flexGrow: 1,
    textAlign: "center",
    
  },
  imgDetail: {
    borderRadius:'5px',
    margin: "7px 0px 0px 4px",
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    },
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
    fontSize:'1.2rem',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.8rem'
    },
  },
  textTypo3: {
    color: "#ffffff",
    fontSize:'1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.8rem'
    },
  },
  icon: {
    color: "#000000",
    fontWeight: "bold!important",
    [theme.breakpoints.down('sm')]: {
      fontSize:'1rem'
    },
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
        <Grid className={classes.paper}  item xs={12}>
          <Paper className={classes.paper}>
            <Toolbar>
              <Typography edge="start" variant="h4" className={classes.title}>
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
        <Grid container className={classes.flexGrid}>
          <Grid className={classes.img} item xs={4} sm={4} md={3}>
          {mascota ? 
              <>
              <img className={classes.imgDetail}  src={foto} />
              </>:<></>}
            
          </Grid>
          <Grid item xs={8} sm={8} md={9}>
            {mascota ?
            <Paper className={classes.paper1}>
              <div className={classes.detail}>
                <Grid className={classes.flexGrid}  item xs={12}>
                  <Typography edge="start"  className={classes.textTypo3}>Mascota: </Typography>
                  <Typography edge="start"  className={classes.textTypo2}>{mascota.mascota}</Typography>
                </Grid>
                <Grid className={classes.flexGrid}  item xs={12}>
                  <Typography edge="start" className={classes.textTypo3}>Especie: </Typography>
                  <Typography edge="start"  className={classes.textTypo2}>{mascota.especie}</Typography>
                </Grid>
                <Grid className={classes.flexGrid2}  item xs={12}>
                  <Typography edge="start" className={classes.textTypo3}>Cliente: </Typography>
                  <Typography edge="start"  className={classes.textTypo2}>{mascota.cliente}</Typography>
                </Grid>
                <Grid className={classes.flexGrid}  item xs={12}>
                  <Typography edge="start" className={classes.textTypo3}>Num. Registro Cliente: </Typography>
                  <Typography edge="start"  className={classes.textTypo2}>{mascota.numReg}</Typography>
                </Grid>
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
        <Grid className={classes.paperBoxShadow}  item xs={12}>
        
          <AppBar className={classes.appBarDetail}  position="static">
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab className={classes.tabDetail} label="Mascota" />
              <Tab className={classes.tabDetail} label="Cliente" />
              <Tab className={classes.tabDetail} label="Calendario sanitario" />
              <Tab className={classes.tabDetail} label="Atenciones e historial" />
            </Tabs>
          </AppBar>
          
          {selectedTab === 0 && <Mascota />}
          {selectedTab === 1 && <Cliente />}
          {selectedTab === 2 && <CalendarioSanitario />}
          {selectedTab === 3 && <AtencionHistorial />}
         
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Mascotas;
