


**Create a todo**
----
  This method creates a todo in our backend

* **URL**

  /todos/create

* **METHOD:**
  
  POST
  
*  **URL Params**

   None

* **Data Params**

   `{
    "author": "string",
    "completed": "boolean",
    "id": "string",
    "title": "string"
}`

   **Required:**
 
  + author,+ title

   **Optional:**
 
   + completed



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
    ```js
    {
    "message": "Created successfully",
    "data": {
        "title": "Take out the trash",
        "author": "0000-0000-0000-0001"
    }
}
    ```
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
    ```js
    {
    "message": "Could not create",
    "error": {
        "kind": "DecoderError",
        "input": {
            "title": "Take out the trash"
        },
        "at": "input",
        "message": "the key 'author' is required but was not present"
    }
}
    ```
