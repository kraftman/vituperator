

const parse = (hookData) => {
  const pullRequest = hookData.pull_request;
  return {
    hash: pullRequest.merge_commit_sha,
    statusURL: pullRequest.statuses_url,
    title: pullRequest.title,
    body: pullRequest.body,
  }
}

module.exports = {
  parse
};