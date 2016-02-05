/**CSC 369 Lab 3
Waylin Wang
BeFuddled Dataset */

conn = new Mongo("cslvm31:27017");
db = conn.getDB("wwang16");

print("query 1\n");
cursor = .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 2\n");
cursor = .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 3\n");
cursor = .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 4\n");
cursor = .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");

print("query 5\n");
cursor = .pretty();
while ( cursor.hasNext() ) {
    printjson( cursor.next() );
}
print("------------------------------");
