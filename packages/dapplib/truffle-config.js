require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong response random unknown journey enter metal gaze'; 
let testAccounts = [
"0x835c609f1e029102e6ddd227debfb053ddbc5b1ad3919d9da1a96f7f8f1a6730",
"0x9a17a2f8ca42fe737bf2f43568bb8f0663b67701afbd26e4c038ffec4bcd1d07",
"0x8ebb5c8ae56f50ae1952cd6cbb3045317b3f023b74180fe77934386bf2dffd03",
"0x18ee44f0b49ebe14fb4244e6b51e16b8844216381251c37141158affa8eb070c",
"0xf5f22627a862059c2b93e98e4be05c25cbadb07741168dfe2de34204ebc9da00",
"0x0984032fd0fced0ec55a49544fa18bd86d6611fd4abda6d5f396a3c396f766cf",
"0xee784576c1282ce2f0e03c13cdfa4ffc530929fc1b33b9199ab80bfcce7df556",
"0xe8053c17b1a6db9c2a0845b1c88d5f0c68ad79f1625d79510d48955f752c84cc",
"0x5c6c089a542ae070928ef72701e7cbd5139df3d16d1dbc3fa9e69a60fb6f3bdb",
"0x88062e6cbf1ed2b9d1edd1d4a4ee3c00f26c4c8f6b03d9a8df8bdc2c123dc82b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

