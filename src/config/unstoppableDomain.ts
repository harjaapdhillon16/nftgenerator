import UAuth from '@uauth/js';

const productionCredentials = {
  clientID: 'l+7dDGQRHQTUN05VPbqNUx9bOLEdAOmYeIrrKXQvPFA=',
  clientSecret: 'fqKxi/8c4AcBicVnURoBFYLPwA1XdOMF36CnXJgEaJg=',
  scope: 'openid email wallet',
  redirectUri: 'https://nft-generator-web3.netlify.app/callback',
  postLogoutRedirectUri: 'https://nft-generator-web3.netlify.app/',
};

const developmentCredentials = {
  clientID: 'qxRaA/ILJHo5WGXbo6NiWOI+FBModAIKVToTBGONEtI=',
  clientSecret: 'MSk1Lx/iddaggFHSNoBNCfRn4vwblWkvmVivxFYpyww=',
  scope: 'openid email wallet',
  redirectUri: 'http://localhost:3000/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
};

export const uauth = new UAuth(developmentCredentials);
