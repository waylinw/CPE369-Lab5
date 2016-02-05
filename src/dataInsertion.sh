#!/usr/bin/env bash

echo "conn = new Mongo(\"cslvm31:27017\");" > insert.js
echo "db = conn.getDB(\"wwang16\");" >> insert.js
echo -n "beFuddledDoc = " >> insert.js

cat beFuddled.Json >> insert.js

echo -n "thghtShreDoc = " >> insert.js
cat thghtShre.Json >> insert.js


echo "" >> insert.js
echo "db.beFuddledTest.insert(beFuddledDoc);" >> insert.js
echo "db.thghtShreTest.insert(thghtShreDoc);" >> insert.js


mongo insert.js