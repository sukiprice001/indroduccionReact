/* Ciclo de vida de los componentes*/

/* Trabajeremos con el Actulizado de un componente */


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
    
    componentDidUpdate(prevProps, prevState){
        console.log('component Did Update', prevProps, prevState);
    }
    render(){
        console.log('ejecutando metodo render de button')
        return(
            <button 
                onClick={() => this.setState({ prop: 1})}>
                    
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
                        
                        Enviar en App
                </button>
            </div>
        )
    }
}

export default App


/**
 * 1.- Este componente ComponentDidUpdate(prevProps, prevState), recibe dos argumentos
 *      Las propiedades anteriores.
 *      Y el estado anterior.
 * 2.- Para que me puediera mostrar ComponentDidUpdate en consola, recuerda que el proceso
 *     es primero montar el componete, luego interectuar con el componente y ahi si muestra
 *     la actulización.
 * 3.- Para eso le pasamos propiedades  al button del componente Button para ver la actulización
 *     de los estados en el clg de ComponentDidUpdate
 * 
 * 
 * 
 */
