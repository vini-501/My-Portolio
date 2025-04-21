# Email Setup for Portfolio Contact Form

This document explains how to set up the email functionality for your portfolio contact form.

## Prerequisites

1. A Gmail account that you'll use to send emails
2. NodeMailer package (already installed in the project)

## Setting Up App Password for Gmail

To use your Gmail account with Nodemailer, you need to create an app password:

1. Go to your Google Account settings at [https://myaccount.google.com/](https://myaccount.google.com/)
2. Click on "Security" in the left-hand menu
3. Under "Signing in to Google," find and click on "2-Step Verification" (you might need to enable this first)
4. Scroll to the bottom and click on "App passwords"
5. Select "Mail" as the app and "Other" as the device (name it "Portfolio Contact Form")
6. Click "Generate"
7. Google will display your 16-character app password. Note this down, as you'll only see it once.

## Configure Environment Variables

1. Open the `.env.local` file in your project's root directory
2. Replace the placeholder values with your actual Gmail credentials:

```
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important Notes:**
- Never commit your .env.local file to version control
- Make sure .env.local is in your .gitignore file
- For production deployment (like Vercel), set these environment variables in your hosting provider's dashboard

## Testing the Contact Form

After setting up your environment variables:

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out the form and submit it
4. You should receive the email at the address you configured

## Troubleshooting

If you're not receiving emails:

1. Check your spam folder
2. Verify that your app password is correct
3. Make sure your environment variables are set correctly
4. Check the server logs for any errors

## Security Considerations

- The app uses environment variables to keep credentials secure
- Email credentials are only used server-side in the API route
- User inputs are validated before processing 