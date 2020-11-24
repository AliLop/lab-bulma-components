import 'bulma/css/bulma.css';
import React from 'react';

const CoolButton = props => {
   return( 
       <button className={`button is-small ${props.myClass}`}>{props.children}</button>
   
    // <button className={`button is-small ${props.isDanger === true ? 'is-danger' : 'is-success'} ${props.className}`}>{props.children}</button>
    // over in the Navbar:
    // <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
    // <CoolButton isSmall isSuccess>Singup</CoolButton>
       )
}
export default CoolButton;