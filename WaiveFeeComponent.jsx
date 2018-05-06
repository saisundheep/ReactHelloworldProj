import React from 'React';


export default class WaiveFeeComponent extends React.Component {
	render() {
    console.log("This should be printed in console!");
    return (


    	<form>
           <label>Radio Group:</label>
           <input type="radio"/> Option 1<br/>
           <span  class="form-field-no-caption"><input type="radio"/> Option 2</span><br/>
    
           <label>Some Input:</label>
           <input type="text"/><br/>

           <label>Another Input with a rather long caption:</label>
           <input type="text"/><br/>

           <span  class="form-field-no-caption"><input type="submit" value="submit"/></span>
         </form>

    	 );
  }
}