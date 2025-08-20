import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6"
import { PiChefHatBold } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#fdf1e9] border-t border-gray-300 w-full">
      <div className=" px-12 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        
        {/* Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-orange-500"><PiChefHatBold />ChefExpress</h2>
          <p className="text-gray-600 mt-2">
            Bringing delicious recipes and fresh ideas to your kitchen every day.
          </p>
        </div>

        {/* Links Group 1 */}
        <div className="flex-1">
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-orange-500">ChefExpress: One-Time Cook</a></li>
            <li><a href="#" className="hover:text-orange-500">ChefExpress से जुड़ें</a></li>
            <li><a href="#" className="hover:text-orange-500">Cooks Near Me</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Links Group 2 */}
        <div className="flex-1">
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-[#3b5998] hover:opacity-80"><FaFacebookF /></a>
            <a href="#" className="text-[#000000] hover:opacity-80"><FaXTwitter /></a>
            <a href="#" className="text-[#e4405f] hover:opacity-80"><FaInstagram /></a>
            <a href="#" className="text-[#0077b5] hover:opacity-80"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="flex-1">
        <h3 >categories</h3>
        <ul className="space-y-2 text-gray-700">
          <li>HI Here!!</li>
          <li>HI Here!!</li>
          <li>HI Here!!</li>
          <li>HI Here!!</li>
          </ul>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-12">
        <p>&copy; {new Date().getFullYear()} ChefExpress. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
