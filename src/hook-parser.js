

const parse = (hookData) => {
  const pullRequest = hookData.pull_request;
  const validPullRequestActions = ['edited', 'opened']
  if (!pullRequest || !validPullRequestActions.includes(hookData.action)) {
    return null;
  }
  return {
    branch: pullRequest.merge_commit_sha,
    statusURL: pullRequest.statuses_url,
    title: pullRequest.title,
    body: pullRequest.body,
  }
}

module.exports = {
  parse
};