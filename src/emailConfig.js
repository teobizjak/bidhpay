// EmailJS Configuration
// To set up EmailJS for your contact form:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{message}} - message content
//    - {{to_email}} - your email ()
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the placeholder values in Contact.jsx with your actual values

export const EMAIL_CONFIG = {
    SERVICE_ID: 'service_btnxa5n', // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_su30fab', // Replace with your EmailJS template ID
    PUBLIC_KEY: '2AZPolaAr8Vp9ZDXm' // Replace with your EmailJS public key
};

// Example email template content:
/*
Subject: New Contact Form Submission from {{from_name}}

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

This email was sent to: {{to_email}}
*/
