import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './emailConfig';
import contact from './assets/contact.png';
import contactMobile from './assets/contactMobile.png';

function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'hello@bidhpay.com'
            };

            await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID, 
                EMAIL_CONFIG.TEMPLATE_ID, 
                templateParams, 
                EMAIL_CONFIG.PUBLIC_KEY
            );
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
        <div className='-mt-52 md:mt-12'>
        <img src={contact} alt="Contact" className='hidden md:block fixed top-0 left-0 h-[100lvh] md:h-[100vh] w-full object-cover -z-40' />
        <img src={contactMobile} alt="Contact" className='block md:hidden fixed top-0 left-0 h-[100lvh] md:h-[100vh] w-full object-cover -z-40' />
            <div className=' absolute top-0 left-0 h-[190vh] md:h-[120vh] w-full bg-radial from-white to-[#999999] -z-50' />
           
            <div className=' mb-36 max-w-[1100px] mx-auto px-8'>
                <div className='max-w-[500px]'>

                
                
                <h1 className=' text-[40px] md:text-[64px] text-left '>
                    Contact Us
                </h1>
                <p className='text-left text-base md:text-[20px]'>
                    We usually respond within 24 hours. 
                </p>
                

                <form onSubmit={handleSubmit} className="">
                    <div className='text-left text-[12px] md:text-[16px] mt-8 ml-2'>Name</div>
                    <div className=' mt-2  flex flex-col md:flex-row [&>*]:grow [&>*]:bg-[#0D0F16]/2 [&>*]:rounded-lg [&>*]:px-4 [&>*]:py-2 text-darkblue gap-4 justify-center [&>*]:border-1 [&>*]:border-[#151821]/31 rounded-2xl'>
                    
                   
                        <input 
                            type="text" 
                            name="name"
                            
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="outline-none bg-transparent placeholder:text-[#151821]/37"
                        />
                        
                    </div>
                    <div className='text-left text-[12px] md:text-[16px] mt-6 ml-2'>Email</div>
                    <div className=' mt-2 flex flex-col md:flex-row [&>*]:grow [&>*]:bg-[#0D0F16]/2 [&>*]:rounded-lg [&>*]:px-4 [&>*]:py-2 text-darkblue gap-4 justify-center [&>*]:border-1 [&>*]:border-[#151821]/31 rounded-2xl'>
                        
                        <input 
                            type="email" 
                            name="email"
                            
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="outline-none bg-transparent placeholder:text-[#151821]/37"
                        />
                    </div>
                    <div className='text-left text-[12px] md:text-[16px] mt-6 ml-2'>Your Message</div>
                    <div className=' mt-2 flex [&>*]:grow [&>*]:bg-[#0D0F16]/2 [&>*]:rounded-lg [&>*]:px-4 [&>*]:py-2 text-darkblue gap-4 justify-center [&>*]:border-1 [&>*]:border-[#151821]/31 rounded-2xl'>
                        <textarea 
                            rows={6} 
                            name="message"
                            placeholder="Tell us about your business / your community"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="outline-none bg-transparent placeholder:text-[#151821]/37 resize-none"
                        />
                    </div>
                    
                    {submitStatus === 'success' && (
                        <div className="text-green-500 text-center mt-4">
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="text-red-500 text-center mt-4">
                            Please fill in all fields and try again.
                        </div>
                    )}
                    
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`mt-8 font-bold text-base md:text-[20px] text-center py-4 px-6 bg-darkblue border-1 border-white/61 text-white w-full mx-auto rounded-2xl transition-opacity ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                
                </div>
            </div>
<Footer t={t}/>

            </div>

        </>

    )
}

export default Contact