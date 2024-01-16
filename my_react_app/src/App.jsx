

import Button from './components/button/button';
import './App.css'


function App() {
const arr=[23,45,567];
const obj = {
  name:"John",
  age:20
};

function handleClick() {
  console.log("triggered");
}


  return (
<div>
    <div>Salam</div>
    <Button text="First" test="Bir" type="primary"
     isActive={true} value={34} data={arr} personalinfo={obj}
     handleClick={handleClick} />
    <Button text="Second" test="Iki" type="secondary"/>
    <Button text="Third" test=" Üç" type="primary"/>
    </div>
 

  );
}

export default App;
