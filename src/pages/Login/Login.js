import { Button, Checkbox, Typography } from '@material-tailwind/react';
import { useGoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';

import { GoogleIcon } from '~/components/Icons';
import InputDropDownCountry from '~/components/InputDropDownCountry';
import config from '~/config';
import Header from '~/layouts/components/Header';

function Login() {
    const location = useLocation();
    const navigate = useNavigate();

    const order = location.state?.haveOrdersInCart;
    const GoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            tokenResponse.type = 'google_login';
            tokenResponse.timeStart = Date.now();
            localStorage.setItem('authGoogleInfo', JSON.stringify(tokenResponse));
            setTimeout(() => {
                localStorage.removeItem('authGoogleInfo');
            }, tokenResponse.expires_in * 1000);
            if (order?.length > 0 && order !== undefined) {
                order.title = order[order.length - 1].title;
                navigate(config.routes.checkout, {
                    state: { user: tokenResponse, order },
                });
                return;
            }
            navigate(config.routes.home, { state: { user: tokenResponse } });
        },
        onError: (err) => {
            alert('Login failed: ', err);
        },
    });

    return (
        <div>
            <Header isLogin />
            <div className="flex-col space-y-8 mt-24 pt-20 w-[428px] m-auto min-h-screen">
                <div className="flex-col space-y-1">
                    <Typography className="text-4xl font-normal text-light-on-surface dark:text-dark-on-surface">
                        Phone Number
                    </Typography>
                    <Typography className="text-sm font-normal text-light-on-surface-variant dark:text-dark-on-surface-variant">
                        We will send you an OTP for authentication.
                    </Typography>
                </div>
                <div className="flex-col space-y-2">
                    <InputDropDownCountry />
                    <Checkbox
                        label="Remember Me"
                        labelProps={{
                            class: 'text-light-on-background dark:text-dark-on-background font-normal text-base',
                        }}
                        className="border-light-outline dark:border-dark-outline checked:bg-light-primary dark:checked:bg-dark-primary"
                    />
                    <Button size="lg" fullWidth className="bg-light-primary dark:bg-dark-primary">
                        Continue
                    </Button>
                </div>
                <div className="or dark:text-dark-on-surface">or</div>
                <div className="flex-col space-y-4">
                    <Button
                        onClick={GoogleLogin}
                        fullWidth
                        variant="outlined"
                        className="flex items-center gap-2 justify-center border-light-outline dark:border-dark-outline text-light-on-surface dark:text-dark-on-surface"
                    >
                        <GoogleIcon />
                        <p className="text-light-on-surface dark:text-dark-on-surface">Continue with Google</p>
                    </Button>
                </div>
                <Typography className="text-xs font-normal text-light-on-surface-variant dark:text-dark-on-surface-variant text-center">
                    © 2023 VegFoLos Inc.
                    <button className="text-light-primary dark:text-dark-primary font-medium">
                        Terms and Conditions
                    </button>
                    .
                    <br /> reCAPTCHA is hidden in accordance with{' '}
                    <button className="text-light-primary dark:text-dark-primary font-medium">
                        Google's Privacy Policy
                    </button>{' '}
                    and <button className="text-light-primary dark:text-dark-primary font-medium">Terms of Use</button>.
                </Typography>
            </div>
        </div>
    );
}

export default Login;
