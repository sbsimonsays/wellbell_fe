import React, { useState, useEffect } from "react";
import axios from "axios";
// import SetSingleBell from "./SetSingleBell";

const API = process.env.REACT_APP_API_URL;

function BellsForm() {
  const [bells, setBells] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const [selected, setSelected] = useState("");

  const [bellsFormData, setBellsFormData] = useState({});
  //set preferences based on user
  useEffect(() => {
    axios
      .get(`${API}/bells`)
      .then((res) => {
        setBells(res.data.payload);
        console.log(bells);
      })
      .catch((err) => console.err);
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    setButtonText(!buttonText);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  //need user id here - unique identifier connecting to db

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Reminder 1{" "}
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell1" required value={selected} onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        Reminder 2{" "}
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell2" value={selected} required onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        Reminder 3{" "}
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell3" required value={selected} onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        Reminder 4{" "}
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell4" required value={selected} onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        {" "}
        Reminder 5{" "}
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell5" required value={selected} onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <input type="submit" value="Set Bells" />
    </form>
  );
}

export default BellsForm;

//button submit should have start Date.now()
//default frequency will be one hour
// {
//     bells.map(bell => {
//         if(bell.type === selected){
//             console.log(bells[Math.floor(Math.random()* bells.length)])
//         }
//     })
//     // selected  &&  bells.type === "Physical" ? console.log(bells) : null
//     }
//  {
//           filteredBells = bells.filter(bell=> bell.type === reminderType)
//      }
//       {console.log(filteredBells)}
//       <button  type="reset"
//         onClick={resetRadioState}>RESET</button>
//           <p>{reminderType}</p>
