

import "./button.css";

const Button = ({text, test, type, data, personalinfo,handleClick})=> {
    console.log(handleClick);
    // const {text, test, type } =props;

  return ( <button className={`btn ${type}`} onClick={handleClick}>
  {test ? test : text}
  </button>
  );
};

export default Button;

