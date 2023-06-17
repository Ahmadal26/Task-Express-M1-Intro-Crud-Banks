let accounts = require("../../accounts");

exports.getAllAccounts = (req, res) => {
  return res.status(200).json(accounts);
};

exports.creatNewAccount = (req, res) => {
  const newId = accounts[accounts.length - 1].id + 1;
  accounts.push({ ...req.body, id: newId, funds: 0 });
  return res.status(201).json(accounts);
};
exports.deletAccount = (req, res) => {
  const { accountId } = req.params;
  accounts = accounts.filter((account) => account.id != accountId);
  return res.status(204).json({ msg: "Deleted !!! " });
};
exports.updateAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((acc) => acc.id == accountId);
  if (!account)
    return res.status(404).json({
      mag: "Account not found !",
    });
  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;
  return res.status(200).json(account);
};
