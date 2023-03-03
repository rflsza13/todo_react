import React, { useState } from "react";
// CSS
import styles from "./TaskForm.module.css";
// Interface
import { ITask } from '../interfaces/Task';

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);

    const addTaskHandler = () => {};

    const handleChange = () => {};

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da Tarefa" onChange={handleChange}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value= {btnText} />
        </form>
    )
};

export default TaskForm;