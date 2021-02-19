A simple way to create NEAR mainnet accounts once you have an existing one.
Exposes you to the merry ways of [near-api-js](https://www.npmjs.com/package/near-api-js) as well.
Does not work with Ledger.

Node version 12+, please.

Before using, please install all npm packages with:

    npm i

### Usage

Arguments:

1. Existing mainnet account that will create the new account
2. New mainnet account name that doesn't exist ([check if one exists](https://docs.near.org/docs/tools/near-cli#near-state) with NEAR CLI)
3. Public key (See [generate-key docs](https://docs.near.org/docs/tools/near-cli#near-generate-key))
4. Initial balance amount. (Example: `3` would be 3 Ⓝ)

```
node create-mainnet-account.js creator.near newaccount.near P19ZkmB0H6hor3ZixxfCszgYn6beKqpkXa5553455g90 3
```
    
### Troubleshooting

If you're using NEAR CLI and thinks seem off, please make sure to prefix with the proper network. For example:

    NEAR_ENV=mainnet near state mike.near
    
If the account is available, you'll receive a very fun error message that contains the words:

>does not exist while viewing
