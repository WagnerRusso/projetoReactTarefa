import React, { Component } from 'react';
import './style.css'
class TodoItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
        };
        this.delete = this.delete.bind(this);
        this.mudarStatus = this.mudarStatus.bind(this);
        this.alterar=this.alterar.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    mudarStatus(key){
        this.props.mudarStatus(key);
        
    }

    alterar(key)
    {
        this.props.alterar(key);    
    }
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.props.lista.map((item) => {
                                    return (
                                        <p key={item.key}> {item.text}</p>

                                    );
                                })}
                            </td>
                            <td>
                            {this.props.lista.map((item) => {
                                return (
                                    <p key={item.key}>
                                        {item.status}
                                    </p>

                                );
                            })}
                            </td>
                            <td>  {this.props.lista.map((item) => {
                                return (
                                    <p>
                                        <a className="botao" onClick={()=>this.mudarStatus(item.key)}>Resolvido</a>
                                        <a className="botao" onClick={()=>this.alterar(item.key)}>Alterar</a>
                                        <a className="botao" onClick={() => this.delete(item.key)}>Deletar</a>
                                    </p>

                                );
                            })}</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        );
    }
}

export default TodoItems;