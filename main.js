import React from 'react';
import ReactDOM from 'react-dom';

import StopAchCheckPayment from './StopAchCheckPayment.jsx';
import ReasonDropdownValues from './ReasonDropdown.jsx';
import WaiveFeeComponent from './WaiveFeeComponent.jsx';


ReactDOM.render(<WaiveFeeComponent />, document.getElementById('StopAchCheckPayment'));
ReactDOM.render(<ReasonDropdownValues />, document.getElementById('StopAchCheckPayment'));
ReactDOM.render(<StopAchCheckPayment />, document.getElementById('StopAchCheckPayment'));



