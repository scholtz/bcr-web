const BCRToken = artifacts.require("BCRToken");

module.exports = async function (deployer) {
  deployer.deploy(BCRToken);
};
