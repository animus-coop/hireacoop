export const GoogleReCaptchaProvider = ({ children }) => <div>{children}</div>;
export const useGoogleReCaptcha = () => ({
  executeRecaptcha: jest.fn().mockResolvedValue('mocked-recaptcha-token'),
});
