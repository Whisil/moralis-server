export interface RequestMessage {
    address: string;
    chain: string;
    networkType: string;
}
export declare function requestMessage({ address, chain, }: {
    address: string;
    chain: string;
}): Promise<string>;
