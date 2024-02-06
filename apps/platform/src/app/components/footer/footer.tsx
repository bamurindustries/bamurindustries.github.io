import React from 'react';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">
              Bamur Industries & Engineering Private Limited
            </p>
            <p>
              Call For Enquiries <a href="tel:+919044991559" className="text-blue-400 hover:text-blue-600">+91-904-499-1559</a>
            </p>
            <p>
              Email us: <a href="mailto:bamurindustries@gmail.com" className="text-blue-400 hover:text-blue-600">bamurindustries@gmail.com</a>
            </p>
          </div>
        </div>
        <p className="mt-4 text-center">
            &copy; {new Date().getFullYear()} Bamur Industries & Engineering Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
