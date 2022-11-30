import React, {useState, useEffect } from "react";
import SetSingleBell from "./SetSingleBell";

function BellsForm() {
  
  const [selectedCategories, setSelectedCategories] = useState({
    bell1: "",
    bell2: "",
    bell3: "",
    bell4: "",
    bell5: ""});

  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h1>Hello</h1>
      <form>
        <p>Bell 1 <SetSingleBell/></p>
        <p>Bell 2 <SetSingleBell/></p>
        <p>Bell 3 <SetSingleBell/></p>
        <p>Bell 4 <SetSingleBell/></p>
        <p>Bell 5 <SetSingleBell/></p>
        
        <input onSubmit={handleSubmit} type="submit" value="Set Bell"/>
      </form>
    </div>
  );
}

export default BellsForm;

//button submit should have start Date.now()
//default frequency will be one hour

