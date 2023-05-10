import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const getLocal =()=>{
  let data =localStorage.getItem("list")
  if (data){
    data =  JSON.parse(localStorage.getItem("list"))
  }else{
    data=[]
  }
  return data;
}

function App() {
  const [data, setData] = useState(getLocal());
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [editID, setEditID] = useState("");

  const setLocal =(data)=>{
    localStorage.setItem("list",JSON.stringify(data))
  }
  
  const addItem = (name) => {
    if (!name) {
      toast.error("plz insert some item ");
      return;
    }
    if (name && isEdit) {
      const newItem = data.map((item) => {
        if (item.id === editID) {
          return { ...item, name: name };
        }
        return item;
      });
      console.log("newItem", newItem);
      setData(newItem);
      setLocal(newItem);
      setName("");
      setEditID(null);
      setIsEdit(false);
      toast.update("Item updated ");
    } else {
      const newItem = {
        name: name,
        id: nanoid(),
      };
      setData([...data, newItem]);
      setLocal([...data, newItem]);
      toast.success("Item added successfully");
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((val) => val.id !== id);
    setData(newData);
    setLocal(newData);
    toast.success("Item deleted ");
  };
  const handleEdit = (id) => {
    const newData = data.find((val) => val.id === id);
    setName(newData.name);
    setEditID(id);
    setIsEdit(!isEdit);
    console.log(newData);
  };
  return (
    <div className="box">
      <h1>Todo App</h1>
      <Form addItem={addItem} name={name} setName={setName} />
      <List data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
