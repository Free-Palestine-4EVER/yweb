# Deployment Instructions

This website uses **Resend** for sending contact form emails to `yousefwadirum@gmail.com`.

## Environment Variables

The following environment variable is required:

```
RESEND_API_KEY=re_bdb2QwvL_G3EHNNSJKzhPDeeDTZogrhpB
```

## Netlify Deployment

### 1. Connect to Netlify

1. Push this repository to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository

### 2. Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### 3. Set Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the following variable:
   - Key: `RESEND_API_KEY`
   - Value: `re_bdb2QwvL_G3EHNNSJKzhPDeeDTZogrhpB`

### 4. Deploy

Click "Deploy site" and Netlify will automatically build and deploy your site.

## Resend Setup

### Verify Sender Domain

For production use, you need to verify your domain in Resend:

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add your domain (e.g., `yousef-wadirum.guide`)
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

Once verified, update the `from` address in `netlify/functions/send-email.ts`:

```typescript
from: 'Wadi Rum Bookings <bookings@yousef-wadirum.guide>'
```

### Testing Email Functionality

You can test the email functionality locally using Netlify Dev:

```bash
npm install
netlify dev
```

This will start a local server with the serverless functions available.

## Contact Form Behavior

When a visitor submits the contact form:
1. The form data is sent to `/api/send-email` endpoint
2. A beautifully formatted email is sent to `yousefwadirum@gmail.com`
3. The email includes all form details (dates, experiences, contact info, etc.)
4. WhatsApp is also opened as a backup contact method
5. The user sees a success message

## Local Development

```bash
# Install dependencies
npm install

# Run development server (Vite only)
npm run dev

# Run with Netlify functions (recommended for testing email)
npm run dev:netlify
```

## Important Notes

- The `.env` file contains your API key and is gitignored for security
- Never commit the `.env` file to version control
- Make sure to set the environment variable in Netlify dashboard for production
- Check Resend dashboard for email logs and delivery status
