import { Typography } from '@material-tailwind/react';
import Header from '~/layouts/components/Header';

function Login() {
    return (
        <div>
            <Header isLogin />
            <div className="flex-col mt-32 pt-20 w-[428px] m-auto">
                <Typography className="text-4xl font-normal text-light-on-surface">Phone Number</Typography>
                <Typography className="text-sm font-normal text-light-on-surface-variant">
                    We will send you an OTP for authentication.
                </Typography>
            </div>
        </div>
    );
}

export default Login;
