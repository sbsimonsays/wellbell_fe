import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BellsForm() {
  const [toggle, setToggle] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const [bells, setBells] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    bell1:"",
    bell2:"",
    bell3:"",
    bell4:"",
    bell5:""
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/bells`)
      .then((res) => {
        setBells(res.data.payload);
        // console.log(bells)
      })
      .catch((err) => console.err);
  }, []);

  const addBell = (bell) =>{
    axios
      .post(`${API}/bells`, bell)
      .then(navigate("/currentreminders"))
      .catch((err) => console.error(err));
  }

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedCategories({...selectedCategories, [e.target.id]:e.target.value});
    console.log(selectedCategories)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    setButtonText(!buttonText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBell(selectedCategories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell1" required  onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell2" required onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell3" required onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell4" required onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <div>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <select id="bell5" required onChange={handleSelect}>
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
        )}
      </div>
      <input type="submit" />
    </form>
  );
}

export default BellsForm;

//button submit should have start Date.now()
//default frequency will be one hour
