const authService = require('../service/authService')

const mandatoryAuth = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw new Error();
    }

    const token = req.header("Authorization")

    const userId = await authService.getUserIdByToken(token)

    console.log(userId)
    if (!userId) {
      throw new Error();
    }

    req.userId = userId;
    next();
  } catch (e) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

const optionalAuth = async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      const token = req.header("Authorization").replace("Bearer ", "");

      const userId = await authService.getUserIdByToken(token)

      if (!userId) {
        throw new Error();
      }

      req.userId = userId;
    }

    next();
  } catch (e) {
    res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = { optionalAuth, mandatoryAuth };
