
/* Listas y sus Keys en react */

import Button from "./Button";

const arr = [
    'Chanchito feliz',
    'Chanchito triste',
    'Chanchito emocinado'
]

const  App = () => {
    const miVariable = false;

    if (miVariable){
        return <p>Estoy dentro de mi sesion</p>
    }
    return (
        <div>
            <h1 onClick={(e)=> console.log('click',e)}>Hola Mundo</h1>
            {arr.map((el => <p key={el}>{el}</p>))}
            <Button onClick={() => console.log('clickiando')}>
                Enviar
            </Button>
        </div>
    );
};

export default App