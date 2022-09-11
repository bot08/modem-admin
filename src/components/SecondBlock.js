function Block() {
  return (
    <div className='bg-white m-3 rounded-lg p-1.5 xl:p-2'>
      <div className="text-xl font-semibold flex">
        Power mode
      </div>

      <hr className="my-0.5"/>

      <div className="text-lg flex items-center">
        {/* battery icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-battery-half w-7 h-7 ml-0.5 mr-1" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 6h5v4H2V6z" />
          <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
        </svg>
        54% ~ 4.5 hours left
      </div>
      <hr className="my-0.5"/>
      <div className="text-lg flex items-center my-1">
        {/* Check circle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-circle w-4 h-4 ml-0.5 mr-1.5" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        </svg>
        Max battery life
      </div>
      <div className="text-lg flex items-center my-1">
        {/* Check+ circle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-check2-circle w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
        </svg>
        Balanced
      </div>
      <div className="text-lg flex items-center mt-1">
        {/* Check circle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-circle w-4 h-4 ml-0.5 mr-1.5" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        </svg>
        Best speed
      </div>
      
    </div>
  );
}
  
export default Block;