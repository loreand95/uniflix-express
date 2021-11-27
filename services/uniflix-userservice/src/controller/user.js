const userService = require("../service/user");

module.exports.signup = async (req, res) => {
  const user = ({ fullname, email, password } = req.body);

  try {
    const newUser = await userService.signup(user);
    res.send(newUser);
  } catch (e) {
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    res.send(user);
  } catch (e) {
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  }
};

module.exports.getAccount = async (req, res) => {
  try {
    const account = await userService.getAccount(req.userId);
    res.send(account);
  } catch (e) {
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  }
};

module.exports.getLibrary = async (req, res) => {
  const userId = req.userId;

  try {
    const library = await userService.getLibrary(userId);
    res.send(library);
  } catch (e) {
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  }
};

module.exports.getUserId = async (req, res) => {
  const userId = req.userId;

  if (userId) {
    res.send(userId);
  } else {
    e.status ? res.status(e.status).send(e.message) : res.status(500).send();
  }
};

module.exports.emailAvailability = async (req, res) => {
  const email = req.body.email;

  userService
    .emailAvailability(email)
    .then((available) => {
      res.send({email:available});
    })
    .catch((e) => {
      e.status ? res.status(e.status).send(e.message) : res.status(500).send();
    });
};
