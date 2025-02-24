import { useState } from "react";
const initialTasks =['FARE LA SPESA', 'PULIRE CASA', 'FARE IL BUCATO', 'VIVERE'];

const Main = () => {

    const [arrayTasks, setArrayTasks] = useState(initialTasks);

    const [newTask, setNewTask] = useState('');

    const [editIndex, setEditIndex] = useState(null);

    const addNewTask = (e) => {
        e.preventDefault();
        if (newTask.trim() === "") return alert("Nooooo, vuoto nooooo!");

        if (editIndex !== null) {
            //! aggiorna il task esistente
            const updatedTasks = [...arrayTasks];
            updatedTasks[editIndex] = newTask.toUpperCase();
            setArrayTasks(updatedTasks);
            setEditIndex(null);
            //! Esci dalla modifica
        } else {
            //!  aggiungi un nuovo task
            setArrayTasks([...arrayTasks, newTask.toUpperCase()]);
        }
        // Resetta l'input
        setNewTask('');
    };

    const removeTheTask= (indiceEl) => {

        const filteredArray = arrayTasks.filter((el, idx)=> idx!=indiceEl)
        return setArrayTasks(filteredArray);

    }
    const modify = (indiceEl) => {
        // Carica il task selezionato nell'input e imposta l'indice di modifica
        setNewTask(arrayTasks[indiceEl]);
        setEditIndex(indiceEl);
    };

    return (
    <>
        <div className="container-main">

            <ul>
                    {arrayTasks.map((el, idx) => {
                        
                        return (
                        <>
                            
                        <li key={idx}>
                            <button type="button" onClick={()=> modify(idx)}>
                                    
                                &#x270E;
                                    
                            </button>
                                <h2>{el}</h2>
                            <button onClick={()=> removeTheTask(idx)}>
                                &#x2716;
                            </button>
                        </li>
                        </>
                        )
                    })}     
            </ul>
        </div>
        <div className="container">
                
            <form onSubmit={addNewTask}>
                <input
                    type="text"
                    placeholder = "Inserisci le tue Task!"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    />
                
                    <button >
                        {editIndex !== null ? "Modifica Task" : "Aggiungi il nuovo task"}                            
                    </button>
               

            </form>

        </div>
    </>
    )
}
export default Main;