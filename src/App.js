import './App.css';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Container from './Components/Container/container.component';
import Modal from './Components/Modal/modal.component';

const URL = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

function App() {
  const [data,setData] = useState(null);
  const [cName,setcName] = useState('modal-None');
  const [item,setItem] = useState(null);

  const displayModal = (name,item = '') =>{
    setcName(name);
    setItem(item)
  }

  React.useEffect(() => {
    axios.get(URL)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err) =>{
      console.log(err);
    })
  },[]);

  return (
    <div className="App">   
      {data && <Container data={data} displayModal={displayModal}/>}
      <Modal name={cName} item={item} displayModal={displayModal}/>
    </div>
  );
}

export default App;
