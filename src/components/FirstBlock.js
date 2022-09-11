function Block() {
  return (
    <div className='bg-white m-3 rounded-lg p-1.5 xl:p-2'>
      <div className="text-xl font-semibold flex">
        Real-time statistics
      </div>

      <hr className="my-0.5"/>

      <div className="text-lg flex items-center">
        {/* Router icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-router w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z" />
          <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" />
          <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13Z" />
          <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
        </svg>
        Connected devices: 1
      </div>
      <hr className="my-0.5"/>
      <div className="block">
        <div className="text-lg flex items-center truncate">
          {/* d/w arrows icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-down-up w-4 h-4 ml-0.5 mr-1.5 lg:hidden xl:block" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          Download/upload speed
        </div>
        {/* d/u speed */}
        <div className="text-base mt-2 flex flex-row justify-center items-center">
          <div className="block mr-4">
            {/* Arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-down w-7 h-7 mx-auto" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
            5.06 Kb/s
          </div>
          <div className="block ml-4">
            {/* Arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-down w-7 h-7 mx-auto rotate-180" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
            1.24 Kb/s
          </div>
        </div>
      </div>
      <hr className="my-0.5"/>
      <div className="text-lg block">
        <div className="text-lg flex items-center">
          {/* Data stat icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-clipboard-data w-4 h-4 ml-0.5 mr-1.5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
          Cellular data limit
        </div>

        <div className="w-full h-3 mt-2 bg-gray-300 rounded-lg"><div className="w-1/4 h-full bg-black rounded-lg"></div></div>
        <div className="text-lg">Used: 5.12 GB</div>
        <div className="text-lg">Current limit: 20.00 GB</div>
      </div>
    </div>
  );
}
  
export default Block;