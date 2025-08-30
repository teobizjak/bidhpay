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

import rose from "./assets/rose.png";
import lineTop from "./assets/lineTop.svg";
import mobileTop from "./assets/mobileBottom.png";
import lineBottom from "./assets/lineBottom.svg";
import { motion } from "framer-motion";
import Footer from './Footer';

function Home() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, []);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 1500); // Change card every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const cardVariants = {
        active: {
            scale: 1.10,

            transition: { duration: 0.5, delay: 0.5 }
        },
        inactive: {
            scale: 1,

            transition: { duration: 0.5, delay: 0.5 }
        }
    };


    return (
        <>


            <div className='relative min-h-[106svh] -mt-52'>
                <div className='absolute top-0 left-0 w-full min-h-full bg-[url("./assets/image6.png")] bg-cover bg-center bg-no-repeat -z-40'></div>
                <div className='mx-auto max-w-[1100px] h-screen  '>


                    {/* Hero Section */}
                    <div className=' -mt-[325px] md:mt-[78px] px-5 h-screen'>
                        {/* Left Content Area */}
                        <div className='flex-1 max-w-2xl md:flex md:flex-col md:justify-center h-full'>
                            {/* Tagline Badge */}
                            <div className='inline-block bg-darkblue text-white text-sm md:text-xl font-semibold w-fit mt-48 px-4 py-1 rounded-[15px] tracking-wider'>
                                Bidhpay - every payment matters
                            </div>

                            {/* Main Heading */}
                            <h1 className=' text-[40px] md:text-[64px] font-bold text-white md:leading-20 mt-2 text-center md:text-left'>
                                Simple payments.<br />
                                Powerful meaning.
                            </h1>

                            {/* Descriptive Paragraph */}
                            <p className='text-white text-base md:text-xl mt-8'>
                                BidhPay offers reliable payment terminals at fair prices. But behind that simplicity lies a much bigger story: <br /> A vision where every payment becomes a seed for growth – for your business, your customers, and your community.
                            </p>


                            {/* Call-to-Action Cards */}
                            <div className='mt-8 [&>*]:py-2 [&>*]:text-white [&>*]:rounded-2xl [&>*]:bg-[#1f1c2a]/41 [&>*]:mt-2 [&>*]:max-w-96 [&>*]:px-4 [&>*]:backdrop-blur-md [&>*]:flex [&>*]:items-center [&>*]:gap-3 [&>div>div>div:nth-child(2)]:font-bold [&>div>div>div:nth-child(2)]:md:text-xl [&>div>div>div:nth-child(2)]:text-sm [&>div>div>div:nth-child(1)]:text-xs [&>div>div>div:nth-child(1)]:md:text-base pb-16'>
                                <motion.div
                                    variants={cardVariants}
                                    animate={activeIndex === 0 ? "active" : "inactive"}
                                >
                                    <img src={seeds1} alt="Payment Icon" className="h-8 md:h-10" />
                                    <div>
                                        <div>Now available</div>
                                        <div>Payment terminal launch</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={cardVariants}
                                    animate={activeIndex === 1 ? "active" : "inactive"}
                                >
                                    <img src={seeds2} alt="Loyalty Icon" className="h-8 md:h-10" />
                                    <div>
                                        <div>Coming soon</div>
                                        <div>Loyalty, cashback, and ethical consumption</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={cardVariants}
                                    animate={activeIndex === 2 ? "active" : "inactive"}
                                >
                                    <img src={seeds3} alt="Ecosystem Icon" className="h-8 md:h-10" />
                                    <div>
                                        <div>Coming in Q4 2025</div>
                                        <div>Full ecosystem launch.</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>


                    </div>

                    {/* Scroll Indicator */}
                    <div className='absolute top-0 left-0 w-full h-screen -translate-x-1'>
                        <div className='absolute hidden bottom-16 left-1/2 transform -translate-x-1/2 text-center flex-col items-center md:flex'>

                            <div className='mb-2'>

                                <img src={scrollIcon} alt="Scroll Icon" className=" w-[50px] animate-bounce text-white" />
                            </div>
                            <div className='text-white text-xl font-bold hidden md:block'>Scroll to learn more</div>

                        </div>
                    </div>

                </div>
            </div >

            <div className=' relative -mt-10 md:pt-36 pb-40 overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-full bg-[#11131B] bg-no-repeat -z-50'></div>
                <div className='absolute top-0 left-0 translate-x-1 w-full h-full md:bg-[url("./assets/image2.png")] bg-cover bg-no-repeat -z-30 '></div>
                <div className='absolute top-0 left-0 translate-x-1 w-full h-full bg-[url("./assets/mobileImg2.png")] md:hidden bg-top bg-no-repeat -z-30 bg-cover '></div>
                <div className='mx-auto max-w-[1100px] px-5'>
                    <h1 className='w-fit mx-auto text-darkblue text-[40px] text-center md:text-left md:text-[64px] font-bold pt-52'>Every payment is a seed</h1>
                    <div className='mx-auto  w-fit bg-darkblue text-white text-sm md:text-xl font-semibold px-4 py-1 rounded-[15px] mt-6'>
                        What happens with every payment?
                    </div>
                    <div className='md:flex justify-center items-center mt-10 text-center text-darkblue gap-8 [&>*]:mt-16 [&>*]:md:mt-0 [&>*]:px-10 [&>*]:flex-1 [&>*>*:nth-child(1)]:flex [&>*>*:nth-child(1)]:justify-center [&>*>*:nth-child(1)]:items-center [&>*>*:nth-child(2)]:md:text-[32px] [&>*>*:nth-child(2)]:text-[24px] [&>*>*:nth-child(2)]:font-bold [&>*>*:nth-child(2)]:leading-10 [&>*>*:nth-child(2)]:mt-[22px] [&>*>*:nth-child(3)]:md:text-[20px] [&>*>*:nth-child(3)]:md:mt-[27px]'>
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
                    <div className=' mt-16 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-radial from-[#FFFFFF]/42 to-[#EFEFEF]/57 border-1 border-white/61 text-darkblue w-fit mx-auto rounded-2xl'>Become the Core Seed</div>
                </div>
            </div>
            <div className=' relative'>
                <img src={lineTop} alt="Scroll Icon" className=" transform -translate-y-1/2 w-full mx-auto absolute top-0 left-0" />
                <div className=' hidden md:block absolute top-0 left-0 w-full h-full bg-[url("./assets/image3.png")] bg-fixed bg-cover bg-center bg-no-repeat -z-40'></div>
                <div className=' block md:hidden absolute top-0 left-0 w-full h-full bg-[url("./assets/mobileImg3.png")] bg-cover bg-center bg-no-repeat -z-40'></div>

                <div className='px-5 max-w-[1100px] mx-auto py-32'>
                    <h1 className=' text-[40px] text-center md:text-left md:text-[64px] font-bold text-white md:leading-[125%]'>Pay. <br /> Reward. <br /> Uplift.</h1>
                    <p className='mt-5 md:text-xl text-base max-w-96 text-white text-center md:text-left'>Together, we plant something meaningful – seed by seed.</p>
                    <div className=' mt-8 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-white/61 border-1 border-white/61 backdrop-blur-lg text-darkblue w-fit rounded-2xl mx-auto md:mx-0'>Become the Core Seed</div>
                </div>
                <img src={lineBottom} alt="Scroll Icon" className=" hidden md:block transform translate-y-1/2 w-full mx-auto absolute bottom-0 left-0 z-50" />
                <img src={mobileTop} alt="Scroll Icon" className=" block md:hidden transform translate-y-1/2 w-[1800px] mx-auto absolute bottom-0 left-0 z-50" />

            </div>
            <div className=' relative overflow-hidden pb-24 md:pb-0 '>
                <div className='absolute top-0 left-0 w-full h-full bg-[#5AEDDB] -z-40'></div>
                <div className='absolute bottom-1/5 left-0 w-full h-full bg-radial from-[#008B78] via-70% via-[#008B78]/0  to-[#008B78]/0 -z-30 transform -translate-x-1/2 translate-y-1/2 '></div>
                <div className='absolute bottom-1/5 right-0 w-full h-full bg-radial from-[#008B78] via-70% via-[#008B78]/0  to-[#008B78]/0 -z-30 transform translate-x-1/2 translate-y-1/2'></div>
                <div className=' relative '>
                    <img src={rose} alt="Scroll Icon" className=" md:block hidden transform translate-x-1/7 absolute right-0 top-0  -translate-y-1 -z-40" />
                    <div className='px-5 max-w-[1100px] mx-auto pt-40 [&>p]:mt-8 [&>p]:md:text-[20px] [&>p]:text-base [&>p]:text-darkblue [&>p]:max-w-2xl -z-40'>
                        <div className='w-fit bg-darkblue text-white md:text-xl text-base mx-auto font-semibold md:mx-0 px-4 py-1 rounded-[15px]'>
                            What is Bidhpay
                        </div>
                        <h1 className='mt-4 text-[40px]  md:text-[64px] font-bold text-darkblue text-center md:text-left'>Bidhara Payment</h1>
                        <p>The name BidhPay is a fusion of two worlds: Bidhara – the Arabic word for seed, a timeless symbol of growth, blessing, and new beginnings – and Payments, the foundation that connects us all.</p>
                        <p>Together, they embody what we stand for: at BidhPay, a payment is never just a transaction. It's a moment of trust. A meaningful act. A contribution to something greater. Our logo, inspired by the revered black cumin seed, carries the values of healing, strength, and protection. It's more than a symbol. It's our promise.</p>
                        <div className=' mx-auto md:mx-0 mt-10 font-bold md:text-[20px] text-base text-center py-4 px-6 bg-radial from-white/42 to-[#efefef]/57  border-1 border-white/61 text-darkblue w-fit rounded-2xl'>Become the Core Seed</div>
                    </div>

                </div>
                <div className=''>
                    <div className='px-5 max-w-[1100px] mx-auto mt-28 mb-40'>
                        <h1 className='mt-6 text-[40px] md:text-[64px] text-center md:text-left font-bold text-darkblue'>Our phased launch</h1>
                        <p className='mt-9 md:text-[20px] text-base text-darkblue max-w-2xl'>We're building an ecosystem that connects merchants and consumers – with mutual benefits, transparency, and shared values. But we're doing it step by step.</p>
                        <div className=' text-white grid-cols-1 md:grid-cols-3 grid gap-4 mt-16 [&>*]:mt-16 [&>*]:md:mt-0 
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

            <div className='bg-[url("./assets/mobileImg5.png")] md:bg-[url("./assets/image5.png")] bg-cover bg-center bg-no-repeat pt-24 pb-36 relative inset-shadow-black'>
                <img src={lineTop} alt="Scroll Icon" className=" hidden md:block transform -translate-y-1/2 w-full mx-auto absolute top-0 left-0" />
                <img src={mobileTop} alt="Scroll Icon" className=" block md:hidden transform -translate-y-1/2 w-[1800px] mx-auto absolute top-0 left-0" />
                <img src={lineBottom} alt="Scroll Icon" className=" hidden md:block transform translate-y-1/2 w-full mx-auto absolute bottom-0 left-0" />
                <div className='px-5 max-w-[1100px] mx-auto '>
                    <h1 className='text-[40px] md:text-[64px] font-bold max-w-lg text-white leading-[125%] text-center md:text-left'>Merchants: <br />
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
                <div className=' hidden md:block absolute top-0 left-0 w-full h-full bg-[url("./assets/bg1.png")] bg-cover bg-bottom bg-no-repeat -z-30'></div>
                <div className=' block md:hidden absolute top-0 left-0 w-full h-full bg-[#171A23] bg-cover bg-bottom bg-no-repeat -z-30'></div>
                <div className='px-5 max-w-[1100px] mx-auto pt-24 text-center'>
                    <h1 className='text-[40px] md:text-[64px] text-white leading-[125%] text-center mt-28'>
                        Join the early phase and <br />
                        <b>become a Core Seed</b>
                    </h1>
                    <p className='text-white text-xl md:text-2xl mt-9'>
                        We're kicking off with a limited group of visionary merchants. Those who join now become our Core Seeds – pioneers who help plant the very first roots of this ecosystem.
                    </p>
                    <p className='text-white text-xl md:text-2xl mt-16'>As a Core Seed, you receive exclusive, lifetime benefits:</p>
                    <div className='mt-10 grid md:grid-cols-5 grid-cols-1 gap-8 [&>*]:max-w-44 [&>*]:mx-auto '>
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
                    <h1 className='text-5xl md:text-[64px] leading-[125%] font-bold'>Ready to become more <br /> than just a shopkeeper?</h1>
                    <p className=' text-xl md:text-2xl mt-9 max-w-[812px] mx-auto'>Join the Core Seeds and help us grow something powerful from the ground up.</p>
                    <p className=' text-xl md:text-2xl mt-9'>Apply for your terminal or contact us for more information.</p>
                    <div className=' max-w-md mx-auto gap-4 mt-10 mb-32'>

                        <div className=' font-bold text-base md:text-[20px] text-center py-3 px-6 bg-darkblue text-white w-full border-1 border-white/61 rounded-xl mx-auto max-w-fit'>Contact Us</div>
                    </div>
                </div>
            </div>

           <Footer/>





        </>
    )
}

export default Home
