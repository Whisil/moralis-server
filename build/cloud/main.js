"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./generated/evmApi");
require("./generated/solApi");
const authService_1 = require("../auth/authService");
Parse.Cloud.define('requestMessage', async ({ params }) => {
    const { address, chain } = params;
    const message = await (0, authService_1.requestMessage)({
        address,
        chain,
    });
    return { message };
});
Parse.Cloud.define('userFetch', async (req) => {
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
//# sourceMappingURL=main.js.map