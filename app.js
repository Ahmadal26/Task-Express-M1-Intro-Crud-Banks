const express = require("express");
const PORT = 8000;
const accountRoutes = require("./api/accounts/accounts.routes");

const app = express();
app.use(express.json());

app.use("/accounts", accountRoutes);
app.listen(PORT, () => {
  console.log(`Server is working on port :${PORT}`);
});
