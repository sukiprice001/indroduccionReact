import logo from './logo.svg';
import './App.css';
import './main.css';  // Archivo creado con fines de pruebas



/* Esto esta comentado ya esta el desarrollo de inline Style */

// const estilo = ({bg = '#222'}) => ({   // Definicion de css como funcnion y dando un argumento por default
//   backgroundColor: bg,
//   color: '#fff',
//   padding: '10px 15px',
//   margin: '10px 15px'
// })

// const estilo2 = {  // Definimos la propiedad estilo de css como un objeto
//   boxShadow: '0 5px 3px rgb(0,0,0,0.5)'

// }



const Li = ({ children, estado }) => {
  return(
    <li className='clase-li'>Desde el elmento:{ children } | desde el estado:{estado}</li>
  );
};


/* ******************************************************************************************************** */

/* Esto esta comentado ya esta el desarrollo de inline Style */
// const Li = ({ children })=> {    // Componente creado con una const o let, prefrerible const y con arrow function
//   return(

//     <li style={ {...estilo({bg: '#333'}), ...estilo2} } className='clase-li'>{children}</li>     // Tambien pode componer varias propiedades en este caso estilos una como obejeto y la otra como funcion
    
//     // <li style={estilo('#057')} className='clase-li'>{children}</li>  // Aca el modifciamos el valor por default
    
//     // return(
      
//       //   <li style={ {...estilo({bg: '#333'}), ...estilo2} } className='clase-li'>{children}</li>     // Tambien pode componer varias propiedades en este caso estilos una como obejeto y la otra como funcion
//       //   // <li style={estilo('#057')} className='clase-li'>{children}</li>  // Aca el modifciamos el valor por default
//   );
// }
/* ******************************************************************************************************** */
const App = () => {
  const valor = 'muy feliz';
  return( 
    <ul className='clase-css'>  
      <Li estado= 'feliz'> Valor de li</Li>
    </ul>


/* Esto esta comentado ya esta el desarrollo de inline Style */

  // return(   // Aca hicimos uso del estilo tipo funcion y le pasamos como parametro un objeto 
  //   <ul style={estilo({bg: '#750'})} className='clase-css'>  
  //     <Li estado= 'feliz'>Valor de li</Li>
  //   </ul>
  /* ********************************************************** */

  );
};

// Componente creado con la la pablara function 
// function App() {
//   return (
//     <p>Chanchito feliz</p>
//   );
// }

export default App;
