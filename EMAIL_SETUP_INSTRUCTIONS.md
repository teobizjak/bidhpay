# Contact Form Email Setup Instructions

Your contact form has been implemented and is ready to send emails to `bizjak.teo@gmail.com`. To complete the setup, you need to configure EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to the "Email Services" section in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account

## Step 3: Create Email Template
1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Body:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent to: {{to_email}}
Sent from: BidhPay Contact Form
```

4. Save the template and note the Template ID

## Step 4: Get Your Configuration Values
1. Service ID: Found in your "Email Services" section
2. Template ID: Found in your "Email Templates" section  
3. Public Key: Found in "Account" > "General" > "Public Key"

## Step 5: Update Configuration
Open `src/emailConfig.js` and replace the placeholder values:

```javascript
export const EMAIL_CONFIG = {
    SERVICE_ID: 'your_actual_service_id',
    TEMPLATE_ID: 'your_actual_template_id', 
    PUBLIC_KEY: 'your_actual_public_key'
};
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email at bizjak.teo@gmail.com

## Features Implemented
- ✅ Form validation (all fields required)
- ✅ Loading states during submission
- ✅ Success/error feedback messages
- ✅ Form reset after successful submission
- ✅ Responsive design maintained
- ✅ Email type validation
- ✅ Professional styling with existing design

## Troubleshooting
- If emails aren't being sent, check the browser console for errors
- Verify your EmailJS configuration values are correct
- Make sure your email service is properly connected in EmailJS
- Check your EmailJS usage limits (200 emails/month on free plan)

## Security Note
EmailJS handles the email sending securely from the frontend. Your actual email credentials are never exposed in the client code.
