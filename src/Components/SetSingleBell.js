import React, {useState}from 'react'


function SetSingleBell() {
    
    const [toggle, setToggle] = useState(false);
    const [buttonText, setButtonText] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setToggle(!toggle);
        setButtonText(!buttonText)
    }

    return(
      <>
        <button onClick={handleClick}>{buttonText ? "On" : "Off"}</button>
        {toggle && (
          <ul>
            <li><button>Physical</button></li>
            <li><button>Nutritional</button></li>
            <li><button>Self Care</button></li>       
          </ul>
        )}
      </>
    )
}

export default SetSingleBell

{/* <ul>
            <li><input type="button" value="Physical" onClick={(e) => setPhysicalChoice(...physicalChoice, e.target.value)}>Physical</input></li>
            <li><input type="button" value="Nutritional" onClick={(e) => setNutritionalChoice(...nutritionalChoice, e.target.value)}>Physical</input></li>
            <li><input type="button" value="Self Care" onClick={(e) => setSelfCareChoice(...selfCareChoice, e.target.value)}>Self Care</input></li>       
          </ul> */}