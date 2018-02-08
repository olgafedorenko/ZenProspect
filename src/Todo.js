import React, { Component } from 'react';

import TodoList from "./TodoList"


export default class Todo extends Component  {
    constructor (props){
        super(props)

        this.state = {
            list:[],
            todothing:'',
            //index:0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange  = this.handleOnChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
    }

    handleSubmit(event){
        //event.preventDefault();
        const list_of_todo = this.state.list
        list_of_todo.push(this.state.todothing)
        this.setState({
            list: list_of_todo
        })

    }

    handleOnChange(event){
        this.setState({
            todothing: event.target.value
        })   
    }

    remove(i){
        const new_arr = this.state.list
        new_arr.splice(i, 1)
        this.setState({
            list: new_arr
        })
    }
    update(newText, i){
        const update_list = this.state.list
        update_list[i] = newText
        this.setState({
            list:update_list
        })
    }
    
    onKeyDown(event){
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSubmit(event);
            event.target.value = ""
        }
    }

    render(){

        const list = this.state.list
        return(
            <div className = "todo_container">
                <div >
                <input  className = "input" type = "text" 
                    placeholder = "add new things to do " 
                    onChange = {this.handleOnChange} 
                    onKeyDown={this.onKeyDown}/>
                </div>
                <div>
                    {list.map((item, index) =>  
                    <TodoList  
                        key = {index}
                        index = {index}
                        item = {item}
                        delete = {this.remove}
                        edit = {this.update}
                        />
                    )}  
                </div>
            </div>

        )
    }

}