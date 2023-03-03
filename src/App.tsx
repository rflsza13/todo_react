import React from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// CSS
import styles from './App.module.css'
// Interface
import { ITask } from './interfaces/Task';
function App() {
  return (
    <div> 
      <Header/>
      <main className={styles.main}>
        <div> 
          <h2> O que voce vai fazer? </h2>
          <TaskForm btnText="Criar Tarefa"/>
        </div>
        <br />
        <div>
          <h2> Suas tarefas: </h2>
          <TaskList />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
 