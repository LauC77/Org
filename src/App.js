import './App.css';
import {v4 as uuid} from "uuid"
import Header from './Componenres/Header/header';
import Formulario from './Componenres/Formulario/Formulario';
import MiOrg from './Componenres/MiOrg';
import { useState } from 'react';
import Equipo from './Componenres/Equipo';
import Colaborador from './Componenres/Colaborador';
import Footer from './Componenres/footer';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores]=useState([{

    id: uuid(),
    equipo: "UX y Diseño", 
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jean Marie",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
{
  id: uuid(),
    equipo: "Programación", 
    foto:" https://github.com/genesysaluralatam.png",
    nombre: "Genesys",
    puesto: "Instructora en Alura Latam",
    fav:false
},
{
  id: uuid(),
  equipo: "Programación", 
  foto:" https://github.com/christianpva.png",
  nombre: "Crsitian",
  puesto: "Instructor en Alura Latam",
  fav:false
},
{
  id: uuid(),
  equipo: "Front End", 
  foto:"https://github.com/harlandlohora.png",
  nombre: "Harland",
  puesto: "Instructor en Alura Latam" ,
  fav:false
},
{
  id: uuid(),
  equipo: "Innovación y Gestión", 
  foto:"https://github.com/JoseDarioGonzalezCha.png",
  nombre: "José",
  puesto: "Dev FullStack",
  fav:false 
}])
const [equipos, actualizarEquipos]= useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E8"
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }

])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador=(Colaborador)=>{
  console.log("nuevo colab", Colaborador)
  actualizarColaboradores([...colaboradores,Colaborador])
  }

 const eliminarColaborador =(id)=>{
  const nuevosColaboradores= colaboradores.filter((colaborador)=> colaborador.id!==id)
  actualizarColaboradores(nuevosColaboradores)
 }

 const actualizarColor =(color, id)=>{
  console.log ("actualizado:_ ", color, id)
  const equiposActualizados=equipos.map((equipo)=>{
    if (equipo.id===id){
      equipo.colorPrimario=color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
 }
const crearEquipo=(nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
}

const like =(id)=>{
  console.log("like", id)
  const colabActualizados = colaboradores.map((colaborador)=>{
    if (colaborador.id===id){
      colaborador.fav =! colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colabActualizados)
}
  
  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipos) => equipos.titulo)} 
      registrarColaborador={registrarColaborador} 
      crearEquipo={crearEquipo}/>}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
      equipos.map((equipo)=><Equipo datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(Colaborador=>Colaborador.equipo===equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}/>)
      }
      <Footer></Footer>

    </div>
  );
}

export default App;
