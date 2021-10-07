import React, { Component } from 'react'

export default class FormComponents extends Component {

    state = {
        title: '', 
        salary: ''
    }

    handleChangeJob = (event) => {
        this.setState({ 
            title: event.target.value 
        });
    }

    handleChangeSalary = (event) => {
        this.setState({ 
            salary: event.target.value 
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if ( !this.state.title || !this.state.salary ) {
            alert("Please enter full!")
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 111), 
            title: this.state.title,
            salary: this.state.salary
        })
    }

    render() {
        return (
            <form>
                <label> title</label>
                <br/>
                <input type="text" id="title" placeholder="Enter your Job" value={this.state.title} onChange= {(event) => this.handleChangeJob(event)}/>
                <br/>
                <label> salary</label>
                <br/>
                <input type="salary" id="salary" placeholder="Enter your salary" value={this.state.salary} onChange= {(event) => this.handleChangeSalary(event)}/>
                <br/>
                <input type="submit" value="Submit" onClick={ (event) => this.handleSubmit(event)}></input>
            </form>
        )
    }
}
