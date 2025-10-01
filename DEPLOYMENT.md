# Deployment Instructions

This website uses **Resend** for sending contact form emails to `yousefwadirum@gmail.com`.

## Environment Variables

The following environment variable is required:

```
RESEND_API_KEY=re_bdb2QwvL_G3EHNNSJKzhPDeeDTZogrhpB
```

## Vercel Deployment

### 1. Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add the following variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_bdb2QwvL_G3EHNNSJKzhPDeeDTZogrhpB`
   - **Environment**: Production, Preview, and Development
4. Click "Save"

### 2. Redeploy

After adding the environment variable:
1. Go to "Deployments" tab
2. Click the three dots (...) on the latest deployment
3. Click "Redeploy"

OR simply push a new commit to trigger automatic redeployment.

## Resend Setup

### Verify Sender Domain

For production use, you need to verify your domain in Resend:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add your domain (e.g., `yousef-wadirum.guide`)
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

Once verified, update the `from` address in `api/send-email.ts`:

```typescript
from: 'Wadi Rum Bookings <bookings@yousef-wadirum.guide>'
```

### Testing Email Functionality

You can test the email functionality locally:

```bash
npm install
npm run dev
```

The API endpoint will be available at `http://localhost:5173/api/send-email`

## Contact Form Behavior

When a visitor submits the contact form:
1. The form data is sent to `/api/send-email` endpoint (Vercel serverless function)
2. A beautifully formatted email is sent to `yousefwadirum@gmail.com`
3. The email includes all form details (dates, experiences, contact info, etc.)
4. WhatsApp is also opened as a backup contact method
5. The user sees a success message and the form resets

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Important Notes

- The `.env` file contains your API key and is gitignored for security
- Never commit the `.env` file to version control
- Make sure to set the environment variable in Vercel dashboard for production
- Check Resend dashboard for email logs and delivery status
- The API functions are in the `/api` directory (Vercel automatically deploys these as serverless functions)

## Troubleshooting

If emails aren't sending:
1. Check Vercel environment variables are set correctly
2. Check Resend dashboard for error logs
3. Verify your domain in Resend (if using custom domain)
4. Check browser console for API errors
5. Test the API endpoint directly: POST to `/api/send-email` with form data
