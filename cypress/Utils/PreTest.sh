#!/bin/bash
# replacing placeholder strings with values from CircleCI ENV Variables

sed -i -e 's/$CYPRESS_SLACK_URL/'${CYPRESS_SLACK_URL//\//\\/}'/g' cypress.json # for the baseURL
sed -i -e 's/$CYPRESS_PROJECT_ID/'${CYPRESS_PROJECT_ID//\//\\/}'/g' cypress.json # for the projectID
sed -i -e 's/$CYPRESS_DASHBOARD_KEY/'${CYPRESS_DASHBOARD_KEY//\//\\/}'/g' package.json # for the DashboardID