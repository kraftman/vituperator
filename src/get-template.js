const axios = require('axios');

const getTemplate = async (username, repo, branch, file = 'PULL_REQUEST_TEMPLATE.md') => {

  const url = `https://github.com/${username}/${repo}/raw/${branch}/${file}`;

  try {
    const result = await axios.get(url)
    return result.data;
  } catch(err) {
    console.log('err:', err)
    return ''
  }
}

module.exports = {
  getTemplate
}

