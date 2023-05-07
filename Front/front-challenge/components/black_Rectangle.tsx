import React from 'react';

function BlackRectangle() {
  const rectangleStyle = {
    backgroundColor: 'black',
    width: '200px',
    height: '65px',
    borderRadius: '10px',
    marginTop: '50px',
  };

  return <center>
    <div className="text-white font-rubik font-medium text-md text-2xl text-center py-4 px-8 rounded-md " 
      style={rectangleStyle}>
      Transferência 
    </div>
    
    </center>;
  
}

export default BlackRectangle;