import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 sm:mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>
                Email: 
                <a href="mailto:hello@example.com" className="text-emerald-400 hover:underline ml-1">
                  hello@example.com
                </a>
              </li>
              <li>Phone: +88 01712 345678</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <FaFacebook size={20}/>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <FaInstagram size={20}/>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <FaTwitter size={20}/>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <FaLinkedin size={20}/>
              </a>
            </div>

            <div>
              <p className="mb-2 text-sm">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <button className="px-4 bg-emerald-500 text-white rounded-r-md hover:bg-emerald-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} Designed by You. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
