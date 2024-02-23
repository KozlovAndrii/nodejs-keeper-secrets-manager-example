const {
  initializeStorage,
  localConfigStorage,
  getSecrets,
} = require("@keeper-security/secrets-manager-core");

require("dotenv").config();

async function getKeeperRecords() {
  const localStorage = localConfigStorage(`${__dirname}/config.json`);

  const oneTimeToken = process.env.KEEPER_SECRETS_MANAGER_ONE_TIME_TOKEN;
  await initializeStorage(localStorage, oneTimeToken);

  return getSecrets({ storage: localStorage });
}

const keeperSecretsRecords = getKeeperRecords();

module.exports = keeperSecretsRecords;
