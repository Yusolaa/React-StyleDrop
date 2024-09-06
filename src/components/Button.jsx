import React from 'react';

const Button = (props) => {
  console.log(props);
  const handLeSubmit = () => {
    alert(
      props.title === 'Submit'
        ? 'Submitted successfully.'
        : 'Login succussfully'
    );
  };

  return (
    <div>
      <button className="hover:bg-blue-500 bg-black" onClick={handLeSubmit}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
