# Vituperator

[![Code Coverage][coverage-badge]][coverage]

Vituperate
- Blame or insult (someone) in strong or violent language.

This is a simple tool to enforce some standards with pull requests and reduce cross-boundary movement.

- Fails any PR's that contain only a ticket ID
- Fails any PR's that don't have an updated description

Phase 1:
Check the title isnt just a ticket number
Check the body isnt the same as the pull request template

Phase 2: 
Slack integration: request review once all other checks have passed

Phase 3: 
Assign requestors only once all checks have passed, to avoid excess spam
