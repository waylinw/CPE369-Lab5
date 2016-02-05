/**CSC 369 Lab 5
 Waylin Wang
 BeFuddled Dataset */

conn = new Mongo("cslvm31:27017");
db = conn.getDB("wwang16");

print("query 1\n");
cursor = db.thghtShreTest.aggregate( {$group : {_id : "$status", messages:{$sum:1}}}, {$sort : {messages: -1}}, {$limit: 1}, {$project : {"status":"$_id", "messages":"$messages", _id:0}}).pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 2\n");
cursor = db.thghtShreTest.aggregate( {$group : {_id : "$user", "recepients":{ $addToSet: "$recepient"}}}, {$project: {"user":"$_id", "recepients":"$recepients", _id:0}} ).pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 3\n");
cursor = db.thghtShreTest.aggregate( {$group : {_id : "$user", "recepients":{ $addToSet: "$recepient"}}}, {$project: {"user":"$_id", "recepients":{$size:"$recepients"}, _id:0 }} ).pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 4\n");
cursor = db.thghtShreTest.aggregate({"\$match": {"recepient":"self"}}, {"$group": {"_id":"$status", count:{$sum:1}}}, {$sort:{count:-1}}, {$project: {"status":"$_id", "selfAddressed":"$count", _id:0}}, {$limit:1}).pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 5\n");
cursor = db.thghtShreTest.aggregate( {$group : {_id : "$user","te":{ $addToSet: "$text"}}}, {$match: {"te.1":{$exists: true}}},{$sort:{"_id":1}}, {$project: {"user":"$_id", "text": {$slice: ["$te",{$subtract : [{$size:"$te"}, 2]} ,1]}, _id:0}})
    .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");
