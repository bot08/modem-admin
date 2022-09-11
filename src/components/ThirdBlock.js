function Block() {
    return (
      <div className='bg-white m-3 rounded-lg p-1.5 xl:p-2'>
        <div className="text-xl font-semibold flex">
          Status information
        </div>
  
        <hr className="my-0.5"/>
        <div className="text-lg flex items-center">
          SIM card number: +380961873547
        </div>
        <hr className="my-0.5"/>
        <div className="text-lg flex items-center">
          EMEI: 483759024117238
        </div>
        <hr className="my-0.5"/>
        <div className="text-lg flex items-center">
          IMSI: 789548317118769
        </div>
        <hr className="my-0.5"/>
        <div className="text-lg flex items-center">
          Signal strength: -101 dBm
        </div>
        
      </div>
    );
  }
    
  export default Block;