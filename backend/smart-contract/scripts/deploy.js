async function main() {
  const Payable = await ethers.getContractFactory("Payable");
  const payable = await Payable.deploy({ value: ethers.utils.parseEther("1") });
  await payable.deployed();
  console.log("Payable deployed to:", payable.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
