import React, {useEffect, useRef} from 'react';
// @ts-ignore - currently okta-signin-widget doesn't support for typescript
// Refer: https://github.com/okta/okta-signin-widget/issues/1330
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

// Can remove this if the config will pass in prop
//import { oktaSignInConfig } from '../utils/config';

const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit Flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: process.env.OKTA_DOMAIN,
  clientId: process.env.OKTA_CLIENTID,
  redirectUri: 'http://localhost:3000/api/auth/callback/okta',
};

const oktaSignInConfig = {
  issuer: 'https://dev-77981600.okta.com/oauth2/default',
  baseUrl: 'https://dev-77981600.okta.com',
  clientId: '0oa5grq2yjR2HNAjW5d7',
  redirectUri: 'http://localhost:3000/api/auth/callback/okta',
  authParams: {
      // If your app is configured to use the Implicit Flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
      //pkce: false
  },
  features: {
    registration: true
  }
};

type OktaSignInWidgetComponent = (
        {config, onSuccess, onError}:
        { config?: any; onSuccess: (tokens: any) => void; onError: (err: any) => void }
    ) => any;

const OktaSignInWidget: OktaSignInWidgetComponent = ({config = oktaSignInConfig, onSuccess, onError}) => {
    const widgetRef = useRef();

    useEffect(() => {
        if (!widgetRef.current)
            return () => false;

        const widget = new OktaSignIn(config);

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [config, onSuccess, onError]);

    return (<div ref={widgetRef as any}/>);
};

export default OktaSignInWidget;
