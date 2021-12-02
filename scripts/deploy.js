const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Clementine", "Lee", "Kenny"],       // Names
    ["https://i.imgur.com/Q93aRYR.png", // Images
    "https://i.imgur.com/kF0m3hz.png", 
    "https://i.imgur.com/b0diQge.png"],
    [30, 90, 70],                    // HP values
    [40, 50, 30],                       // Attack damage values
    "Walker", // Boss name
    "https://i.imgur.com/zrw56nN.png", // Boss image
    150, // Boss hp
    60 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();