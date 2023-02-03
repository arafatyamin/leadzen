import React from 'react';

const Test = () => {
    return (
        <div>
                    <div className="collapse">
  <input type="checkbox" className="peer" /> 
  <button className="collapse-title text-black">
    Click me to show/hide content
  </button>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>
        {/* <button type="button" className="collapsible">Open Section 3</button>
        <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div> */}
        </div>
    );
};

export default Test;