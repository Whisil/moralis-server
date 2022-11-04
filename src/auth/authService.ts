import Moralis from 'moralis';

export interface RequestMessage {
  address: string;
  chain: string;
  networkType: string;
}

const DOMAIN = 'crypto-vk';
const STATEMENT = 'Welcome to a tru web';
const URI = 'https://crypto-vk.vercel.app/';
const TIMEOUT = 45;

export async function requestMessage({
  address,
  chain,
}: {
  address: string;
  chain: string;
}) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    domain: DOMAIN,
    statement: STATEMENT,
    uri: URI,
    timeout: TIMEOUT,
  });

  const { message } = result.toJSON();

  return message;
}
