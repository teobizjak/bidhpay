import { useEffect, useState } from 'react';
import './App.css'
import "./i18n"
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import scrollIcon from './assets/scrollIcon.png';
import { Icon } from '@iconify/react';
import seeds1 from "./assets/seeds1.svg";
import seeds2 from "./assets/seeds2.svg";
import seeds3 from "./assets/seeds3.svg";
import seeds4 from "./assets/seeds4.png";
import seeds6 from "./assets/seeds6.png";
import seeds7 from "./assets/seeds7.png";
import seedapps from "./assets/seedapps.png";
import rose from "./assets/rose.png";
import lineTop from "./assets/lineTop.svg";
import lineBottom from "./assets/lineBottom.svg";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);


  return (
    <>
    <div className='pt-12'></div>
       <Nav t={t} i18n={i18n} />
    
      <div className='relative min-h-screen -mt-52'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/image6.png")] bg-cover bg-center bg-no-repeat -z-40'></div>
        <div className='mx-auto max-w-[1100px]  '>
       

          {/* Hero Section */}
          <div className=' mt-[78px] px-5'>
            {/* Left Content Area */}
            <div className='flex-1 max-w-2xl'>
              {/* Tagline Badge */}
              <div className='inline-block bg-darkblue text-white text-sm md:text-xl font-semibold mt-48 px-4 py-1 rounded-[15px] tracking-wider'>
                Bidhpay - every payment matters
              </div>

              {/* Main Heading */}
              <h1 className=' text-6xl md:text-[64px] font-bold text-white md:leading-20 mt-2'>
                Simple payments.<br />
                Powerful meaning.
              </h1>

              {/* Descriptive Paragraph */}
              <p className='text-white text-base md:text-xl mt-8'>
                BidhPay offers reliable payment terminals at fair prices. But behind that simplicity lies a much bigger story: <br /> A vision where every payment becomes a seed for growth – for your business, your customers, and your community.
              </p>


              {/* Call-to-Action Cards */}
              <div className='mt-8 [&>*]:py-2 [&>*]:text-white [&>*]:rounded-2xl [&>*]:bg-[#1f1c2a]/41 [&>*]:mt-2 [&>*]:max-w-96 [&>*]:px-4 [&>*]:backdrop-blur-md [&>*]:flex [&>*]:items-center [&>*]:gap-3 [&>div>div>div:nth-child(2)]:font-bold [&>div>div>div:nth-child(2)]:md:text-xl [&>div>div>div:nth-child(2)]:text-sm [&>div>div>div:nth-child(1)]:text-xs [&>div>div>div:nth-child(1)]:md:text-base'>
                <div>
                  <img src={seeds1} alt="Scroll Icon" className=" h-8 md:h-10" />
                  <div>
                    <div>Now available</div>
                    <div>Payment terminal launch</div>
                  </div>
                </div>

                <div>
                  <img src={seeds2} alt="Scroll Icon" className=" h-8 md:h-10" />
                  <div>
                    <div>Coming soon</div>
                    <div>Loyalty, cashback, and ethical consumption</div>
                  </div>
                </div>

                <div>
                  <img src={seeds3} alt="Scroll Icon" className=" h-8 md:h-10" />
                  <div>
                    <div>Coming in Q4 2025</div>
                    <div>Full ecosystem launch.</div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Scroll Indicator */}
          <div className='absolute hidden bottom-8 left-1/2 transform -translate-x-1/2 text-center flex-col items-center md:flex'>

            <div className='mb-2'>

              <img src={scrollIcon} alt="Scroll Icon" className=" w-[50px] animate-bounce text-white" />
            </div>
            <div className='text-white text-sm hidden md:block'>Scroll to learn more</div>
          
          </div>

        </div>
      </div >

      <div className=' relative -mt-36 pt-36 pb-40'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#11131B] bg-no-repeat -z-50'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/image2.png")] bg-cover bg-top bg-no-repeat  -z-30 '></div>
        <div className='mx-auto max-w-[1100px] px-5'>
          <h1 className='w-fit mx-auto text-white text-6xl md:text-[64px] font-bold pt-52'>Every payment is a seed</h1>
          <div className='mx-auto  w-fit bg-[#49C4B1] text-white text-sm md:text-xl font-semibold px-4 py-1 rounded-[15px] mt-6'>
            What happens with every payment?
          </div>
          <div className='md:flex justify-center items-center mt-10 text-center text-white gap-8 [&>*]:mt-8 [&>*]:md:mt-0 [&>*]:px-10 [&>*]:flex-1 [&>*>*:nth-child(1)]:flex [&>*>*:nth-child(1)]:justify-center [&>*>*:nth-child(1)]:items-center [&>*>*:nth-child(2)]:md:text-[32px] [&>*>*:nth-child(2)]:text-[24px] [&>*>*:nth-child(2)]:font-bold [&>*>*:nth-child(2)]:leading-10 [&>*>*:nth-child(2)]:mt-[22px] [&>*>*:nth-child(3)]:md:text-[20px] [&>*>*:nth-child(3)]:md:mt-[27px]'>
            <div>
              <div><Icon icon="hugeicons:plant-01" width="78" height="78" /></div>
              <div>Seeds are planted</div>
              <div>Cashback rewards for your customers</div>
            </div>
            <div>
              <div><Icon icon="solar:hand-heart-broken" width="78" height="78" /></div>
              <div>Sadaqah is given</div>
              <div>Automatic charitable giving, made effortless</div>
            </div>
            <div>
              <div><Icon icon="material-symbols-light:handshake-outline" width="78" height="78" /></div>
              <div>Relationships grow</div>
              <div>Merchant to customer and both to community</div>
            </div>
          </div>
          <div className=' mt-16 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
        </div>
      </div>
      <div className=' relative overflow-hidden'>
        <img src={lineTop} alt="Scroll Icon" className=" transform -translate-y-1/2 w-full mx-auto absolute top-0 left-0" />
        <div className='absolute top-0 left-0 w-[100svw] h-[100svh] bg-[url("./assets/image3.png")] bg-fixed bg-cover bg-center bg-no-repeat -z-40'></div>

        <div className='px-5 max-w-[1100px] mx-auto py-32'>
          <h1 className=' text-6xl md:text-[64px] font-bold text-white md:leading-[125%]'>Pay. <br /> Reward. <br /> Uplift.</h1>
          <p className='mt-5 md:text-xl text-base max-w-96 text-white'>Together, we plant something meaningful – seed by seed.</p>
          <div className=' mt-8 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-white/61 border-1 border-white/61 backdrop-blur-lg text-darkblue w-fit rounded-2xl'>Become the Core Seed</div>
        </div>
        <img src={lineBottom} alt="Scroll Icon" className=" transform translate-y-1/2 w-full mx-auto absolute bottom-0 left-0" />
      </div>
      <div className=' relative overflow-hidden pb-24 md:pb-0 '>
        <div className='absolute top-0 left-0 w-full h-full bg-[#5AEDDB] -z-40'></div>
        <div className='absolute bottom-1/5 left-0 w-full h-full bg-radial from-[#008B78] via-70% via-[#008B78]/0  to-[#008B78]/0 -z-30 transform -translate-x-1/2 translate-y-1/2 '></div>
        <div className='absolute bottom-1/5 right-0 w-full h-full bg-radial from-[#008B78] via-70% via-[#008B78]/0  to-[#008B78]/0 -z-30 transform translate-x-1/2 translate-y-1/2'></div>
        <div className='min-h-screen relative '>
          <img src={rose} alt="Scroll Icon" className=" md:block hidden transform translate-x-1/7 absolute right-0 top-1/2 -translate-y-1/2 -z-40" />
          <div className='px-5 max-w-[1100px] mx-auto pt-60 [&>p]:mt-9 [&>p]:md:text-[20px] [&>p]:text-base [&>p]:text-darkblue [&>p]:max-w-2xl'>
            <div className='w-fit bg-darkblue text-white md:text-xl text-base font-semibold px-4 py-1 rounded-[15px]'>
              What is Bidhpay
            </div>
            <h1 className='mt-4 text-6xl md:text-[64px] font-bold text-darkblue'>Bidhara Payment</h1>
            <p>The name BidhPay is a fusion of two worlds: Bidhara – the Arabic word for seed, a timeless symbol of growth, blessing, and new beginnings – and Payments, the foundation that connects us all.</p>
            <p>Together, they embody what we stand for: at BidhPay, a payment is never just a transaction. It's a moment of trust. A meaningful act. A contribution to something greater. Our logo, inspired by the revered black cumin seed, carries the values of healing, strength, and protection. It's more than a symbol. It's our promise.</p>
            <div className=' mt-10 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-radial from-white/42 to-[#efefef]/57  border-1 border-white/61 text-darkblue w-fit rounded-2xl'>Become the Core Seed</div>
          </div>

        </div>
        <div className=' min-h-screen'>
          <div className='px-5 max-w-[1100px] mx-auto pt-5'>
            <h1 className='mt-6 text-6xl md:text-[64px] font-bold text-darkblue'>Our phased launch</h1>
            <p className='mt-9 md:text-[20px] text-base text-darkblue max-w-2xl'>We're building an ecosystem that connects merchants and consumers – with mutual benefits, transparency, and shared values. But we're doing it step by step.</p>
            <div className=' text-white grid-cols-1 md:grid-cols-3 grid gap-4 mt-16
          [&>*]:bg-darkblue/37 [&>*]:rounded-2xl [&>*]:px-3 [&>*]:pb-6
          [&>*>*:nth-child(1)]:bg-darkblue [&>*>*:nth-child(1)]:text-white [&>*>*:nth-child(1)]:text-lg [&>*>*:nth-child(1)]:font-bold [&>*>*:nth-child(1)]:px-4 [&>*>*:nth-child(1)]:py-1 [&>*>*:nth-child(1)]:rounded-[15px] [&>*>*:nth-child(1)]:mx-auto [&>*>*:nth-child(1)]:w-full [&>*>*:nth-child(1)]:-translate-y-3 [&>*>*:nth-child(1)]:inline-flex [&>*>*:nth-child(1)]:items-center [&>*>*:nth-child(1)]:gap-2 
          [&>*>h2]:text-white [&>*>h2]:text-3xl [&>*>h2]:font-bold [&>*>h2]:leading-12
          [&>*>h2>img]:h-5 [&>*>h2>img]:w-5
          [&>*>div:nth-child(n+3)]:flex [&>*>div:nth-child(n+3)]:gap-3 
          [&>*>div:nth-child(3)]:mt-[22px] 
          [&>*>div:nth-child(n+4)]:mt-3 
          [&>*>div:nth-child(n+3)>span]:md:text-xl [&>*>div:nth-child(n+3)>span]:text-base 
          [&>*:nth-child(1)>div:nth-child(n+3)>*:nth-child(1)]:text-[#6BFFE8] 
          [&>*>div:nth-child(n+3)>*:nth-child(1)]:shrink-0 [&>*>div:nth-child(n+3)>*:nth-child(1)]:h-[26px] [&>*>div:nth-child(n+3)>*:nth-child(1)]:md:w-[26px] [&>*>div:nth-child(n+3)>*:nth-child(1)]:w-[20px] [&>*>div:nth-child(n+3)>*:nth-child(1)]:text-darkblue' >
              <div>
                <div>
                  <img src={seeds4} alt="Scroll Icon" />
                  <span>Phase 1 - Now live</span>
                </div>
                <h2>Payment terminal launch</h2>
                <div className=''>
                  <Icon icon="wpf:checkmark" />
                  <span>Full-featured payment terminals</span>
                </div>
                <div className=''>
                  <Icon icon="wpf:checkmark" />
                  <span>Competitive transaction rates</span>

                </div>
                <div className=''>
                  <Icon icon="wpf:checkmark" />
                  <span>Easy onboarding and local support</span>

                </div>
              </div>
              <div>
                <div>
                  <img src={seeds4} alt="Scroll Icon" />
                  Phase 2 - Coming Soon
                </div>
                <h2>Cashback, ethical consumption</h2>
                <div>
                  <Icon icon="carbon:ibm-cloud-direct-link-1-connect" />
                  <span>Connect customers to your store</span>
                </div>
                <div>
                  <Icon icon="streamline:payment-cash-out-3-remix" />
                  <span>Reward loyalty through automatic cashback</span>

                </div>
                <div>
                  <Icon icon="material-symbols:search-insights" />
                  <span>Access your own customer portal with real-time insights</span>

                </div>

              </div>
              <div>
                <div>
                  <img src={seeds4} alt="Scroll Icon" />
                  Phase 3 - Coming Soon
                </div>
                <h2>Full ecosystem launch</h2>
                <div>
                  <Icon icon="gravity-ui:megaphone" />
                  <span>Marketing tools designed for local business owners</span>
                </div>
                <div>
                  <Icon icon="ant-design:heart-outlined" />
                  <span>Integrated Sadaqah feature with every payment</span>

                </div>
                <div>
                  <Icon icon="carbon:platforms" />
                  <span>A platform that merges faith, community, and commerce</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[url("./assets/image5.png")] bg-cover bg-center bg-no-repeat pt-24 pb-36 relative'>
        <img src={lineTop} alt="Scroll Icon" className=" transform -translate-y-1/2 w-full mx-auto absolute top-0 left-0" />
        <img src={lineBottom} alt="Scroll Icon" className=" transform translate-y-1/2 w-full mx-auto absolute bottom-0 left-0" />
        <div className='px-5 max-w-[1100px] mx-auto '>
          <h1 className='text-6xl md:text-[64px] font-bold max-w-lg text-white leading-[125%]'>Merchants: <br />
            You are the seed of change
          </h1>
          <p className='text-white text-xl md:text-2xl mt-8 max-w-lg '>
            As a merchant, you're at the heart of what we're building. BidhPay isn't just a payment system – it's an ecosystem that helps you grow while giving back.
          </p>
          <div className='mt-10 bg-darkblue/68 rounded-2xl p-6 w-fit max-w-lg [&>*]:mt-3 [&>div]:flex [&>div]:gap-3 [&>div]:mt-3 [&>div]:text-lg [&>div]:md:text-xl [&>div]:text-white'>
            <div className=''>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className=''>An effortless loyalty program</span>

            </div>
            <div className=''>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-lg md:text-xl text-white'>A powerful referral structure – for both customers and merchants </span>

            </div>
            <div className=''>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className=''>Marketing tools tailored to small and local businesses </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className=''>Halal-friendly transactions and automatic Sadaqah integration </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className=''>A merchant portal with real-time data and insights </span>

            </div>
            <div className=''>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-lg md:text-xl text-white'>A meaningful role in a system that puts people and purpose first </span>

            </div>
          </div>
        </div>
      </div>
      <div className=' relative pb-32'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/bg1.png")] bg-cover bg-bottom bg-no-repeat -z-30'></div>
        <div className='px-5 max-w-[1100px] mx-auto pt-24 text-center'>
          <h1 className='text-5xl md:text-[64px] text-white leading-[125%]'>
            Join the early phase and <br />
            <b>become a Core Seed</b>
          </h1>
          <p className='text-white text-xl md:text-2xl mt-9'>
            We're kicking off with a limited group of visionary merchants. Those who join now become our Core Seeds – pioneers who help plant the very first roots of this ecosystem.
          </p>
          <p className='text-white text-xl md:text-2xl mt-16'>As a Core Seed, you receive exclusive, lifetime benefits:</p>
          <div className='mt-10 grid md:grid-cols-5 grid-cols-2 gap-8'>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-xl md:text-2xl mt-5'>Tier 3 <br /> status</h2>
              <p className='text-white text-base md:text-[20px] mt-5'>
                in our 5-level referral system, from day one
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-xl md:text-2xl mt-5'>Higher commission</h2>
              <p className='text-white text-base md:text-[20px] mt-5'>
                Higher commission on referrals for life
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-xl md:text-2xl mt-5'>Lower discount margins</h2>
              <p className='text-white text-base md:text-[20px] mt-5'>
                when serving registered customers
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-xl md:text-2xl mt-5'>Ambassador <br /> recognition</h2>
              <p className='text-white text-base md:text-[20px] mt-5'>
                within the BidhPay network
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-xl md:text-2xl mt-5'>Priority <br />
                access</h2>
              <p className='text-white text-base md:text-[20px] mt-5'>
                to new features
                and early betas
              </p>
            </div>
          </div>
          <p className='text-white text-xl md:text-2xl mt-20 max-w-3/4 mx-auto'>
            This status is only available during the early phase. Once the network opens to the public, this offer is gone.
          </p>
          <div className=' mt-16 font-bold text-base md:text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
          <p className='text-white text-xl md:text-2xl mt-16'>Our referral structure is designed to reward performance – but most merchants start at Tier 1. As a Core Seed, you begin two levels higher and stay there permanently. No conditions. No extra effort.</p>
        </div>
      </div>
      <div className='relative text-darkblue -mt-72 pt-72 -mb-72 pb-72'>
        <div className='absolute top-0 left-0 w-full h-full bg-radial from-[#FFFFFF] via-85% via-[#CCCCCC] to-[#999999] -z-40'></div>
        <div className='px-5 max-w-[1100px] mx-auto pt-20 text-center'>
          <h1 className='text-5xl md:text-[64px] leading-[125%]'>Ready to become more <br /> than just a shopkeeper?</h1>
          <p className=' text-xl md:text-2xl mt-9 max-w-[812px] mx-auto'>Join the Core Seeds and help us grow something powerful from the ground up.</p>
          <p className=' text-xl md:text-2xl mt-9'>Apply for your terminal or contact us for more information.</p>
          <div className='grid grid-cols-2 max-w-md mx-auto gap-4 mt-10 mb-32'>
            <div className='font-bold text-base md:text-[20px] text-center py-3 px-6 bg-darkblue text-white w-full border-1 border-white/61 rounded-xl mx-auto'>Apply Now</div>
            <div className=' font-bold text-base md:text-[20px] text-center py-3 px-6 bg-darkblue text-white w-full border-1 border-white/61 rounded-xl mx-auto'>Contact Us</div>
          </div>
        </div>
      </div>

      <div className=' relative '>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/bg2.png")] bg-cover bg-top bg-no-repeat -z-30'>
          <img src={seeds7} alt="Seeds 6" className=" w-44 mx-auto transform -translate-y-2/5" />
        </div>
        <h3 className='pt-32 text-[28px] md:text-[32px] text-white text-center'>Sign up for newsletter</h3>
        <div className='flex flex-col md:flex-row justify-center gap-3.5 mt-9 max-w-80 md:max-w-none mx-auto'>
          <input type="text" name="" id="" className='md:w-full md:max-w-md md:py-3 py-2 md:px-4 px-2 rounded-xl bg-[#0D0F16] border-1 text-white border-white/20' />
          <div className=' font-bold text-base md:text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue rounded-2xl mt-4 md:mt-0'>Become the Core Seed</div>
        </div>
        <div className='md:max-w-[1100px] max-w-full px-4 md:px-0 mx-auto flex justify-between mt-26 text-[#BEBEBE] mb-16'>
          <img src={seedapps} alt="logo" className=' md:max-h-14 max-h-10' />
          <div className='inline-flex  justify-around items-center md:gap-9 gap-6'>
            <Icon icon="prime:twitter" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="bi:discord" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="cib:github" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />
            <Icon icon="basil:telegram-solid" className=' md:h-[56px] md:w-[56px] h-[26px] w-[26px]' />

          </div>
        </div>
        <div className=' h-[1px] w-full bg-white/18'></div>
        <div className='md:max-w-[1100px] max-w-full mx-auto text-center md:text-left md:flex justify-between py-8 text-[#C0C0C0] text-sm md:text-base'>
          <div className='inline-flex justify-around items-center md:gap-6 gap-3'>
            <a href="">About</a>
            <a href="">Project</a>
            <a href="">Merchants</a>
            <a href="">Contact</a>
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className='text-center md:text-left mt-2 md:mt-0'>
            <span>© 2025 Seedapps. All rights reserved.</span>
          </div>
        </div>
      </div>





    </>
  )
}

export default App
