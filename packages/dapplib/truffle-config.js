require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember coast gesture seek foster giant'; 
let testAccounts = [
"0x6124d1cb9a04e24cb37f195309ff51160d3042f1219f51a0aec13f78094801fd",
"0xd13179f7c2874b23e2263a7dfcbfa20ec08dd653d8341cb8c3426a6f80a27f60",
"0xe839ac617b4290ad76373de9bb41ef082627d8ed2ad4fa9cfe7fcddf062e4e37",
"0x0ba19952eca86906c3560fa76f0e270879592eff1f5707c118d457967b713469",
"0xed240b1037fb043a9956c8126a786247751736b33b8d89edccd4807017819ab9",
"0x6e29d7a3061d87ea30c6cca80ef0532be2596d3672c8c882c7f9260236cf2077",
"0xe9f8f8896d022efa676dc4d2d6ff77a73ae09a503cff5c001d59a937bda8211c",
"0xa70716abc58d6b68dd74b3c26a75e413fbc027a39354191b96839841deefa851",
"0xde65a636b4f9a4a784930ac1c263d8de4a953dcd1b8554364ca88e7a5fcb0000",
"0xc817b1ec4ccd77c5d9fdd6ef0487f4119360f224e90c0380c5e03d60b9f07085"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


