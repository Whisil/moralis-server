"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestMessage = void 0;
const moralis_1 = __importDefault(require("moralis"));
const DOMAIN = 'crypto-vk';
const STATEMENT = 'Welcome to a tru web';
const URI = 'https://crypto-vk.vercel.app/';
const TIMEOUT = 45;
async function requestMessage({ address, chain, }) {
    const result = await moralis_1.default.Auth.requestMessage({
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
exports.requestMessage = requestMessage;
//# sourceMappingURL=authService.js.map