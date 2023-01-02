
/* Subiendo el estado */


import { Component } from "react";

class Imput extends Component {
    // state = { valor: '' }
    // handleChange = (value) => {
    //     this.setState({ valor: value})
    // }
    render(){
        return(
            <input 
                value={this.props.value}
                onChange={ this.props.onChange}
            
            />
        )
    }
}

class App extends Component {
    state = {
        nombre : '',
        apellido : ''
    }
    updateValues = (prop, value) =>{
        this.setState({ [prop]: value})
    }
    render(){
        return(
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Imput 
                    value = {this.state.nombre}
                    onChange = {e => this.updateValues('nombre', e.target.value)}
                />
                <Imput 
                    value = {this.state.apellido}
                    onChange = {e => this.updateValues('apellido', e.target.value)}
                />

            </p>
        )
    }

}
export default App;




/**
 *  Lo mas recurrentes a la hora de programar en react es:
 *  
 *  DONDE TENEMOS QUE GESTIONAR EL ESTADO DE NUESTRA APLICACIÓN.
 * 
 * 1.- La verdad va depender de nuestros casos de uso, con esto quiero decir:
 *      .- Que si el componente vas a manejar un estado solamente va ha depender de si mismo, la verdad   
 *         que no es necesario que se compartamos este componente.
 
 *      .- Pero en el ejemplo de arriba, necesitamos compartir el estado de dos Input, para que podamos
           tener el nombre completo de una persona
           
 * 2.- En nuestro componente App, estamos renderizando un string (Nombre completo) y dos compotenentes
       customizado que esta mas arriba del componente App.
       
 * 3.- Si nos ubicamos en el componente Input, nos percatamos que tiene:
    
        .- Un estado que maneja un valor con una propiedad vacia (string vacio)
        .- Una propiedad handleChange, que le asigamos una Arrow function, que a su vez estamos asigando
           el valor que estamos obtiendo del campo, se esta ejecutando dentro de la propiedad del input
           llamada 'onChange'
        .- Cuando comenzamo escribir en el Input (en la web), esos valores lo tamamos, por la dos propiedades
           que tiene el input
        .- luego que se se ejecuta el  this.handleChange(e.target.value), se setean el valor dentro del estado
        .- Que al final lo utilizamos para poder controlar nuestro Input

 * 4.- Regresado en al componente de App, nos percatamos que el componente Input esta dos veces, y es que 
       para el ejercicio necesitamos recuperar o tomar los valores que viene del nombre y del apellido


 * 5.- Aca es donde entra la accion de subir un componente hijo a un componte padre, veamos como resulta:
       
       .- Se crea un estado o se modifica el estado del componente padre en este caso App.
       .- Creamos ua na propiedad dentro del componente padre que permite actulizar nuestro estado, donde recibiremos
          los argumentos de prop y value, ya que se trabajara como una funcion.
       .- Usamos el metodo setState y hacemos uso de las propiedades dinamicas  
       .- Luego nos vamos a nuestro componetes de Input y pasarle los valores que estos deben imprimir
                .- Nombre  (value)
                .- onChange , va recibir un evento del cual nos interesa obtener el valor que tiene el campo en ese momento

 * 6.- Con esto solo hemos logrado describir o pasar la propiedades en el componente hijo de App, pero ahora debemos
       obtener eso valores que le pasamos en sus propiedades en el componente Input.
 *
 * 7.- Una vez en el componete Input, descartamos el state y su propiedad, ya qu eno la utlizaremos y el metofo
 *     state dentro de value, lo cambiamos por props, en el onChange, cambiamos todod su contenido (e => this.handleChange(e.target.value))
 *     por this.props.onChange
 * 
 * 8.- Ahora cada vez que estemos escribiendo en nuestri Input, estado estara actulizandose dentro del mismo componente
 *     App y no en los componentes de Input.
 * 
 * 9.- Y de esa manera podemos acceder al nombre y al apellido
 * 
 * 10.- Y por ultimo lo que hacemos es imprimirlo justo al lado de nuestro string (Nombre completo), y esto lo hacemos
 *      con un string literal
 */