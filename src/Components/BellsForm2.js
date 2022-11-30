import React, {useState, useEffect } from "react";
import SetSingleBell from "./SetSingleBell";

function BellsForm() {
  
  const [selectedCategories, setSelectedCategories] = useState({
    bell1: "",
    bell2: "",
    bell3: "",
    bell4: "",
    bell5: ""});
  
  // const bellForms = ["bell1", "bell2", "bell3", "bell4", "bell5"];
  
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div>
      <h1>Hello</h1>
      <form>
        {Object.keys(selectedCategories).map((bell, i) => <p key={i}><SetSingleBell bell={bell}/></p>)}
        <input onSubmit={handleSubmit} type="submit" value="Set Bell"/>
      </form>
    </div>
  );
}

export default BellsForm;

//button submit should have start Date.now()
//default frequency will be one hour
