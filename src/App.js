import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Orders from './Pages/Orders'
import './App.scss'
import * as firebase from "firebase/app";
import {firebaseConfig} from "./Firebase";
import Check from "./Pages/Check";
import New_order from "./Pages/New_order";

axios.defaults.baseURL = 'https://online-menu-2e064-default-rtdb.asia-southeast1.firebasedatabase.app'
firebase.initializeApp(firebaseConfig)

const App = () => {
  // React.useEffect(() => {
  //   axios.post('/orders.json', {id: 1, table: 3, foods: [{title: 'Loaded pasta chips', img:
  //   'https://cdn.abcotvs.com/dip/images/3019587_020118-cc-loaded-pasta-chips-recut-img.jpg?w=1600', price: 500,
  //   count: 2, result: 0}]})
  // }, [])
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Orders />} />
        <Route path='*' element={<Orders />} />
        <Route path='/check' element={<Check />} />
        <Route path='/new_order' element={<New_order />} />
      </Routes>
    </div>
  )
}

export default App

