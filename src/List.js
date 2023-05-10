import React from "react";
// import { RiDeleteBin5Fill } from "@react-icons/all-files/RiDeleteBin5Fill";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";



export default function List({ data,handleDelete,handleEdit}) {
  return (
    <div >
      {data.map((val, i) => (
        <div className="list" key={i}> 
          <span>{i+1}. </span>
          <span className="val">{val.name}</span> 
        <span className="edit" onClick={()=>handleEdit(val.id)}><GrEdit/></span> 
        <span className="delete" onClick={()=>handleDelete(val.id)}><RiDeleteBin5Fill/></span>
        </div>
      ))}
    </div>
  );
}
