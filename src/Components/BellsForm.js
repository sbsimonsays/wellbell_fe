import React from "react";
import SetSingleBell from "./SetSingleBell";

function BellsForm() {
  return (
    <div>
      <h1>Hello</h1>
      <form>
        <p>Reminder 1 <SetSingleBell/></p>
        <p>Reminder 2 <SetSingleBell/></p>
        <p>Reminder 3 <SetSingleBell/></p>
        <p>Reminder 4 <SetSingleBell/></p>
        <p>Reminder 5 <SetSingleBell/></p>
        
        <button>Set it and forget it</button>
      </form>
    </div>
  );
}

export default BellsForm;

//button submit should have start Date.now()
//default frequency will be one hour

