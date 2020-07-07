import React from 'react';

function NavBar({clicked}){

  return (
    
    <div className='navbar'>
      <h4><span>Deli</span>Recipes</h4>
      <div>
        <button type='button' onClick={clicked}>Add</button>
        <h5>About</h5>
        <h5>Review</h5>
      </div>
    </div>
  )
}


export default NavBar;
