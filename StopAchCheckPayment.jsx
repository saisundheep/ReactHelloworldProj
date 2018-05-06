import React from 'react';
//import './Styles.css';
import ReasonDropdownValues from './ReasonDropdown.jsx';
import WaiveFeeComponent from './WaiveFeeComponent.jsx';


export default class StopAchCheckPayment extends React.Component {
	

  render() {
  
    return (

      <div>
      	<div class="tabs">
          <ul class="tab-links">
          <h2>ACH Payment</h2>
          <hr/>
             <li class="active"><a href="#Request">Request</a></li>
             <li><a href="#Review">Review</a></li>
         </ul>
         <div class="tab-content">
         <div id="Request" class="tab active">
           <p>Tab #1 content goes here!</p>
           <p>Donec pulvinar neque sed semper lacinia. Curabitur lacinia ullamcorper nibh; quis imperdiet velit eleifend ac. 
           Donec blandit mauris eget aliquet lacinia! Donec pulvinar massa interdum risus ornare mollis.</p>
         </div>
         <div id="Review" class="tab">
           <p>Tab #2 content goes here!</p>
           <p>Donec pulvinar neque sed semper lacinia. Curabitur lacinia ullamcorper nibh; quis imperdiet velit eleifend ac. Donec blandit mauris eget aliquet lacinia! Donec pulvinar massa interdum risus ornare mollis. In hac habitasse platea dictumst. Ut euismod tempus hendrerit. Morbi ut adipiscing nisi. Etiam rutrum sodales gravida! Aliquam tellus orci, iaculis vel.</p>
         </div>
         </div>
        </div>

    <div class="radiobuttonsContainer">

       <form>
          <label class="radio-inline">
          <input type="radio" name="debitcreditradio" checked/>debit</label>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label class="radio-inline">
          <input type="radio" name="debitcreditradio"/>credit</label>
       </form>

    </div>

    <h2>Original Institution</h2>
    <hr/>
    <div id="textBoxContainer">
      
      <form>
        
        <label for="nameOfOriginator">
        <span>Name Of Originator</span>
        <input type="text" id="nameOfOriginator" /></label>
  
        <label for="originatioIDorCompanyID">
        <span>Origination ID/Company ID</span>
        <input type="text" id="originatioIDorCompanyID" /></label>
    
      </form>
    </div>
     <h2>ACH Information</h2>
     <hr/>

     <div class="row strong">
         <form>
          <label class="radio-inline">
          <label type="label" name="amountrangeandamount" />Effective Date:</label>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <label class="radio-inline">
          <input type="radio" name="amountrangeandamount" checked/>Amount Range*
          <input type="text" id="amountrange" /></label>
          <label class="radio-inline">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="radio" name="amountrangeandamount"/>Amount 
            &nbsp; &nbsp; &nbsp;
          <input type="text" id="amount" /></label>
       </form>

     </div>

<br/>
<br/>
     <div id ="reason-dropdown">
         <ReasonDropdownValues/>
     </div>

     <br/>
     <br/>
     <div id ="waive-feeComponent">
         <WaiveFeeComponent/>
     </div>

     
     </div>

    );
  }
}

 
