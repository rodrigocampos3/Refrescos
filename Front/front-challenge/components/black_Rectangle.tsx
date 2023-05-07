import React from 'react';

function BlackRectangle() {
  const rectangleStyle = {
    backgroundColor: 'black',
    width: '200px',
    height: '65px',
    borderRadius: '20px',
    marginTop: '50px',
  };

  return <center>
    <a href='/transfer'><div className="text-white font-rubik font-medium text-md text-2xl text-center py-4 px-8 rounded-md" 
      style={rectangleStyle}>
      Transferência 
    </div></a>
    
    </center>;
  
}

export default BlackRectangle;