

const username = 'kraftman';
const repo = 'vituperator';
const hookParser = require('./hook-parser.js');
const templateLoader = require('./get-template.js');
const statusSender = require('./status-sender.js');
const prValidator = require('./pr-validator.js')

const handlePRUpdate = async (body) => {
  const parsedHook = hookParser.parse(body)
  if (!parsedHook) {
    return;
  }
  const template = await templateLoader.getTemplate(username, repo, parsedHook.branch)
  const validation = prValidator.validate(parsedHook, template);
  const result = await statusSender.send(parsedHook.statusURL, validation)
  // console.log(result)
  return result
}

module.exports = {
  handlePRUpdate
}