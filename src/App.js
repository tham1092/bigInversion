import React from 'react';
import './App.css';
import Biginversion from './component/Biginversion';

function App() {
  return (
    <div className="App">
       <Biginversion lastName={"Doe"} firstName= {"Jane"} age={ 45 } hairColor={"Black"}/>
      <Biginversion lastName={"Smith"} firstName= {"John"} age={ 88 } hairColor={"Brown"}/>
      <Biginversion lastName={"Fillmore"} firstName= {"Millard"} age={ 50 } hairColor={"Brown"}/>
      <Biginversion lastName={"Smith"} firstName= {"María"} age={ 62 } hairColor={"Brown"}/>
    </div>
  );
}

export default App;
