import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = props => (
  <div className="login-pf-header card-heading">
    <select className="selectpicker">
      {props.cardSelectPickerOptions.map(option => <option>{option}</option>)}
    </select>
    <h1>{props.cardTitle}</h1>
  </div>
);

CardHeader.propTypes = {
  cardSelectPickerOptions: PropTypes.array,
  cardTitle: PropTypes.string
};

CardHeader.defaultProps = {
  cardSelectPickerOptions: [],
  cardTitle: null
};

// <div class="btn-group bootstrap-select">
//   <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="English" aria-expanded="false">
//     <span class="filter-option pull-left">English</span>&nbsp;<span class="bs-caret">
//       <span class="caret"></span>
//     </span>
//   </button>
//   <div class="dropdown-menu open" role="combobox" style="max-height: 716.234px; overflow: hidden; min-height: 0px;">
//     <ul class="dropdown-menu inner" role="listbox" aria-expanded="false" style="max-height: 704.234px; overflow-y: auto; min-height: 0px;">
//
//       <li data-original-index="0" class="selected">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
//           <span class="text">English</span>
//           <span class="glyphicon glyphicon-ok check-mark"></span>
//         </a>
//       </li>
//       <li data-original-index="1">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">French</span>
//           <span class="glyphicon glyphicon-ok check-mark"></span>
//         </a>
//       </li>
//       <li data-original-index="2">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">Italian</span>
//           <span class="glyphicon glyphicon-ok check-mark"></span>
//         </a>
//       </li>
//     </ul>
//   </div>
//   <select class="selectpicker" tabindex="-98">
//     <option>English</option>
//     <option>French</option>
//     <option>Italian</option>
//   </select>
// </div>

export default CardHeader;
