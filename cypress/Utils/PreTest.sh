#!/bin/bash
# replacing placeholder strings with values from CircleCI ENV Variables

sed -i -e 's/$BACKEND_CONVERSATION_ID/'${BACKEND_CONVERSATION_ID//\//\\/}'/g' cypress.json # TO TEST THE SCRIPT