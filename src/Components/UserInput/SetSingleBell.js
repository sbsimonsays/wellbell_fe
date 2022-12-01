import React, {useState, useEffect } from "react";
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

function SetSingleBell() {
    
    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState(false);
    const [selected, setSelected] = useState("");
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
        setSelected(e.target.value); 
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
            
          <select value={selected} onChange={handleSelect}>
            {
            bells.map(bell => {
                if(bell.type === selected){
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