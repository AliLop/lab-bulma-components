import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import FormField from './components/FormField';


const App = () => {
  return (
    <div>
      <Navbar/>
        <br/>
        <br/>
        <br/> 
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div> 
    );
};

export default App;
