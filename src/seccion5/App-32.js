/* Cuando se Renderiza un componente*/



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
 * 1.- Para Este caso creamos otro componete (Button, con clase obvio)
 * 2.- El clg que esta entre el metodo de render y el return, es para verificar
 *     que se esta ejecutando nuestro componente
 * 3.- Colocamos nuestro componete Button creado dentro del componente App, entre 
 *     medio de los elemento primitivos <p> <button >
 * 
 * Que nos insteresa aprender:
 * 
 * A.- Que cuando cuando le demos click en el button que esta en nuestro componente
 *     App (button= Enviar en App), poder diferenciarlo del Enviar que esta dentro
 *     de nuestro componete Button.
 * 
 * B.- Y cuando actualicemos nuestro estado, dentro del comoponte de App, el componente
 *     Button, tambien se renderiza
 * 
 * C.- Y efectivamente es asi, cuando busca la conosola del inpecionador de tu navegador
 *     el ultimo mensaje que te trae es el 'ejecutando metodo render de button' 
 *    
 * D.- Recuerda un Componente se renderiza cuando pasa 2 cosas:
 *      .- Cuando se llama el metodo . setState()
 *      .- Cuando un componente hijo, se encuentra en el llamado de un metodo de render, que
 *         en este caso el metodo de app.
 * 
 * E.- El componente que se esta ejecutando, por ende se ejecuta su metodo de render y el componente
 *     hijo Button qu esta dentro de App, hace su propio llamado a su render y por eso se muestra
 *     'ejecutando metodo render de button' 
 */