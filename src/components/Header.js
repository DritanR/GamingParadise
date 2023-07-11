import { AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div className="absolute w-full h-[5rem] bg-[#2a2a2a] text-[#cccccc] " >
        <div className="hidden lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4  " >
        <div className="font-bold text-[1.5rem] cursor-pointer bg-transparent">
      <img src={require("../images/logo.png")} alt="Logo" />
    </div>
            <div className="flex-1 flex items0center justify-end space-x-10 " >
                <ul className="flex items-center space-x-6" >
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >Home</li>
                    <Link to='game-centers' smooth={true} duration={500}>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >About Us</li>
                    </Link>
                    <Link to='trending' smooth={true} duration={500}>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >Games</li>
                    </Link>
                    <Link to='news' smooth={true} duration={500}>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >News</li>
                    </Link>
                </ul>
                <Link to='footer' smooth={true} duration={500}>
                <button className="w-[8rem] py-2 bg-[#0078f2] rounded-md " >Contact us</button>
                </Link>
            </div>

        </div>

        <div className="w-full h-full flex items-center px-4" >
            <AiOutlineMenu size={18} className="lg:hidden" />
        </div>
    </div>
  )
}

export default Header