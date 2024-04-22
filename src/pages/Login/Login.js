import { Button, Checkbox, Typography } from '@material-tailwind/react';
import { FacebookIcon, GoogleIcon } from '~/components/Icons';
import InputDropDownCountry from '~/components/InputDropDownCountry';
import Header from '~/layouts/components/Header';

function Login() {
    return (
        <div>
            <Header isLogin />
            <div className="flex-col space-y-8 mt-24 pt-20 w-[428px] m-auto min-h-screen">
                <div className="flex-col space-y-1">
                    <Typography className="text-4xl font-normal text-light-on-surface">Phone Number</Typography>
                    <Typography className="text-sm font-normal text-light-on-surface-variant">
                        We will send you an OTP for authentication.
                    </Typography>
                </div>
                <div className="flex-col space-y-2">
                    <InputDropDownCountry />
                    <Checkbox
                        label="Remember Me"
                        labelProps={{ class: 'text-light-on-background font-normal text-base' }}
                        className="border-light-outline checked:bg-light-primary"
                    />
                    <Button size="lg" fullWidth className="bg-light-primary">
                        Continue
                    </Button>
                </div>
                <div className="or">or</div>
                <div className="flex-col space-y-4">
                    <Button
                        fullWidth
                        variant="outlined"
                        className="flex items-center gap-2 justify-center border-light-outline text-light-on-surface"
                    >
                        <GoogleIcon />
                        Continue with Google
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        className="flex items-center gap-2 justify-center border-light-outline text-light-on-surface"
                    >
                        <FacebookIcon />
                        Continue with Facebook
                    </Button>
                </div>
                <Typography className="text-xs font-normal text-light-on-surface-variant text-center">
                    © 2023 VegFoLos Inc.
                    <button className="text-light-primary font-medium">Terms and Conditions</button>.
                    <br /> reCAPTCHA is hidden in accordance with{' '}
                    <button className="text-light-primary font-medium">Google's Privacy Policy</button> and{' '}
                    <button className="text-light-primary font-medium">Terms of Use</button>.
                </Typography>
            </div>
        </div>
    );
}

export default Login;
