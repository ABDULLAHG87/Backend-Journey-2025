import  SibApiV3Sdk from 'sib-api-v3-sdk';
im

// Configure API key
const API_KEY =''
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = API_KEY;

// Create API instance
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const sendSmtpEmail = {
  to: [{ 
    email: 'hakeemabdullah87@gmail.com', 
    name: 'Abdulhakeem Abdullahi' }],
  sender: { 
    email: 'qzplatform@gmail.com', 
    name: 'qzplatform' },
  subject: 'Hello from Brevo!',
  htmlContent: '<h1>Welcome to Certifiyeet!</h1><p>This is a test email.</p>',
};

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  (data) => {
    console.log('Email sent successfully:', data);
  },
  (error) => {
    console.error('Error sending email:', error);
  }
);
