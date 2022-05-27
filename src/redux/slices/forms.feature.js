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
            let index = form.findIndex(field=>field._id == action.payload)
            console.info(index,'este es el formulario')
            
            form.splice(index,1)
            state.form_fields = [...form]
        },
        destroyForm:function(state,action){
            state.form_fields = []
        }
    }
})


export const {addField,removeField,destroyForm} = formSlice.actions
export default formSlice.reducer