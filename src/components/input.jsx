import React from "react";


const Input=({title, changeEvent,placeholder})=>{
  return(
    <div className="mb-3 col-8">
      <h4>{title}</h4>
      <input
        onChange={changeEvent}
        type="text"
        className="form-control"
        placeholder={placeholder}
        
      />
      </div>      
  );
};

export default Input;