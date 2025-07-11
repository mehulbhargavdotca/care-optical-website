
# Care Optical Website

This is the official website project for **Care Optical**, a modern optometry clinic located in Woodbridge, Ontario. The site is built with HTML, CSS, JavaScript, Bootstrap, Tailwind, and PHP for handling form submissions via SMTP (email).

---

## 📍 Project Info

**Business Name:** Care Optical  
**Address:** 7766 Martin Grove Rd #20, Woodbridge, ON L4L 2C7  
**Phone:** (905) 850-5111  
**Email:** careoptical.info@gmail.com  
**Areas Served:** Vaughan  
**Website Features:**
- Informational service pages
- Book an eye exam (via contact form)
- Responsive design
- Email contact form with SMTP
- SEO-friendly structure

---

## ⚙️ Technologies Used

- **Frontend:** HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript
- **Backend (Email Handling):** PHP (with SMTP using PHPMailer)
- **Deployment Environment:** Hostinger hPanel (shared hosting)

---

## 📁 Folder Structure

```
care-optical-website/
├── index.html                  # Home page
├── about.html                 # About Us
├── contact.html               # Contact page with form
├── services/                  # Individual service pages (500+ words each)
│   ├── eye-exams.html
│   ├── prescription-eyewear.html
│   ├── contact-lenses.html
│   └── safety-eyewear.html
├── brands.html
├── insurance.html
├── promotions.html
├── book-eye-exam.html
├── locate-us.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── mail/
│   └── send.php               # PHP mail handler (SMTP)
└── README.md                  # Project documentation
```

---

## ✉️ Contact Form (PHP Mailer)

The contact form uses Gmail SMTP to send emails.

### SMTP Configuration in `send.php`

```php
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'careoptical.info@gmail.com';
$mail->Password = ''; // App password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
```

✅ Gmail App Password is required. Two-factor authentication must be enabled on the Gmail account.


---

## 📌 Notes

- Make sure to secure your SMTP credentials on production (use `.env` or server environment variables if possible).
- Replace dummy text and placeholder images before final launch.
- SEO titles, meta tags, and Open Graph tags should be added per page for better indexing.

---

## 👤 Developer Info

**Developer:** Mehul Bhargav  
**Services:** Website Design & Development, SEO, Digital Marketing  
**Location:** North York, Ontario, Canada  
**Email:** [mehulbhargav.div@gmail.com](mailto:mehulbhargav.div@gmail.com)

---
