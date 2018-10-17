

const validateTitle = (title) => {
  title = title.trim()
  if (title.match(/\w+\-\d+/g)) {
    validation.state = 'failure'
    validation.description = 'Title needs description not just ticket ID'
  }
}

const validateBody = (validation, body, template) => {
  if (body !== template) {
    return
  }
  validation.state = 'failure'
  validation.description = 'Description has not been updated'
}

const validate = (parsedHook, template) => {
  const validation = {
    state: 'success',
    description: 'All checks passed'
  }
  
  validateTitle(parsedHook.title)
  
  validateBody(parsedHook.body, template)
  return validation
}

module.exports = {
  validate
}