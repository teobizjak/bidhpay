import { useEffect, useState } from 'react';
import bidhpayLogo from './assets/bidhpayLogo.png';
import { Icon } from "@iconify/react";

function Nav({ t, i18n }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const languages = [
        { name: 'English', flag: 'circle-flags:gb', code: 'en' },
        { name: 'French', flag: 'circle-flags:fr', code: 'fr' },
        { name: 'Dutch', flag: 'circle-flags:nl', code: 'nl' }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isDropdownOpen && !event.target.closest('.language-dropdown')) {
                setIsDropdownOpen(false);
            }
            if (isMobileDropdownOpen && !event.target.closest('.mobile-nav')) {
                setIsMobileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, isMobileDropdownOpen]);

    return (
        <div className='mobile-nav sticky top-2.5 z-50 '>
            <div className='flex gap-2 text-xl sticky top-0 z-50 max-w-[1100px] mx-auto backdrop-blur-md'>
                <div className={`relative inline-flex flex-1 bg-white/58 border-1 border-white/31 rounded-2xl justify-between pl-4 pr-8 py-2.5 items-center`}>

                    <img src={bidhpayLogo} alt="Bidhpay Logo" className=" h-[46px]" />

                    <div className=' md:inline-flex gap-8 items-center hidden'>
                        <span>About</span>
                        <span>Project</span>
                        <span>Merchants</span>
                        <span>Contact</span>
                    </div>
                    <div className='md:hidden cursor-pointer' onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
                        <Icon height={36} icon="mdi:menu" />
                    </div>
                </div>
                <div className='relative bg-white/58 border-1 border-white/31 rounded-2xl inline-flex items-center px-3 py-2 md:px-0 md:py-0 md:w-[164px] w-[70px] justify-center language-dropdown'>
                    <div
                        className='inline-flex items-center px-2 py-3 gap-3 cursor-pointer md:px-7'
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <span className='hidden md:block'>{selectedLanguage}</span>
                        <span><Icon height={29} icon={languages.find(lang => lang.name === selectedLanguage)?.flag || "circle-flags:gb"} /></span>
                    </div>

                    <div className={`absolute top-full right-0 bg-white/58 border-1 border-white/31   rounded-2xl shadow-lg z-10 md:w-[164px] w-[70px] transition-all duration-300 ease-in-out transform mt-2 ${
                        isDropdownOpen 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                            {languages
                                .filter(language => language.name !== selectedLanguage)
                                .map((language) => (
                                    <div
                                        key={language.code}
                                        className='inline-flex items-center w-full justify-center px-2 py-3 gap-3 hover:bg-gray-100 cursor-pointer   first:rounded-t-2xl last:rounded-b-2xl md:px-7'
                                        onClick={() => {
                                            setSelectedLanguage(language.name);
                                            setIsDropdownOpen(false);
                                            i18n.changeLanguage(language.code);
                                        }}
                                    >
                                        <span className='hidden md:block'>{language.name}</span>
                                        <span><Icon height={29} icon={language.flag} /></span>
                                    </div>
                                ))}
                        </div>
                </div>
            </div>
            
            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden max-w-[1100px] mx-auto transition-all duration-300 ease-in-out transform ${
                isMobileDropdownOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                <div className='bg-white/58 border-1 border-white/31 rounded-2xl mt-2 shadow-lg backdrop-blur-md'>
                    <div className='flex flex-col py-2'>
                        <div className='px-6 py-3 hover:bg-white/30 cursor-pointer transition-colors duration-200'>
                            <span className='text-lg'>About</span>
                        </div>
                        <div className='px-6 py-3 hover:bg-white/30 cursor-pointer transition-colors duration-200'>
                            <span className='text-lg'>Project</span>
                        </div>
                        <div className='px-6 py-3 hover:bg-white/30 cursor-pointer transition-colors duration-200'>
                            <span className='text-lg'>Merchants</span>
                        </div>
                        <div className='px-6 py-3 hover:bg-white/30 cursor-pointer transition-colors duration-200'>
                            <span className='text-lg'>Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav