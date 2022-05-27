import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    form_fields:[],
}

const formSlice = createSlice({
    name:'form',
    initialState:initialState,
    reducers:{
        addField:function(state,action){
            let form = [...state.form_fields];
            form.push(action.payload);
            state.form_fields = form
        },
        removeField:function(state,action){
            let form = [...state.form_fields]
            let index = form.findIndex(field=>field._id == action.payload._id)
            form.slice(1,index)
            state.form_fields = form;
        }
    }
})


export const {addField,removeField} = formSlice.actions
export default formSlice.reducer