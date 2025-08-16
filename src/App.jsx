import { useEffect, useState } from 'react';
import './App.css'
import "./i18n"
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import scrollIcon from './assets/scrollIcon.png';
import { Icon } from '@iconify/react';
import seeds4 from "./assets/seeds4.png";
import seeds6 from "./assets/seeds6.png";
import seeds7 from "./assets/seeds7.png";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  
  return (
    <>
      <div className='relative h-screen'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/image6.png")] bg-cover bg-center bg-no-repeat -z-40'></div>
        <div className='mx-auto max-w-[1100px]  '>
          <Nav t={t} i18n={i18n} />

          {/* Hero Section */}
          <div className=' mt-[78px] px-5'>
            {/* Left Content Area */}
            <div className='flex-1 max-w-2xl'>
              {/* Tagline Badge */}
              <div className='inline-block bg-darkblue text-white text-xl font-semibold px-4 py-1 rounded-[15px] tracking-wider'>
                Bidhpay - every payment matters
              </div>

              {/* Main Heading */}
              <h1 className=' text-[64px] font-bold text-white leading-20 mt-2'>
                Simple payments.<br />
                Powerful meaning.
              </h1>

              {/* Descriptive Paragraph */}
              <p className='text-white text-xl mt-8'>
                BidhPay offers reliable payment terminals at fair prices. But behind that simplicity lies a much bigger story: <br /> A vision where every payment becomes a seed for growth – for your business, your customers, and your community.
              </p>


              {/* Call-to-Action Cards */}
              <div className='mt-8 [&>*]:py-2 [&>*]:text-white [&>*]:rounded-2xl [&>*]:flex [&>*]:items-center [&>*]:gap-3 [&>div>div>div:nth-child(2)]:font-bold [&>div>div>div:nth-child(2)]:text-xl [&>div>div>div:nth-child(1)]:text-[16px]'>
                <div>
                  <span className='text-green-400 text-xl'>🌱</span>
                  <div>
                    <div>Now available</div>
                    <div>Payment terminal launch</div>
                  </div>
                </div>

                <div>
                  <span className='text-green-400 text-xl'>🌱</span>
                  <div>
                    <div>Coming soon</div>
                    <div>Loyalty, cashback, and ethical consumption</div>
                  </div>
                </div>

                <div>
                  <span className='text-green-400 text-xl'>🌱</span>
                  <div>
                    <div>Coming in Q4 2025</div>
                    <div>Full ecosystem launch.</div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center'>
            <div className='mb-2'>
              <img src={scrollIcon} alt="Scroll Icon" className=" w-[50px] animate-bounce text-white" />
            </div>
            <div className='text-white text-sm'>Scroll to learn more</div>
          </div>

        </div>
      </div >

      <div className=' relative -mt-36 pt-36 pb-40'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#11131B] bg-no-repeat -z-50'></div>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/image2.png")] bg-cover bg-top bg-no-repeat  -z-30 '></div>
        <div className='mx-auto max-w-[1100px] px-5'>
          <h1 className='w-fit mx-auto text-white text-[64px] font-bold pt-52'>Every payment is a seed</h1>
          <div className='mx-auto  w-fit bg-[#49C4B1] text-white text-xl font-semibold px-4 py-1 rounded-[15px] mt-6'>
            What happens with every payment?
          </div>
          <div className='flex justify-center items-center mt-10 text-center text-white gap-8 [&>*]:px-10 [&>*]:flex-1 [&>*>*:nth-child(1)]:flex [&>*>*:nth-child(1)]:justify-center [&>*>*:nth-child(1)]:items-center [&>*>*:nth-child(2)]:text-[32px] [&>*>*:nth-child(2)]:font-bold [&>*>*:nth-child(2)]:leading-10 [&>*>*:nth-child(2)]:mt-[22px] [&>*>*:nth-child(3)]:text-[20px] [&>*>*:nth-child(3)]:mt-[27px]'>
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
          <div className=' mt-16 font-bold text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
        </div>
      </div>
      <div className=' relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/image3.png")] bg-cover bg-center bg-no-repeat -z-40'></div>

        <div className='px-5 max-w-[1100px] mx-auto py-32'>
        <h1 className=' text-[64px] font-bold text-white leading-[125%]'>Pay. <br /> Reward. <br /> Uplift.</h1>
        <p className='mt-5 text-xl max-w-96 text-white'>Together, we plant something meaningful – seed by seed.</p>
        <div className=' mt-8 font-bold text-[20px] text-center py-4 px-6 bg-white/61 border-1 border-white/61 backdrop-blur-lg text-darkblue w-fit rounded-2xl'>Become the Core Seed</div>
        </div>
      </div>
      <div className='h-screen'>
        <div className='px-5 max-w-[1100px] mx-auto pt-60 [&>p]:mt-9 [&>p]:text-[20px] [&>p]:text-darkblue [&>p]:max-w-2xl'>
          <div className='w-fit bg-darkblue text-white text-xl font-semibold px-4 py-1 rounded-[15px]'>
            What is Bidhpay
          </div>
          <h1 className='mt-4 text-[64px] font-bold text-darkblue'>Bidhara Payment</h1>
          <p>The name BidhPay is a fusion of two worlds: Bidhara – the Arabic word for seed, a timeless symbol of growth, blessing, and new beginnings – and Payments, the foundation that connects us all.</p>
          <p>Together, they embody what we stand for: at BidhPay, a payment is never just a transaction. It’s a moment of trust. A meaningful act. A contribution to something greater. Our logo, inspired by the revered black cumin seed, carries the values of healing, strength, and protection. It’s more than a symbol. It’s our promise.</p>
          <div className=' mt-10 font-bold text-[20px] text-center py-4 px-6 bg-white border-1 border-white/61 text-darkblue w-fit rounded-2xl'>Become the Core Seed</div>
        </div>

      </div>
      <div className='bg-[#029885] h-screen'>
        <div className='px-5 max-w-[1100px] mx-auto pt-5'>
          <h1 className='mt-6 text-[64px] font-bold text-darkblue'>Our phased launch</h1>
          <p className='mt-9 text-[20px] text-darkblue max-w-2xl'>We’re building an ecosystem that connects merchants and consumers – with mutual benefits, transparency, and shared values. But we’re doing it step by step.</p>
          <div className=' grid-cols-3 grid gap-4 mt-16
          [&>*]:bg-darkblue/37 [&>*]:rounded-2xl [&>*]:px-3 [&>*]:pb-6
          [&>*>*:nth-child(1)]:bg-darkblue [&>*>*:nth-child(1)]:text-white [&>*>*:nth-child(1)]:text-xl [&>*>*:nth-child(1)]:font-bold [&>*>*:nth-child(1)]:px-4 [&>*>*:nth-child(1)]:py-1 [&>*>*:nth-child(1)]:rounded-[15px] [&>*>*:nth-child(1)]:mx-auto [&>*>*:nth-child(1)]:w-full [&>*>*:nth-child(1)]:-translate-y-3 [&>*>*:nth-child(1)]:inline-flex [&>*>*:nth-child(1)]:items-center [&>*>*:nth-child(1)]:gap-2 
          [&>*>h2]:text-white [&>*>h2]:text-4xl [&>*>h2]:font-bold [&>*>h2]:leading-12 
          [&>*>h2>img]:h-5 [&>*>h2>img]:w-5
          [&>*>div:nth-child(n+3)]:flex [&>*>div:nth-child(n+3)]:gap-3 
          [&>*>div:nth-child(3)]:mt-[22px] 
          [&>*>div:nth-child(n+4)]:mt-3 
          [&>*>div:nth-child(n+3)>span]:text-xl [&>*>div:nth-child(n+3)>span]:text-white 
          [&>*:nth-child(1)>div:nth-child(n+3)>*:nth-child(1)]:text-[#6BFFE8] 
          [&>*>div:nth-child(n+3)>*:nth-child(1)]:shrink-0 [&>*>div:nth-child(n+3)>*:nth-child(1)]:h-[26px] [&>*>div:nth-child(n+3)>*:nth-child(1)]:w-[26px] ' >
            <div>
              <div>
                <img src={seeds4} alt="Scroll Icon"  />
                <span>Phase 1 - Now live</span> 
              </div>
              <h2>Payment terminal launch</h2>
              <div className=''>
                <Icon icon="wpf:checkmark"/>
                <span>Full-featured payment terminals</span>
              </div>
              <div className=''>
                <Icon icon="wpf:checkmark"/>
                <span>Competitive transaction rates</span>

              </div>
              <div className=''>
                <Icon icon="wpf:checkmark"  />
                <span>Easy onboarding and local support</span>

              </div>
            </div>
            <div>
              <div>
                <img src={seeds4} alt="Scroll Icon"  />
                Phase 2 - Coming Soon
              </div>
              <h2>Cashback, ethical consumption</h2>
              <div>
                <Icon icon="carbon:ibm-cloud-direct-link-1-connect"  />
                <span>Connect customers to your store</span>
              </div>
              <div>
                <Icon icon="streamline:payment-cash-out-3-remix"  />
                <span>Reward loyalty through automatic cashback</span>

              </div>
              <div>
                <Icon icon="material-symbols:search-insights"  />
                <span>Access your own customer portal with real-time insights</span>

              </div>

            </div>
            <div>
              <div>
                <img src={seeds4} alt="Scroll Icon"  />
                Phase 3 - Coming Soon
              </div>
              <h2>Full ecosystem launch</h2>
              <div>
                <Icon icon="gravity-ui:megaphone"  />
                <span>Marketing tools designed for local business owners</span>
              </div>
             <div>
                <Icon icon="ant-design:heart-outlined"  />
                <span>Integrated Sadaqah feature with every payment</span>

              </div>
              <div>
                <Icon icon="carbon:platforms"  />
                <span>A platform that merges faith, community, and commerce</span>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[url("./assets/image5.png")] bg-cover bg-center bg-no-repeat  pt-24 pb-36'>
        <div className='px-5 max-w-[1100px] mx-auto '>
          <h1 className='text-[64px] font-bold max-w-lg text-white leading-[125%]'>Merchants: <br />
            You are the seed of change
          </h1>
          <p className='text-white text-2xl mt-8 max-w-lg '>
            As a merchant, you’re at the heart of what we’re building. BidhPay isn’t just a payment system – it’s an ecosystem that helps you grow while giving back.
          </p>
          <div className='mt-10 bg-darkblue/68 rounded-2xl p-6 w-fit max-w-lg'>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>An effortless loyalty program</span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>A powerful referral structure – for both customers and merchants </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>Marketing tools tailored to small and local businesses </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>Halal-friendly transactions and automatic Sadaqah integration </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>A merchant portal with real-time data and insights </span>

            </div>
            <div className='flex mt-3 gap-3'>
              <Icon icon="wpf:checkmark" width="26" height="26" className='text-[#6BFFE8] shrink-0' />
              <span className='text-xl text-white'>A meaningful role in a system that puts people and purpose first </span>

            </div>
          </div>
        </div>
      </div>
      <div className=' relative pb-32'>
      <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/bg1.png")] bg-cover bg-bottom bg-no-repeat -z-30'></div>
        <div className='px-5 max-w-[1100px] mx-auto pt-24 text-center'>
          <h1 className='text-[64px] text-white leading-[125%]'>
            Join the early phase and <br />
            <b>become a Core Seed</b>
          </h1>
          <p className='text-white text-2xl mt-9'>
            We’re kicking off with a limited group of visionary merchants. Those who join now become our Core Seeds – pioneers who help plant the very first roots of this ecosystem.
          </p>
          <p className='text-white text-2xl mt-16'>As a Core Seed, you receive exclusive, lifetime benefits:</p>
          <div className='mt-10 grid grid-cols-5 gap-8'>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-2xl mt-5'>Tier 3 <br /> status</h2>
              <p className='text-white text-[20px] mt-5'>
                in our 5-level referral system, from day one
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-2xl mt-5'>Higher commission</h2>
              <p className='text-white text-[20px] mt-5'>
                Higher commission on referrals for life
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-2xl mt-5'>Lower discount margins</h2>
              <p className='text-white text-[20px] mt-5'>
                when serving registered customers
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-2xl mt-5'>Ambassador <br /> recognition</h2>
              <p className='text-white text-[20px] mt-5'>
                within the BidhPay network
              </p>
            </div>
            <div className="">
              <img src={seeds6} alt="Seeds 6" className=" w-full px-6" />
              <h2 className='text-white text-2xl mt-5'>Priority <br />
                access</h2>
              <p className='text-white text-[20px] mt-5'>
                to new features
                and early betas
              </p>
            </div>
          </div>
          <p className='text-white text-2xl mt-20 max-w-3/4 mx-auto'>
            This status is only available during the early phase. Once the network opens to the public, this offer is gone.
          </p>
          <div className=' mt-16 font-bold text-[20px] text-center py-4 px-6 bg-radial from-[#6BFFE8] to-[#49C4B1] border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
          <p className='text-white text-2xl mt-16'>Our referral structure is designed to reward performance – but most merchants start at Tier 1. As a Core Seed, you begin two levels higher and stay there permanently. No conditions. No extra effort.</p>
        </div>
      </div>
      <div className='relative text-darkblue -mt-72 pt-72 -mb-72 pb-72'>
      <div className='absolute top-0 left-0 w-full h-full bg-radial from-[#FFFFFF] via-85% via-[#CCCCCC] to-[#999999] -z-40'></div>
        <div className='px-5 max-w-[1100px] mx-auto pt-20 text-center'>
          <h1 className='text-[64px] leading-[125%]'>Ready to become more <br /> than just a shopkeeper?</h1>
          <p className=' text-2xl mt-9 max-w-[812px] mx-auto'>Join the Core Seeds and help us grow something powerful from the ground up.</p>
          <p className=' text-2xl mt-9'>Apply for your terminal or contact us for more information.</p>
          <div className='grid grid-cols-2 max-w-md mx-auto gap-4 mt-10 mb-32'>
            <div className='font-bold text-[20px] text-center py-3 px-6 bg-darkblue text-white w-full border-1 border-white/61 rounded-xl mx-auto'>Apply Now</div>
            <div className=' font-bold text-[20px] text-center py-3 px-6 bg-darkblue text-white w-full border-1 border-white/61 rounded-xl mx-auto'>Contact Us</div>
          </div>
        </div>
      </div>

      <div className=' relative h-[100vh] '>
        <div className='absolute top-0 left-0 w-full h-full bg-[url("./assets/bg2.png")] bg-cover bg-top bg-no-repeat -z-30'>
        <img src={seeds7 } alt="Seeds 6" className=" w-44 mx-auto transform -translate-y-2/5" />
        </div>
      </div>





    </>
  )
}

export default App
