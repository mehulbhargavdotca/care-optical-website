import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, bestTime } = body

    console.log("Received contact form submission:", body)

    // WARNING: Hardcoding credentials directly in the code is INSECURE and NOT RECOMMENDED for production.
    // This is done as per your explicit request. For secure deployment, use environment variables.
    const GMAIL_USER = ""
    const GMAIL_APP_PASSWORD = "your_app_password_here" // Replace with your actual app password

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    })

    console.log("Nodemailer transporter created. Sending emails...")

    // Email content for the customer
    const customerMailOptions = {
      from: GMAIL_USER, // Your clinic's email
      to: email, // Customer's email
      subject: "Care Optical: Your Appointment Request Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #C07F00;">Dear ${name},</h2>
          <p>Thank you for your appointment request at Care Optical. We have received your information and will contact you within 24 hours to confirm your appointment time.</p>
          <p><strong>Your Request Details:</strong></p>
          <ul>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Best time to call:</strong> ${bestTime}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            ${message ? `<li><strong>Additional notes:</strong> ${message}</li>` : ""}
          </ul>
          <p>If you have any urgent concerns, please call us directly at <strong>(905) 850-5111</strong>.</p>
          <p>Best regards,<br><strong>Care Optical Team</strong></p>
          <p style="font-size: 0.9em; color: #666;">7766 Martin Grove Rd #20, Woodbridge, ON</p>
        </div>
      `,
    }

    console.log("Customer Mail Options:", customerMailOptions)

    // Email content for the clinic
    const clinicMailOptions = {
      from: GMAIL_USER, // Your Gmail address
      to: "careoptical.info@gmail.com", // Your clinic's email
      subject: "New Appointment Request from Care Optical Website",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #C07F00;">New Appointment Request Received!</h2>
          <p>A new appointment request has been submitted through your website:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Service Requested:</strong> ${service}</li>
            <li><strong>Best Time to Call:</strong> ${bestTime}</li>
            ${message ? `<li><strong>Additional Notes:</strong> ${message}</li>` : ""}
          </ul>
          <p>Please contact the customer at your earliest convenience to confirm their appointment.</p>
          <p style="font-size: 0.9em; color: #666;">Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    }

    console.log("Clinic Mail Options:", clinicMailOptions)

    // Send emails
    await transporter.sendMail(customerMailOptions)
    await transporter.sendMail(clinicMailOptions)

    console.log("Form submission and emails sent successfully:", {
      name,
      email,
      phone,
      service,
      message,
      bestTime,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Appointment request submitted successfully. A confirmation email has been sent.",
    })
  } catch (error) {
    console.error("Error processing form submission or sending email:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit appointment request. Please try again later." },
      { status: 500 },
    )
  }
}
