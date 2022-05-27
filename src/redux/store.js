import {configureStore} from '@reduxjs/toolkit'
import formsFeature from './slices/forms.feature'


export default configureStore({
    reducer:{
          formsFeature,
    }
})