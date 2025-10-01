import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  arrivalDate: string;
  departureDate: string;
  adults: number;
  children: number;
  experiences: string[];
  campingPreference: string;
  pace: string;
  addOns: string[];
  transport: string;
  dietaryNotes: string;
  languages: string[];
  preferredContact: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const formData: ContactFormData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.arrivalDate || !formData.departureDate) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Create email HTML content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(to right, #d4a574, #8b7355);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 0 0 8px 8px;
            }
            .section {
              margin: 20px 0;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #d4a574;
            }
            .section-title {
              font-weight: bold;
              color: #8b7355;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .info-row {
              margin: 8px 0;
              display: flex;
              gap: 10px;
            }
            .label {
              font-weight: 600;
              min-width: 140px;
            }
            .value {
              color: #555;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              background: #d4a574;
              color: white;
              border-radius: 4px;
              font-size: 14px;
              margin: 4px;
            }
            .footer {
              margin-top: 20px;
              padding: 15px;
              background: #f0f0f0;
              border-radius: 8px;
              text-align: center;
              font-size: 14px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2 style="margin: 0;">🏜️ New Booking Inquiry</h2>
            <p style="margin: 5px 0 0 0;">Wadi Rum Desert Guide</p>
          </div>

          <div class="content">
            <div class="section">
              <div class="section-title">📅 Trip Details</div>
              <div class="info-row">
                <span class="label">Arrival Date:</span>
                <span class="value">${formData.arrivalDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Departure Date:</span>
                <span class="value">${formData.departureDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Group Size:</span>
                <span class="value">${formData.adults} adult(s)${formData.children > 0 ? `, ${formData.children} children` : ''}</span>
              </div>
              ${formData.pace ? `
              <div class="info-row">
                <span class="label">Pace/Fitness:</span>
                <span class="value">${formData.pace}</span>
              </div>
              ` : ''}
            </div>

            ${formData.experiences && formData.experiences.length > 0 ? `
            <div class="section">
              <div class="section-title">🏜️ Selected Experiences</div>
              <div style="margin-top: 10px;">
                ${formData.experiences.map(exp => `<span class="badge">${exp}</span>`).join('')}
              </div>
            </div>
            ` : ''}

            ${formData.campingPreference ? `
            <div class="section">
              <div class="section-title">🏕️ Camping Preference</div>
              <div class="info-row">
                <span class="value">${formData.campingPreference}</span>
              </div>
            </div>
            ` : ''}

            ${formData.addOns && formData.addOns.length > 0 ? `
            <div class="section">
              <div class="section-title">✨ Add-ons</div>
              <div style="margin-top: 10px;">
                ${formData.addOns.map(addon => `<span class="badge">${addon}</span>`).join('')}
              </div>
            </div>
            ` : ''}

            ${formData.transport ? `
            <div class="section">
              <div class="section-title">🚗 Pick-up/Drop-off</div>
              <div class="info-row">
                <span class="value">${formData.transport}</span>
              </div>
            </div>
            ` : ''}

            <div class="section">
              <div class="section-title">👤 Contact Information</div>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${formData.name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span>
              </div>
              ${formData.phone ? `
              <div class="info-row">
                <span class="label">Phone/WhatsApp:</span>
                <span class="value"><a href="https://wa.me/${formData.phone.replace(/[^0-9+]/g, '')}">${formData.phone}</a></span>
              </div>
              ` : ''}
            </div>

            ${formData.message ? `
            <div class="section">
              <div class="section-title">💬 Message</div>
              <p style="margin: 10px 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
            ` : ''}

            <div class="footer">
              <p>This inquiry was submitted through your Wadi Rum Guide website.</p>
              <p style="margin: 5px 0;">Reply directly to this email to contact the customer.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Wadi Rum Bookings <bookings@yousef-wadirum.guide>',
      to: ['yousefwadirum@gmail.com'],
      reply_to: formData.email,
      subject: `New Booking Inquiry from ${formData.name} - ${formData.arrivalDate}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        id: data.id
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};
