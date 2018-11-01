## **Create a todo**

This method creates a todo in our backend

- **URL**

  /todos/create

- **METHOD:**

  POST

- **URL Params**

  None

- **Data Params**

  `{ "author": "string", "completed": "boolean", "id": "string", "title": "string" }`

  **Required:**

  - author,+ title

    **Optional:**

  - completed

* **Success Response:**

  success

  - **Code:** 200 <br />
    **Content:** `"success"`

* **Error Response:**

  an err response

  - **Code:** 500 <br />
    **Content:** `"response goes here"`
