---
layout: default
permalink: /git/
---
# Git Best Practices for Enterprise Application

We settled on a workflow called Git Flow, but instead of branching features from dev, we branch them from the current release. This makes us able to work on seperate issues in different speeds. If they are successful in QA, they go into the release(production).

Regarding branches and deployment:

The "dev" branch is deployed automatically to test servers(it may be internal server).
The "current" release branch is deployed automatically to staging servers.
The "master" branch is deployed manually to live servers by the release-master.

The workflow is the following:

1. Create a release branch from master in the beginning of each release/sprint, e.g. release/2015-may .
2. Create a dev branch from release/2016-jan
3. Working on a new feature, branch from release and name it feature/ISSUE_NUMBER.
4. Work on your feature.
5. When it's ready for testing, merge it into dev.
6. If it's accepted, merge it into the current release branch.
7. If it's not accepted, go to step 4.
8. When the release is ready, merge it into master


After the release has been deployed to live and a critical bug is discovered, we branch a bugfix branch from master (e.g. bugfix/ISSUE_NUMBER), merge it back into master and deploy again.