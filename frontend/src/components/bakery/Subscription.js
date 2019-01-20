import React from 'react';

const Subscription = (props) => {
  return(
    <div className="subscription-container" >
<table>
<tr>
    <td><h6>{props.subscription.threem_details}</h6></td>
    <td><h6>{props.subscription.sixm_details}</h6></td>
  </tr>
  <tr>
    <td><h6>{props.subscription.threem_price}</h6>
    </td>
    <td><h6>{props.subscription.sixm_price}</h6></td>
  </tr>
</table>
      <br/>
      {props.isBaker ?<button onClick={() => {props.toggleModal()}}>Edit</button>:''}
            </div>
  )
}

export default Subscription;