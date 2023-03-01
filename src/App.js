import React from "react";

import { useSelector } from "react-redux";

function App() {
  /* const booksState=useSelector(state=>state.booksState)
  const categoriesState=useSelector(state => state.categoriesState) */
  const {booksState}=useSelector(state=>state)

 
  console.log(booksState);
  return (
    <div>
      <h1>Library App start</h1>
    </div>
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