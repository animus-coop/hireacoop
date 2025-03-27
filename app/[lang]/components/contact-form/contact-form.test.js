import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import ContactForm from './contact-form';
import toast from 'react-hot-toast';

// Mock the sendEmail service
jest.mock('../../../../services/send-email', () => ({
  sendEmail: jest.fn(),
}));

// Mock react-google-recaptcha-v3
jest.mock('react-google-recaptcha-v3', () => ({
  useGoogleReCaptcha: () => ({
    executeRecaptcha: jest.fn().mockResolvedValue('mocked-recaptcha-token'),
  }),
  GoogleReCaptchaProvider: ({ children }) => <div>{children}</div>,
}));

// Mock dictionary props
const mockDictionary = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
  send: 'Send',
  successMessage: 'Message sent successfully!',
  errors: {
    requiredField: 'This field is required',
    emailInvalid: 'Invalid email address',
  },
  missingCaptcha: 'Please complete the captcha',
};

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    expect(screen.getByPlaceholderText(mockDictionary.name)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(mockDictionary.email)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(mockDictionary.message)).toBeInTheDocument();
    expect(screen.getByText(mockDictionary.send)).toBeInTheDocument();
  });

  it('shows validation errors when required fields are empty', async () => {
    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      screen.getAllByText(mockDictionary.errors.requiredField).forEach(
        elem => expect(elem).toBeInTheDocument()
      );      
    });
  });

  it('shows validation error for invalid email', async () => {
    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    const emailInput = screen.getByPlaceholderText(mockDictionary.email);
    userEvent.type(emailInput, 'invalid-email');

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(mockDictionary.errors.emailInvalid)).toBeInTheDocument();
    });
  });

  it('shows an error toast when reCAPTCHA is missing', async () => {
    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    userEvent.type(screen.getByPlaceholderText(mockDictionary.name), 'John Doe');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.email), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.message), 'Hello, this is a test message.');

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(mockDictionary.missingCaptcha, expect.any(Object));
    });
  });

  it('shows an error toast when form submission fails', async () => {
    const mockSendEmail = require('../../../../services/send-email').sendEmail;
    mockSendEmail.mockResolvedValue({ status: 500, error: { en: 'Server error' } });

    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    userEvent.type(screen.getByPlaceholderText(mockDictionary.name), 'John Doe');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.email), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.message), 'Hello, this is a test message.');

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockSendEmail).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith('Server error', expect.any(Object));
    });
  });

  it('submits the form successfully', async () => {
    const mockSendEmail = require('../../../../services/send-email').sendEmail;
    mockSendEmail.mockResolvedValue({ status: 200 });

    render(<ContactForm dictionary={mockDictionary} lang="en" />);

    userEvent.type(screen.getByPlaceholderText(mockDictionary.name), 'John Doe');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.email), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText(mockDictionary.message), 'Hello, this is a test message.');

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockSendEmail).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith(mockDictionary.successMessage, expect.any(Object));
    });
  });
});
