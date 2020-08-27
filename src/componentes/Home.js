import React, {useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Mascota from './Mascota';
import Cliente from './Cliente';
import CalendarioSanitario from './CalendarioSanitario';
import AtencionHistorial from './AtencionHistorial'

const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "mascota",
    1: "cliente",
    2: "calendario",
    3: "atencion"
  };

  const indexToTabName = {
    "mascota": 0,
    "cliente": 1,
    "calendario": 2,
    "atencion": 3
  };

  useEffect(() => {
    console.log('Estoy aqui adentro');
    fetch("../json/mascotas.json")
    .then(response => response.json())
    .then(datos => {
        // setMascotas(datos)
        console.log(datos);
    })
}, [])
  

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/mascotas/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
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
    </>
  );
};

export default Home;
