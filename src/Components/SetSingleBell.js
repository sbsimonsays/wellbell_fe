import React, {useState, useEffect } from "react";
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

function SetSingleBell({ bell }) {
    // console.log(bell)
    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState(false);
    const [bell1, setBell1] = useState("");
    const [bell2, setBell2] = useState("");
    const [bell3, setBell3] = useState("");
    const [bell4, setBell4] = useState("");
    const [bell5, setBell5] = useState("");
    const [bells, setBells] = useState([]);
   

    useEffect(() => {
      axios.get(`${API}/bells`)
      .then(res => {
        setBells(res.data.payload)
        // console.log(bells)
        })
      .catch(err => console.err);
    }, [])

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setBell1(e.target.value);
        console.log(bell1)   
    }

    const handleClick = (e) => {
        e.preventDefault();
        setToggle(!toggle);
        setButtonText(!buttonText)
    }

    return(
      <>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
            
          <select required value={bell1} onChange={handleSelect}>
            {
            bells.map(bell => {
                if(bell.type === bell1){
                    console.log(bells[Math.floor(Math.random()* bells.length)])
                }
            })
            // selected  &&  bells.type === "Physical" ? console.log(bells) : null
            }
            <option value=" "></option>
            <option value="Physical">Physical</option>
            <option value="Nutrition">Nutritional</option>
            <option value="Self-Care">Self Care</option>
          </select>
          
        )}
      </>
    )
}

export default SetSingleBell

//class names sessions, 

//session={}
//select input and update state, gets fired to db with todays session 
//
// {/* <ul>
//             <li><input type="button" value="Physical" onClick={(e) => setPhysicalChoice(...physicalChoice, e.target.value)}>Physical</input></li>
//             <li><input type="button" value="Nutritional" onClick={(e) => setNutritionalChoice(...nutritionalChoice, e.target.value)}>Physical</input></li>
//             <li><input type="button" value="Self Care" onClick={(e) => setSelfCareChoice(...selfCareChoice, e.target.value)}>Self Care</input></li>       
//           </ul> */}




    // bells.map(bell => {
    //     if(bell.type === selected){
    //         console.log(bells[Math.floor(Math.random()* bells.length)])
    //     }
    // })