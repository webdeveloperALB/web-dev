import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  senderEmail: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  firstName,
  lastName,
  senderEmail,
  phoneNumber,
  subject,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Contact Form Submission</Heading>
          <Text style={text}>You received a new contact form submission:</Text>
          
          <Section style={section}>
            <Text style={sectionHeading}>Name:</Text>
            <Text style={sectionContent}>{firstName} {lastName}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={sectionHeading}>Email:</Text>
            <Text style={sectionContent}>{senderEmail}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={sectionHeading}>Phone:</Text>
            <Text style={sectionContent}>{phoneNumber}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={sectionHeading}>Subject:</Text>
            <Text style={sectionContent}>{subject}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={sectionHeading}>Message:</Text>
            <Text style={sectionContent}>{message}</Text>
          </Section>
          
          <Hr style={hr} />
          <Text style={footer}>This email was sent from your website's contact form.</Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const h1 = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#294661',
  marginBottom: '24px',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#3c4043',
};

const section = {
  marginBottom: '16px',
};

const sectionHeading = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '4px',
  color: '#294661',
};

const sectionContent = {
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0',
  color: '#3c4043',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  color: '#8898aa',
  marginTop: '12px',
};