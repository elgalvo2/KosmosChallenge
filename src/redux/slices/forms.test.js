import { addField,removeField,destroyForm } from "./forms.feature";
import store from '../store'
import {v4 as uuidv4} from 'uuid'


const text_field_example = {
    component:'text',
    label:'Text field',
    type:'text',
    _id:uuidv4(),
}

describe('test on form-a-tron reducers',()=>{
    afterEach(()=>{
        store.dispatch(destroyForm())
    })
    test('state intialices correctly',()=>{
        const {form_fields}= store.getState().formsFeature
        expect(form_fields).toEqual([])
    })
    test('add field reducer adds a field correclty',()=>{
        store.dispatch(addField(text_field_example))
        let {form_fields}=store.getState().formsFeature
        expect(form_fields.length).toBe(1);
    })
    test('removeField reducer removes a field correclty',()=>{
        store.dispatch(addField(text_field_example))
        let {form_fields}=store.getState().formsFeature
        expect(form_fields.length).toBe(1);
        store.dispatch(removeField(text_field_example._id));
        let {form_fields:ff} = store.getState().formsFeature;
        expect(ff.length).toBe(0);
    })
})