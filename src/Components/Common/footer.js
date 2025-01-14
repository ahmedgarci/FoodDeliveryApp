import React from "react";
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Our top cities</h4>
            <ul className="space-y-2">
              {["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 mt-8 sm:mt-0">
              {["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 mt-8 md:mt-0">
              {["NY City", "Orange County", "Atlanta", "Charlotte", "Denver"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 mt-8 lg:mt-0">
              {["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-2 mt-8 lg:mt-0">
              {["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 opacity-50" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About us", "Team", "Careers", "Blog"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {["Help & Support", "Partner with us", "Ride with us"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <Facebook className="text-blue-500" size={20} />
              <Twitter className="text-sky-500" size={20} />
              <Instagram className="text-pink-500" size={20} />
            </div>
            <h4 className="mb-4">Receive exclusive offers in your mailbox</h4>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="p-3 rounded-l-md text-gray-700 w-full"
              />
              <button className="bg-red-500 p-3 rounded-r-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;