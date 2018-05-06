
import React from 'React';


export default class ReasonDropdown extends React.Component {

  render() {
    console.log("This should be printed in console!");
    return (
    	<form>
          <p>
             <label>Reason*</label>
             <select id = "reasonDropdownList">
               <option value = "1">Please select</option>
               <option value = "2">ACH Authorization Revoked</option>
               <option value = "3">ACH One Time Stop</option>
               <option value = "4">Other</option>
             </select>
          </p>
    </form>
     
    );
  }
}