import React, { Component } from 'react';
import TodoItems from '../TodoItems';
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.mudarStatus = this.mudarStatus.bind(this);
        this.alterar = this.alterar.bind(this);
    }

    addItem(e) {
        let state = this.state;
        if (this._tarefaInput.value !== '') {
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now(),
                status:'Pendente'
            };

            this.setState({ items: [...state.items, newItem] });

        }
        e.preventDefault();
        this.setState({ tarefa: '' });
    }

    deleteItem(key) {
        let filtro = this.state.items.filter((item) => {
            return (item.key !== key);
        });
        this.setState({ items: filtro });
    }

    mudarStatus(key){
        
       let filtro = this.state.items.filter((item)=>{
           if(item.key === key){

               return(item.status ="Resolvido");
           }
       });
        this.setState({item: filtro});  
    }

    alterar(key){
        let filtro = this.state.items.filter((item)=>{
               if(item.key === key){

                   let teste = item.text;
                   console.log(teste);
                   return (item.text);
               }
        });
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.addItem}>

                  <textarea className="textarea" rows="5" cols="50" placeholder="Nova Tarefa?" name="tarefa" value={this.state.tarefa}
                        onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={(event) => this._tarefaInput = event}></textarea>    
                    <button className="btnAdicionar" type="submit">
                        Adicionar
                    </button>
                </form>


                <TodoItems lista={this.state.items} delete={this.deleteItem}
                            mudarStatus={this.mudarStatus}
                            alterar={this.alterar}></TodoItems>
            </div>
        );
    }
}

export default TodoList;