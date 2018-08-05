import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableLabel from 'react-inline-editing';
import './Task.css';
import ProjectName from './ProjectName'
import PersonOnTheTask from './PersonOnTheTask'
import Description from './Description'
import DateLabel from './DateLabel'
import 'font-awesome/css/font-awesome.min.css';



class Task extends Component {
  constructor(props) {
    super(props);
    this.tempProps = { projectName: "Project java", description: "implamenting network interface", assignedTo: "Kobi A", dateCreated: "02/08/2018", estimatedTime: "05/08/2018" }
  
  }

  _handleFocus = (text) => {

  }

  _handleFocusOutProjectName = (text) => {
    let task = this.props.taskData;
    task.projectName = text;
    this.props.editTask(task);
  }
  render() {
    const { provided, innerRef } = this.props;
    return (
      <div className="card border-light mb-3" style={{ maxWidth: "18rem", padding: "px" }}
        {...provided.draggableProps}
        ref={innerRef}>

        <div className="card-header">
          <ProjectName name={this.props.taskData.projectName} _handleFocusOutProjectName={this._handleFocusOutProjectName}/>
          <i className="fa fa-trash" style={{
            position: "absolute", top: "0.5rem", bottom: "0.5rem",
            right: "0.5rem"
          }} onClick={this.props.deleteTask}></i>

        </div>
        <div className="card-body" {...provided.dragHandleProps}>
          <h5 className="card-title">
            <PersonOnTheTask name={this.tempProps.assignedTo} />
          </h5>
          <p className="card-text"><Description info={this.tempProps.description} /></p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.tempProps.dateCreated} untill {this.tempProps.estimatedTime} </small>
        </div>
      </div>);


  }
}

export default Task;


