import React, { useState } from "react";

const Todoapp = () => {
  const [state, setState] = useState([]);

  const clickAdd = () => {
    var text = document.getElementById("text").value;
    setState([...state, text]);
  };

  const clickDelete = (key) => {
    var a = state.filter((e, l) => {
      if (l !== key) {
        return e;
      }
    });
    setState(a);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <input type="text" id="text" placeholder="Enter items" />
        <button id="btn1" onClick={clickAdd}>
          Add
        </button>
        {state.map((item, key) => {
          return (
            <ul>
              <li>{item}<button id="btn2" onClick={() => clickDelete(key)}>Delete</button></li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todoapp;
