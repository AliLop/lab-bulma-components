import 'bulma/css/bulma.css';
import React from 'react';

const FormField = props => {
   return( 
    <div>
       <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
        <br/>
        {/* <div className="field">
            <label className="label">{props.email}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} />
            </div>
        </div> */}
    </div>
   )
}

export default FormField;