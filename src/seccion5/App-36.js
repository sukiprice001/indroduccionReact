/* Ciclo de vida de los componentes*/

/* Trabajeremos con el Desmonstado de un componente */


import { Component } from 'react';


class Button extends Component{  
    state = {}
    
    constructor(props){
        super(props)
        console.log('constructor', props);
    } 
    
    componentDidMount(){
        console.log('Montando el componente');
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('Actulizando el componente', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('Desmontado Componente', this.props, this.state);
    }

    render(){
        console.log('ejecutando metodo render de button')
        return(
            <button 
                onClick={() => this.setState({ prop: 1})}>
                    
                Enviar
            </button>
        )
    };
};

class App extends Component{
    state = {
        valor: 3
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <p>Hola Mundo</p>
                {this.state.valor === 3 
                    ? <Button chanchito = 'feliz' />
                    : null}
                    
                <button 
                    className={`${this.state.valor}`} 
                    onClick={() => this.setState({valor: 2}) }>
                        
                        Enviar en App
                </button>
            </div>
        )
    }
}

export default App


/**
 * 1.- Se va ejecutar cuando nuestro componente va hacer desmontado y cuando hablamos de desmontado
 *     es que este componente no sera montado por nuestra libreria de react, es muy distindo de agregarle
 *     una propiedad que sea 'hiden', ya que esta estara monstado pero en modo oculto.
 * 
 * 2.- Para verlo en accion lo colocamos luego del metodo componentDidUpdate.
 * 
 * 3.- Este metodo no recibe ningun argumentos y le pasamo un clg internamente para ver su comportamiento
 *     puedes pasarle las porpiedades y el state en el mismo clg, basicamente para ver en que estado se
 *     encontraba al momento de desmonte el componente.
 * 
 * 4.- Ahora bien para ver en accion el punto anterior, debemos hacer uso tambien de renderizado condicional
 *     pero en esta oportunidad NO usaremos el 'If', envolvemos nuestro componente en llave y hacemos uso
 *     de nuestro operedor ternario.
 * 
 * 5.- El condicional estara apuntando al valor que tiene el estado del componente App, si es igual sigue
 *     mostrando el componente hijo (Button), luego que se actulice es estado el componente anterior desmonta.
 * 
 * 
 * 
 */
