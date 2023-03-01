import React from "react";

import { useSelector } from "react-redux";

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  /* const booksState=useSelector(state=>state.booksState)
  const categoriesState=useSelector(state => state.categoriesState) */
  const {booksState}=useSelector(state=>state)

 
  console.log(booksState);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/* const obje={
  obje1:{
    name:"emre"
  },
  obje2:{
    name:"ahmet"
  }
}
const obje1=obje.obje1
const obje2=obje.obje2

const {obje1,obje2}=obje */