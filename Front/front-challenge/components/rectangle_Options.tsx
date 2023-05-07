// const Rectangle = () => {
//   const rectangleStyle = {
//     backgroundColor: 'black',
//     border: '2px solid white',
//     borderRadius: '25px',
//     height: '60px',
//     width: '380px',
//     marginTop: '20px',
//   };

//   return <div className="text-white  py-4 px-8" style={rectangleStyle}> RFC </div>;
// };

// export default Rectangle;

const Rectangle = () => {
  const rectangleStyle = {
    backgroundColor: 'black',
    border: '1px solid white',
    borderRadius: '20px',
    height: '60px',
    width: '380px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 20px'
  };

  return (
    <div className="text-white py-4 px-8" style={rectangleStyle}>
      <div>
        <img style={{width: '50px', height: '50px', left:'80%'}} src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="Bitcoin" />
      </div>
      <div>
        <p className="font-bold">RFC</p>
        <p className="font-bold">REFRESCO</p>
      </div>
      <div>
        <p className="font-bold">0.0019873</p>
        <p className="font-light">BTGDol</p>
      </div>
    </div>
  );
};

export default Rectangle;
