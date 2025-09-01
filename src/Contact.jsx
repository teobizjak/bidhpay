import React, { useEffect } from 'react'
import Footer from './Footer'
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div className='-mt-52 md:mt-24'>
            <div className=' absolute top-0 left-0 h-[190vh] md:h-[120vh] w-full bg-radial from-white to-[#999999] -z-50' />
            <div className='- mb-36 max-w-[1100px] mx-auto px-8'>
                
                <h1 className=' text-[40px] md:text-[64px] text-center '>
                    Contact Us
                </h1>
                

                <div className=' mt-8 flex flex-col md:flex-row [&>*]:grow [&>*]:bg-[#0D0F16]/41 [&>*]:rounded-lg [&>*]:px-4 [&>*]:py-2 text-white gap-4 justify-center'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className=' mt-4 flex [&>*]:grow [&>*]:bg-[#0D0F16]/41 [&>*]:rounded-lg [&>*]:px-4 [&>*]:py-2 text-white gap-4 justify-center'>
                    <textarea rows={6} />
                </div>
                <div className=' mt-16 font-bold text-base md:text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
                

            </div>
<Footer t={t}/>

            </div>

        </>

    )
}

export default Contact