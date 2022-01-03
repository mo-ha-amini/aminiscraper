import {createStore , combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {jobsReducer,jobDetailsReducer,scrapeDataReducer,deleteAlljobReducer,downloadJobReducer,downloadProReducer}from './reducers/jobReducers'

const reducer = combineReducers({
    jobs : jobsReducer,
    jobDetails:jobDetailsReducer,
    scrapeData:scrapeDataReducer,
    deleteAlldata:deleteAlljobReducer,
    downloadJob:downloadJobReducer,
    downloadPro:downloadProReducer
})

let initialState = {}

const middleware =[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
