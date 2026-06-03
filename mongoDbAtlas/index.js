import { MongoClient } from "mongodb";

const uri =
  "mongodb://piyush_razputt:i3ldSAy8O9JD7lcu@ac-jswpjgd-shard-00-00.fblfr5h.mongodb.net:27017,ac-jswpjgd-shard-00-01.fblfr5h.mongodb.net:27017,ac-jswpjgd-shard-00-02.fblfr5h.mongodb.net:27017/?ssl=true&replicaSet=atlas-2kbpg7-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("MongoDb connected Successfully");
  const db = client.db("myDatabase");
} catch (err) {
  console.error("connection error:", err);
} finally {
  await client.close();
}
