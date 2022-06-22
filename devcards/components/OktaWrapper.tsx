import React from 'react';
import dynamic from 'next/dynamic'

// Have to load okta sign-in widget with no SSR
const OktaSignInWidget = dynamic(
    () => import('./OktaSigninWidget'),
    { ssr: false }
);

const OktaWrapper = () => {
    const onSuccess = (tokens: any) => {
        console.log('logged in with tokens', tokens);
    };

    const onError = (err: any) => {
        console.log('error logging in', err);
    };

    return <OktaSignInWidget
        onSuccess={onSuccess}
        onError={onError}/>;
};
export default OktaWrapper;
