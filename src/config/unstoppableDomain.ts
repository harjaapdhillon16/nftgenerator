import UAuth from '@uauth/js';

const productionCredentials = {
  clientID: 'l+7dDGQRHQTUN05VPbqNUx9bOLEdAOmYeIrrKXQvPFA=',
  clientSecret: 'fqKxi/8c4AcBicVnURoBFYLPwA1XdOMF36CnXJgEaJg=',
  scope: 'openid email wallet',
  redirectUri: 'https://nft-generator-web3.netlify.app/callback',
  postLogoutRedirectUri: 'https://nft-generator-web3.netlify.app/',
};

export const uauth = new UAuth(productionCredentials);
