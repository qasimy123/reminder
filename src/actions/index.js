import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from "../constants";

export const addReminder=(text,date) =>{
    
    
    const action={
        type:ADD_REMINDER,
        text,
        date
    }
    console.log("Actions",action);
    return action;
    
}

export const deleteReminder = (id)=>{
    
    const action={
        type:DELETE_REMINDER,
        id
        
    }
    
    console.log("delete",action);
    return action;
    }
    
export const clearReminders = () =>

{

  
        
    
    return {
        type:CLEAR_REMINDERS
        
    }
    


    
}