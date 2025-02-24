import { useState } from "react";
const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato'];

const Main = () => {

    const [arrayTasks, setArrayTasks] = useState(initialTasks);

    const [newTask, setNewTask] = useState('');

    
    const addNewTask = (e) => {
        
        e.preventDefault();     
        setArrayTasks([...arrayTasks, newTask]);
        setNewTask(' ');

    };

    const removeTheTask= (indiceEl) => {

        const filteredArray = arrayTasks.filter((el, idx)=> idx!=indiceEl)
        return setArrayTasks(filteredArray);

    }

    

    return (
    <>
        <div className="container">

            <ul>
                    {arrayTasks.map((el, idx) => {
                        
                        return (
                            
                            <li key={idx}>
                                {el}


                                <button onClick={()=> removeTheTask(idx)}>
                                    X
                                </button>

                            </li>
                        )
                        
                    })}     
            </ul>
          
            <form onSubmit={addNewTask}>
                <input
                    type="text"
                    placeholder="Inserisci le tue Task!"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
                <button >Aggiungi il nuovo task</button>

            </form>
        </div>
    
    </>


    )
}

export default Main;