# Setting Up EmailJS with Your Portfolio Contact Form

## Step 1: Create an EmailJS Account
1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose a service provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account

## Step 3: Create an Email Template
1. Go to "Email Templates" in the EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
4. Save your template and note the Template ID

## Step 4: Update Your Code
Replace the placeholders in your Contact.js file with your actual EmailJS credentials:

```javascript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your public key
```

You can find these values in your EmailJS dashboard:
- Service ID: Found under "Email Services" > [Your Service] > "Service ID"
- Template ID: Found under "Email Templates" > [Your Template] > "Template ID"
- Public Key: Found under "Account" > "API Keys"

## Step 5: Test the Form
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check to see if you receive the email
4. Review the console for any errors if it's not working

## Step 6: Free Plan Limitations
The free plan of EmailJS includes:
- 200 emails per month
- 2 email templates
- Basic customization

If you need more, consider upgrading to a paid plan.
