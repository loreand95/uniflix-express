const axios = require('axios');

module.exports.getUserIdByToken = async (token) => {

  const res = await axios.get(process.env.USER_SERVICE_URI+'/users/me/id',{
      headers: {'Authorization': token}
  })

  return res.data
};
