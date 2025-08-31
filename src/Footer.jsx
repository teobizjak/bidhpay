import React from 'react'
import seeds7 from "./assets/seeds7.png";
import seedapps from "./assets/seedapps.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function Footer({t}) {
  return (
    <div className=' relative  '>
    <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/bg2.png")] bg-cover bg-top bg-no-repeat -z-30'>
        <img src={seeds7} alt="Seeds 6" className=" w-44 mx-auto transform -translate-y-2/5" />
    </div>
    <h3 className='pt-32 text-[28px] md:text-[32px] text-white text-center'>{t("Sign up for newsletter")}</h3>
    <div className='flex flex-col md:flex-row justify-center gap-3.5 mt-9 max-w-80 md:max-w-none mx-auto'>
        <input type="text" name="" id="" className='md:w-full md:max-w-md md:py-3 py-2 md:px-4 px-2 rounded-xl bg-[#0D0F16] border-1 text-white border-white/20' />
        <div className=' font-bold text-base md:text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue rounded-2xl mt-4 md:mt-0'>{t("Become the Core Seed")}</div>
    </div>
    <div className='md:max-w-[1100px] max-w-full px-4 md:px-0 mx-auto flex flex-col md:flex-row justify-between mt-26 text-[#BEBEBE] mb-16 '>
        <img src={seedapps} alt="logo" className=' md:max-h-14 max-h-10 max-w-fit md:mx-0 mx-auto mb-10 md:mb-0' />
        <div className='inline-flex  justify-around items-center md:gap-9 gap-6 [&>*]:hover:text-[#f0f0f0]'>
            <Icon icon="prime:twitter" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="bi:discord" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="cib:github" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="basil:telegram-solid" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />

        </div>
    </div>
    <div className=' h-[1px] md:max-w-[1100px] mx-auto bg-white/18'></div>
    <div className='md:max-w-[1100px] max-w-full mx-auto text-center md:text-left md:flex justify-between py-8 text-[#C0C0C0] text-sm md:text-base'>
        <div className='grid grid-cols-3 space-y-4 md:space-y-0 md:inline-flex md:justify-around md:items-center md:gap-6 gap-3 [&>*]:hover:text-[#f0f0f0]'>
            <Link to="">{t("navAbout")}</Link>
            <Link to="">{t("navProject")}</Link>
            <Link to="">{t("navMerchants")}</Link>
            <Link to="/contact">{t("navContact")}</Link>
            <Link to="/terms">{t("Terms of Service")}</Link>
            <Link to="/privacyPolicy">{t("Privacy Policy")}</Link>
        </div>
        <div className='text-center md:text-left mt-2 md:mt-0 text-[#C0C0C0]/61 md:text-[#C0C0C0]'>
            <span>{t("© 2025 Seedapps. All rights reserved.")}</span>
        </div>
    </div>
</div>
  )
}

export default Footer