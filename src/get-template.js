const axios = require('axios');

const getTemplate = async (username, repo, branch, file = 'PULL_REQUEST_TEMPLATE.md') => {

  const url = `https://github.com/${username}/${repo}/raw/${branch}/${file}`;

  try {
    return await axios.get(url)
  } catch(err) {
    console.log('err:', err)
    return ''
  }
}

module.exports = {
  getTemplate
}

