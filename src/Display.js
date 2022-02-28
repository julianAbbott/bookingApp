
import React from 'react';
  
const Display = (props) => {
    console.log(props.data);
    return(
      <div> {props.data} </div>
    );
}
  
export default Display;