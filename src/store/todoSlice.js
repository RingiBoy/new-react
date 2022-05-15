import { createSlice } from "@reduxjs/toolkit";




const todoSlice = createSlice({
    name:'todoSlice',
    initialState:{
        todosArray:[]
    },
    reducers:{
        
        addTodo(state, action){
            
            state.todosArray.push({
                id: new Date().toISOString(), text:action.payload.text, completed: false
            })
        },
        
        toggleTodoComplete(state, action){
           const toggledTodo = state.todosArray.find(todo=>todo.id ===action.payload.id);
           toggledTodo.completed = !toggledTodo.completed;
        },
        
        removeTodo(state, action){
            state.todosArray = state.todosArray.filter(todo => todo.id !== action.payload.id)
        }

    },
})


export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;