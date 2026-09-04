import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 587,
        auth: {
            user: 'testimony.app@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    })
    
    const mailOptions = {
        from: '"Gbenle Testimony" testimony.app@gmail.com',
        to: 'testimonygbenle@gmail.com',
        subject: 'Testing Nodemailer',
        text: "Hello from Node.js",
        html: '<b>Hello from Node.js</b>'
    }

    try{
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully', info.messageId);
    }catch{
        console.log('Error sending email', error);
    }
}