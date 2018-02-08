import React, { Component } from 'react';

import remove_but from "./remove.svg"
import edit_but from  "./edit-icon.png"


export default class TodoList extends Component  {

    constructor(props){
        super(props)

        this.state = {
            editing:false,
            delete:false,
            value:""

        }
        this.editButton = this.editButton.bind(this)
        this.delete = this.delete.bind(this)
        this.save = this.save.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    editButton(){
        this.setState({
            editing: true
        })
    }
    delete(){
        this.setState({
            delete: true
        })
        this.props.delete(this.props.index)
    }
    save(event){ 
        this.props.edit(this.state.value, this.props.index)
        this.setState({editing:false})
        
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    onKeyDown(event){
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.save();
        }
    }
    renderForm(){
        return (
            <div className = "input">
            <input  className = "edit_area "defaultValue = {this.props.item}  onChange={this.handleChange}  onKeyDown={this.onKeyDown} />

        </div>
        )
    }
    renderNormal(){
        return (
            <div className = "input">
                {this.props.item}
                <span className = "delete" onClick = {this.delete} > <img src={remove_but}/></span>
                <span className = "edit" onClick = {this.editButton} ><img  className = "edit_btn" src={edit_but}/></span>
        </div>
        )
    }




    render(){
        const text = this.props.item

        if(this.state.editing){  
            return this.renderForm()
        } else {
            return this.renderNormal()
        }
        
    }
}