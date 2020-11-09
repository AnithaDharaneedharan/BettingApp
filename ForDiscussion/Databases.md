What is the main difference between these two functions? 
Why is one better than the other?

const db = myDatabaseManager;

const myDbFunc = async (data) => {
    await db(INSERT INTO table (id,name,age) 
    VALUES(${data.id},“{data.name}”, ${data.age}) 
    ON DUPLICATE KEY UPDATE name =‘${data.name}”,age=${data.age};‘)
    }
    
const myOtherDbFunc = async (data) => {    
    const updatedRows = await db(`UPDATE table SET (name, age) VALUES ("${data.name}",${data.age}) WHERE id = ${data.id} RETURNING *;`)    
    // If no rows were updated    
    if (!updatedRows) {
        await db(`INSERT INTO table (id, name, age) VALUES(${data.id},"${data.name}", ${data.age});`)
    }}


   ##  What is the main difference between these two functions?

     

    1. The first function performs the Insert operation followed by Update .The values are inserted into the table in case the key is unique  , if it finds a duplicate key update of the values is done. The second function performs the update of values in the table , if no update happens which means the key is not already present , then Insert occurs.
    
    2. The first function is heavily dependent on Database whereas the second is SQL dependent ie. programatic logic.
    
    3. With respect to the first function, there is a single I/O operation between app and database whereas there are multiple I/O between app and database
    
    4. Since the first function is database dependent , when migration of database occurs code will be affected.
    
    5. Multiple operations on the app affects the performance.


   ## Why is one better than the other?
   
 I have listed pros and cons of both the approaches.
 Depending on whether it is cheaper to scale up the database or app , we need to choose either the first approach or second approach. 
 If we can scale up DB easily then first approach is better and if it is easier to scale up the application server second approach is better.

