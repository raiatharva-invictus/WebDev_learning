

// Select the database to use.
use('dbcreatedusingVSCodeviamongodbplayground');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { "name": "Priya", "course": "web_dev" },
  { "name": "Rahul", "course": "data_science" },
  { "name": "Sneha", "course": "mobile_dev" },
  { "name": "Arjun", "course": "web_dev" },
  { "name": "Kavya", "course": "cloud_computing" },
  { "name": "Vikram", "course": "web_dev" },
  { "name": "Ananya", "course": "ai_ml" },
  { "name": "Rohan", "course": "cybersecurity" },
  { "name": "Divya", "course": "web_dev" },
  { "name": "Karan", "course": "devops" }
]);

console.log('done inserting the data');
