/* Ciclo de vida de los componentes*/


import { Component } from 'react';

class Button extends Component{   
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
                <Button /> 
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
 * Hasta ahora solo hemos visto el metodo de render() y cuando este se ejecuta.
 * 
 * Para entenderlo mejor veamos lo siguientes componentes:
 * 
 * ComponentDidMount (Montando un Componente)
 * ComponentDidUpdate (Actualizando un Componente)
 * ComponentWillUnmount (Desmontando un Componente)
 * 
 * Montando (ComponentDidMount): es cuando estamos insertando en nuestra interfaz un componente
 *                               por primera vez.
 *                               1.- Primero se ejecuta el CONSTRUCTOR (se usa para setear propiedades en el estado),
 *                                   tambien podemos usar el constructor cuando queremos pasar el contexto de 'this' 
 *                                   a una función.
 *                                   Segun la oponión del profesor no deberia crearse el constructor
 *                               2.- Viendo lo anterior, podriamos decir que luego que el componente ha sido montado
 *                                   se ejecuta nuestro metodo de render.
 *                               3.- React actuliza el Dom, si hay diferencia en el componente, exte actuliza el DOM
 *                               4.- Si es que es que implementamos el metodo ComponentDidMount, este va ejecutar toda
 *                                   la logica que nosotros ponbamos en este. 
 * 
 * Actulizando (ComponentDidUpdate): 
 *                                  1.- Se actulizada cuando llamamos a .setSate()
 *                                  2.- Cuando un componente Padre llama a su metodo de render y tambien llamara el 
 *                                      metodo de render del hijo.
 *                                  3.- React Actuliza el DOM en el caso que sea necesario
 *                                  4.- Y el metodo que se va ejaecutar una vez que se haya actulizado es el
 *                                      ComponentDidUpdate.
 * 
 * Demontando (ComponentWillUnmount): Es cuando ya NO vamos a mostrarle al usuario algun componenque hayamos definido
 *                                    recuerda la demostracion de un componente con condicional.
 *                                    Es quiere decir que cuando se confirme que este ya se vaya eliminar justo en el
 *                                    pasa previo se ejecuta el metodo ComponentWillUnmount
 *  
 * 
 * 
 */
