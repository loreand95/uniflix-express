const axios = require('axios');

module.exports.getUserIdByToken = async (token) => {
  const res = await axios.get('http://localhost:3000/rest/users/me/id',{
      headers: {'Authorization': token}
  })

  return res.data
};
