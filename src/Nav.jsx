import { useEffect, useState } from 'react';
import bidhpayLogo from './assets/bidhpayLogo.png';
import { Icon } from "@iconify/react";

function Nav({ t, i18n }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

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
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);
    return (
        <div className='flex gap-2 text-xl pt-12'>
            <div className='inline-flex flex-1 bg-white/58 border-1 border-white/31 rounded-2xl justify-between pl-4 pr-8 py-2.5'>

                <img src={bidhpayLogo} alt="Bidhpay Logo" className=" h-[46px]" />

                <div className=' inline-flex gap-8 items-center'>
                    <span>About</span>
                    <span>Project</span>
                    <span>Merchants</span>
                    <span>Contact</span>
                </div>
            </div>
            <div className='relative bg-white/58 border-1 border-white/31 rounded-2xl inline-flex items-center min-w-[150px] justify-center language-dropdown'>
                <div
                    className='inline-flex items-center px-7 py-3 gap-3 cursor-pointer'
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span>{selectedLanguage}</span>
                    <span><Icon height={29} icon={languages.find(lang => lang.name === selectedLanguage)?.flag || "circle-flags:gb"} /></span>
                </div>

                <div className={`absolute top-full right-0 bg-white/58 border-1 border-white/31  rounded-2xl shadow-lg w-full z-10 transition-all duration-300 ease-in-out transform mt-2 ${
                    isDropdownOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                        {languages
                            .filter(language => language.name !== selectedLanguage)
                            .map((language) => (
                                <div
                                    key={language.code}
                                    className='flex items-center justify-between px-7 py-3 gap-3 hover:bg-gray-100 cursor-pointer   first:rounded-t-2xl last:rounded-b-2xl'
                                    onClick={() => {
                                        setSelectedLanguage(language.name);
                                        setIsDropdownOpen(false);
                                        i18n.changeLanguage(language.code);
                                    }}
                                >
                                    <span>{language.name}</span>
                                    <span><Icon height={29} icon={language.flag} /></span>
                                </div>
                            ))}
                    </div>
            </div>
        </div>
    )
}

export default Nav