import React, { Component } from 'react';
import TodoList from './todoList';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id:1,
                    title: '할일1'
                },
                {
                    id:2,
                    title: '할일2'
                }
            ],
            text: '',
        }
    }

    onChangeText = event => {
        let text = event.target.value;
        this.setState({text});
    }
    
    checkTodo = (event) => {

        const text = this.state.text;
        this.setState(state => {
            // let prevData = state.data;
            state.data.push({id: state.data.length, title: text});
            return {data: state.data, text:''}
        })
        event.preventDefault();
    }

    render() {
      return (
        <div>
            <h1>Todo</h1>
            <div>{this.state.text}</div>
            
            <form onSubmit={this.checkTodo}>
            <input type="text" onChange={this.onChangeText} value={this.state.text}/>
            </form>
            
            <TodoList list={this.state.data}/>
        </div>
      )
    }
}