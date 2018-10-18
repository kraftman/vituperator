request({
          method: 'POST',
          uri: `https://api.github.com/repos/kraftman/vituperator/statuses/${gitSha}`,
          headers: {
            Authorization: 'MAGICPASSWORD'
          },
          body: {
            state: 'success',
            target_url: `http://test-auto-coverage.tphub-dev.moveaws.com/api/v1/coverage?repo=${repo}&branch=${branch}&git_sha=${gitSha}`,
            description: 'Coverage is good',
            context: 'continuous-integration/jenkins'
          },
          json: true,
        })
        