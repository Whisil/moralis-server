/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
declare const Parse: any;
import './generated/evmApi';
import './generated/solApi';
import { requestMessage } from '../auth/authService';

Parse.Cloud.define('requestMessage', async ({ params }: any) => {
  const { address, chain } = params;

  const message = await requestMessage({
    address,
    chain,
  });

  return { message };
});

Parse.Cloud.define('userFetch', async (req: any) => {
  const userQuery = new Parse.Query(`_User`);

  userQuery.equalTo(`objectId`, req.params.id);
  const user = await userQuery.find({ useMasterKey: true });
  return user;
});

Parse.Cloud.define('getPluginSpecs', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return [];
});

Parse.Cloud.define('getServerTime', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return null;
});
