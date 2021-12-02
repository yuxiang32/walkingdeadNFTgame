const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Clementine", "Lee", "Kenny"],       // Names
    ["https://static.wikia.nocookie.net/walkingdead/images/3/3a/TUB_Clementine_Best_Smile.png/revision/latest?cb=20190328140113", // Images
    "https://static.wikia.nocookie.net/walkingdead/images/8/86/BT_Lee.png/revision/latest?cb=20190115105044", 
    "https://static.wikia.nocookie.net/walkingdead/images/6/67/TTW_Kenny_Glad.png/revision/latest?cb=20170426063914"],
    [30, 90, 70],                    // HP values
    [40, 50, 30],                       // Attack damage values
    "Walker", // Boss name
    "https://static.wikia.nocookie.net/walkingdead/images/9/9b/LeesWalker.png/revision/latest?cb=20130902203234", // Boss image
    150, // Boss hp
    60 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  console.log("Done deploying and minting!");
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

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