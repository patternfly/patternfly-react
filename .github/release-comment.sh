#!/bin/bash
set -euo pipefail

if [[ ! -f .release/release.json ]]; then
  exit 0
fi

GH_REPO=${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}
RELEASE_COMMIT=$(node -p "require('./.release/release.json').sourceCommit")
PR_NUM=$(git log -1 --format="%s" "${RELEASE_COMMIT}^" | grep -Poe '#\d+' | tr -d '#') || true

if [[ -z "${PR_NUM}" ]]; then
  echo "No pull request number found in the merged commit; skipping release comment."
  exit 0
fi

if [[ -z "${GH_PR_TOKEN:-}" ]]; then
  echo "GH_PR_TOKEN is required to comment on the pull request."
  exit 1
fi

PAYLOAD=$(node --input-type=module -e '
  import { readFileSync } from "node:fs";
  const release = JSON.parse(readFileSync(".release/release.json", "utf8"));
  const versions = release.projects.map((name) => `${name}@${release.versionData[name].newVersion}`).join(", ");
  const url = `https://github.com/${process.env.GITHUB_REPOSITORY}/commit/${release.sourceCommit}`;
  process.stdout.write(JSON.stringify({ body: `Your changes have been released in: ${url}\n\n${versions}\n\nThanks for your contribution! :tada:` }));
')

COMMENTS_URL="https://api.github.com/repos/${GH_REPO}/issues/${PR_NUM}/comments"
echo "Adding release comment to PR #${PR_NUM}"
curl --fail-with-body -H "Authorization: token ${GH_PR_TOKEN}" -H "Accept: application/vnd.github+json" \
  --request POST "${COMMENTS_URL}" --data "${PAYLOAD}"
