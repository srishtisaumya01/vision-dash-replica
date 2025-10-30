import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import logo from '@/assets/seva-bharti-logo.png';

/**
 * Login Page Component
 * Two-step authentication: Initial screen and OTP verification
 */
const Login = () => {
  const [step, setStep] = useState<'initial' | 'otp'>('initial');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInitialLogin = () => {
    setStep('otp');
  };


  const handleOtpLogin = () => {
    // Static validation - in production, validate against backend
    if (mobileNumber && otp.length === 6) {
      login();
      navigate('/');
    }
  };

  if (step === 'initial') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Seva Bharti Logo" className="w-32 h-32" />
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-foreground">
              Login to <span className="text-primary">सेवा भारती</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              शिक्षा, कौशल और उत्कृष्ट भविष्य की
              <br />
              ओर आपका मार्ग
            </p>
          </div>

          {/* Login Button */}
          <Button 
            onClick={handleInitialLogin}
            className="w-full h-12 text-base font-medium"
            size="lg"
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Seva Bharti Logo" className="w-24 h-24" />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Login</h1>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Mobile Number Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Mobile number
            </label>
            <Input
              type="tel"
              placeholder="+91 7654345678"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="h-12"
            />
          </div>

          {/* OTP Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Enter OTP
            </label>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Login Button */}
          <Button 
            onClick={handleOtpLogin}
            className="w-full h-12 text-base font-medium"
            size="lg"
            disabled={!mobileNumber || otp.length !== 6}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
