import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => {
    const links = [
        "FAQ", "Help Centre", "Account", "Media Centre",
        "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
        "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
        "Speed Test", "Legal Notices", "Only on Netflix"
    ];

    return (
        <footer className="w-full bg-black text-[#b3b3b3] py-16 px-4 md:px-16 lg:px-24 text-[16px]">
            <div className=" mx-auto pb-20">

                
                <div className="mb-8">
                    <a href="#" className="hover:underline">Questions? Call 000-800-919-1743</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mb-8">
                    {links.map((link, index) => (
                        <div key={index}>
                            <a href="#" className="underline">{link}</a>
                        </div>
                    ))}
                </div>

                {/* Language Selector */}
                <div className="relative mb-6">
                    <div className="relative inline-block">
                        <Globe className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                        <select className=" text-white border border-[#5d5d5d] rounded px-8 py-1.5 appearance-none cursor-pointer hover:bg-white/5 bg-transparent text-sm focus:outline-none focus:ring-1 focus:ring-white">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        {/* Custom Arrow for select (optional, keeping it simple with browser default or custom CSS if needed, but select default is often fine or can be hidden) */}
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </span>
                    </div>
                </div>

                {/* Country */}
                <div className="mb-4 text-[16px]">
                    Netflix India
                </div>
                <p className='text-[14px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="underline cursor-pointer text-blue-600">Learn more.</a></p>
            </div>
        </footer>
    );
};

export default Footer;