import React, {Component} from 'react';
import TodoList from './components/TodoList'
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <div className="container">
        <header>
          <strong>Lista de Tarefas</strong>
        </header>
        
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;