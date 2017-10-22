import React, {Component} from "react";
import {connect} from "react-redux";
import {addReminder, deleteReminder, clearReminders} from "../actions";
import "../index.css";
import moment from "moment";


class App extends Component{
    
    
    dateToReadable(dateData) {
        
    const dateObject = new Date(Date.parse(dateData));

    const dateReadable = moment(dateObject).fromNow();
    
    return dateReadable;
        
    }
    
    
    
    constructor(props){
        super(props);
        this.state={
            
            text:"",
            date:""
        }
        
    }
    
    errorMessage()
    
    {
        
        alert("FIll OUT ALL THE FIELDS")
        
    }
    
    addReminder() {
        
        
       
        this.props.addReminder(this.state.text,this.state.date);
        
    }
    
    deleteReminder(id) {
        
        this.props.deleteReminder(id);
        
    }
    
   
    
   renderReminders() {
       const {reminders} = this.props;
       return(
           <ul className="list-group col-sm-6">
           {
           reminders.map((reminds)=>{
               
               return(
               
               <li key={reminds.id} className="list-group-item">
               
               <div className="list-item">
               <div className="reminder" >{reminds.text}</div>
               <div >{ moment(reminds.date).format('MMMM Do YYYY, h:mm a')}<br/><em>{this.dateToReadable(reminds.date)[this.dateToReadable(reminds.date).length-1]==="o"?"was":"is" } {this.dateToReadable(reminds.date) }</em></div>
               </div>
              
                <div onClick={()=>this.deleteReminder(reminds.id)}className="list-item delete-button">
               &#x2715;
               </div>
              
               </li>
              
               
               )
               
           })
               
           }
           </ul>
           
          )
   }
    
    render(){
        
        return(
            
           
            
            <div className="App">
            
            
            <div className="jumbotron">
            
            <div className="App-title">
            Remind App
            </div>
            <div className="form-inline">
            <div className="form-group">
            <input
            className="form-control"
            placeholder="to do.."
            onChange={event=>{this.setState({text:event.target.value})}}
            />
            
            <input
            className="form-control"
             type="datetime-local"  onKeyPress={event=>{
                    
                    if(event.key==="Enter"){
                       this.addReminder()
                    }} }
            onChange={event=>{this.setState({date:event.target.value})}}
            />
            
            <button onClick={this.state.text===""||this.state.date===""?()=>this.errorMessage():()=>this.addReminder()} type="button" className="btn btn-default">
            Add to list
            </button>
            
            <button onClick={()=>this.props.clearReminders()} type="button" className="btn btn-danger">
            Clear list
            </button>
            
            </div>
            </div>
            </div>
            {this.renderReminders()}
            
            </div>
            )
    }
    
}

function mapStateToProps(state){
    
    return{
        reminders:state
        
    }
}

export default connect(mapStateToProps,{addReminder, deleteReminder, clearReminders})(App);