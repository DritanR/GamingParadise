const Footer = () => {
    return (
      <div id="footer" className="xl:h-[10rem] w-full bg-white text-black py-4 " >
          <div className="w-full h-full xl:max-w-[1250px] mx-auto px-4 flex flex-col xl:flex-row items-center" >
              <div className="flex-1" >
                  <p className="text-[1.3rem] font-medium text-center xl:text-start " >Get in touch with US!</p>
                  <p className="text-sm mt-2 text-center xl:text-start" >
                  Stay connected and receive the freshest news and updates about TDA. No spam, we guarantee it!
                  </p>
              </div>
  
              <div className="px-[1rem] flex items-end mt-4 xl:mt-0 " >
                  <div className="h-[3rem] w-full xl:w-[26rem] bg-black rounded-lg flex items-center p-1" >
                      <input type="text" placeholder="Enter email address" className="border-0 outline-none text-sm flex-1 px-2 bg-transparent text-white placeholder-gray-400" />
                      <button className="h-full px-4 xl:w-[8rem] bg-[#0078f2] rounded-lg text-sm  text-white">Continue</button>
                  </div>
  
              </div>
  
          </div>
      </div>
    )
  }
  
  export default Footer