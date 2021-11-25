const userService = require("../service/user");

module.exports.signup = async (req, res) => {
  try {
    const user = await userService.signup(req.body);
    res.send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports.login = async (req, res) => {
  console.log("login");
  try {
    const user = await userService.login(req.body);
    res.send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports.getAccount = async (req, res) => {
  try {
    const account = await userService.getAccount(req.userId);
    res.send(account);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports.getLibrary = async (req, res) => {
  const userId = req.userId

  try {
    const library = await userService.getLibrary(userId);
    res.send(library);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports.getUserId = async (req, res) => {
  const userId = req.userId;

  if (userId) {
    res.send(userId);
  } else {
    res.status(400).send({ error: e.message });
  }
};

module.exports.emailAvailability = async (req, res) => {

  const email = req.body.email

  userService
    .emailAvailability(email)
    .then((available) => {
      res.send(available);
    })
    .catch((e) => {
      console.error(e)
      res.status(500).send();
    });
};
