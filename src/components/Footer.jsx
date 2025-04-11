import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12 py-10">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-red-600">Book <span className="text-gray-900 dark:text-white">Vibe</span></h2>
                    <p className="mt-2 text-sm">
                        Your companion for discovering and organizing your favorite reads.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
                        <li><Link to="/Listed" className="hover:text-green-600">Listed Books</Link></li>
                        <li><Link to="/Pages" className="hover:text-green-600">Pages to Read</Link></li>
                        <li><Link to="/Faq" className="hover:text-green-600">FAQ</Link></li>
                        <li><Link to="/Pricing" className="hover:text-green-600">Pricing</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://www.facebook.com/Mahi1830/" target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"><FaFacebook /></a>
                        <a href="https://www.instagram.com/soadasmahi/"
                            target="_blank"
                            rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
                        <a href="https://x.com/SoadAsHamimMahi"
                          target="_blank"
                          rel="noopener noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/soad-as-hamim-mahi-14189423a/"
                         target="_blank"
                         rel="noopener noreferrer" className="hover:text-blue-800"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
