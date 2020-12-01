const { connect, keyStores, utils } = require('near-api-js');
const path = require('path');
const homedir = require('os').homedir();

const CREDENTIALS_DIR = '.near-credentials';

const nearConfig = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.mainnet.near.org',
  helperUrl: 'https://helper.mainnet.near.org'
};

if (process.argv.length === 2) {
  console.info('Please enter in the form\nnode create-mainnet-account EXISTING_ACCOUNT.near NEW_ACCOUNT.near ED25519_PUBLIC_KEY\nIt will create an account with 3 Ⓝ if it\'s available');
  return;
}

AccountGoBrrr = {
  begin: async function() {
    const credentialsPath = path.join(homedir, CREDENTIALS_DIR);
    const keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);
    const near = await connect(Object.assign({ deps: { keyStore } }, nearConfig));
    const creatorAccount = await near.account(process.argv[2]);

    return await creatorAccount.functionCall(
      'near',
      'create_account',
      {
        new_account_id: process.argv[3],
        new_public_key: process.argv[4]
      },
      '300000000000000',
      utils.format.parseNearAmount(process.argv[5])
    )
  }
};

AccountGoBrrr.begin();
