const jwt = require("jsonwebtoken");

const mandatoryAuth = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw new Error();
    }

    const token = req.header("Authorization").replace("Bearer ", "");

    const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

    if (!_id) {
      throw new Error();
    }

    req.userId = _id;
    next();
  } catch (e) {
    res.status(401).send({ error: "Invalid Token" });
  }
};

const optionalAuth = async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      const token = req.header("Authorization").replace("Bearer ", "");

      const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

      if (!_id) {
        throw new Error();
      }

      req.userId = _id;
    }

    next();
  } catch (e) {
    res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = { optionalAuth, mandatoryAuth };
