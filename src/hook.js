

const username = 'kraftman';
const repo = 'vituperator'
const getTemplate = require('./src/get-template.js')
const sendStatus = require('./status-sender.js');

const handlePRUpdate = async (body) => {
  const parsedHook = hookParser.parse(body)
  const template = getTemplate(username, repo, parsedHook.branch)
  const validation = prValidator.validate(parsedHook, template);
  const result = sendStatus(parsedHook.statusURL)
}

const test = async (req, res) => {
  await handlePRUpdate(req.body)
  res.send('ok')
}

module.exports = test