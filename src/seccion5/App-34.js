/* Ciclo de vida de los componentes*/

/* Trabajeremos con el Montado de un componte */


import { Component } from 'react';


class Button extends Component{  
    state = {}
    
    constructor(props){
        super(props)
        console.log('constructor', props);
    } 
    
    componentDidMount(){
        console.log('componentDidMount');
    }
    
    render(){
        console.log('ejecutando metodo render de button')
        return(
            <button>
                Enviar
            </button>
        )
    }
}

class App extends Component{
    state = {
        valor: 3
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola Mundo</p>
                <Button chanchito = 'feliz' /> 
                <button 
                    className={`${this.state.valor}`} 
                    onClick={() => this.setState({valor:2}) }>
                        
                        Enviar en App A
                </button>
            </div>
        )
    }
}

export default App


/**
 * Nos hubicamos en el componente de Button y desarrollaremos el ciclo de vida de ese componente
 * 
 * 1.- Se crea el constructor entre la class y metodo de render
 * 2.- Recibe como argumentos (props) las propiedades que decidamos pasarle
 * 3.- Para que no tengamos problema el futuro cuando estemos utilzando el constructor
 *     tenemos que pasarle SIEMPRE PERO SIEMPRE la palabra reserada de 'super' y como argumento
 *     las props, daso que 'super' hace referencia al componente del cual estamos extendiendo
 * 4.- Hacemos un clg del constructor y de las propiedades que le estamos pasando.  
 * 5.- Las propiedades que esta reciendo el Button se pasan en el componente hijo que esta en el App
 *     lo puedes ver, como la propiedad que se le dio (chanchito= 'feliz').
 * 6.- Recuerda que el constructor es la instancia para que nosotros podamos setear un estado de los componentes
 *     en react, pero aun asi es una mala practia, por lo tanto lo declarar poner justo antes del constructor
 * 7.- Y el otro metodo con el que debemos trabajar para el ciclo de vida del Montado de un componentes es el
 *     componentDidMount, no recibe ningun argumento y este se utiliza mas que nada  cuando nostros tenemos que
 *     llamar setState(), para poder actulzair el esatdo de nuestro componente.
 * 
 *     hicimos rerencia del clg dentro del componentDidMount, para que veas dentro de la consola, cuando este se 
 *     ejecuta.
 * 
 *     Nos pudimos percartar que se ejcuta el constructor (con su propiedades), luego el redenerizado del componente
 *     Button ('ejecutando metodo render de button') y por ultimo componentDidMount
 * 
 */
