require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/UFh2C_BTbipCAwD1L50gAUsad2afwhx0',
      accounts: ['3a0ec3bda9aab3f9b6d27908e3eef1970926f98555e3b789de3d9dd116c581cb'],
    },
  },
};