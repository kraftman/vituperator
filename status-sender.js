const axios = require('axios');
require('dotenv').config();
const uri = 'https://api.github.com'
const username = 'kraftman'
const repo = 'vituperator'
const hash = '3f40054320ebe7277e297f4877af473712da4cae';

const config = {
  method: 'POST',
  url: uri+`/repos/${username}/${repo}/statuses/${hash}`,
  headers: {
    Authorization: 'token '+process.env.GITHUB_TOKEN
  },
  data: {
    state: 'success',
    description: 'Coverage is good',
    context: 'vituperator'
  },
  json: true,
}

try {
  const result = axios(config)
  
} catch( err ) {
  console.log('unable to make request: ', err)
}