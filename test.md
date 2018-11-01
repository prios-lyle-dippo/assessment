


**Get all authors**
----
  This method gets all authors in our backend

* **URL**

  /authors

* **METHOD:**
  
  GET
  
*  **URL Params**

   None

* **Data Params**

```js
{
    "id": "string",
    "jobTitle": "string",
    "name": "string",
    "authors": "Array<string>"
}
```

**Required:**
 
  None

**Optional:**
 
   None



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
[
    {
        "id": "23924ff5-5a94-48ba-8a68-2e00c5bcd12a",
        "name": "Nikki Greenholt",
        "todos": [
            "9e4d5d8f-d27b-4dc4-b510-aa72003f807d",
            "78e569cd-747d-4236-b434-8d097431ca1c",
            "657ccfce-312f-43d8-870d-4e38e340c318",
            "7e1aced5-1268-4152-9436-94bdc027c3af"
        ],
        "meta": {
            "revision": 4,
            "created": 1541079145492,
            "version": 0,
            "updated": 1541079146502
        },
        "$loki": 1
    },
    {
        "id": "5b5b1569-5d0c-47d5-b670-2499dcfafe79",
        "name": "Freida Rempel",
        "todos": [
            "4f0a8d82-3762-4cac-bcf5-61e6c54d1ee4",
            "e7e7e13a-f3af-4d0d-85c8-343d20f56bf7",
            "ef0cab2c-02fd-42e1-a83e-ce04c310db25",
            "15b58c6c-f365-4622-aa16-bb75633d6fc2",
            "1a08e46e-59d1-4bcd-b664-8fd6de2cde53"
        ],
        "meta": {
            "revision": 5,
            "created": 1541079145492,
            "version": 0,
            "updated": 1541079145499
        },
        "$loki": 2
    },
    {
        "id": "dc083011-9f7d-43c6-be02-eec2fab0a967",
        "name": "Cletus Altenwerth",
        "todos": [
            "1abbebe0-e079-480a-a16f-35a5fe8b9430",
            "acb0c2c3-6158-45fb-b31a-b4da3f500f96",
            "fcff279e-dade-49d8-ae7b-1daa5df245ee",
            "25e93dab-96f5-407f-8a5c-4695873868cc",
            "dbf11984-3293-40ca-be40-85f284a2e6c9"
        ],
        "meta": {
            "revision": 5,
            "created": 1541079145492,
            "version": 0,
            "updated": 1541079145499
        },
        "$loki": 3
    },
    {
        "id": "2e25fb78-3a31-48b3-a534-66d17610fb94",
        "name": "Kellie Beier",
        "todos": [
            "746d776a-5e28-4c00-8800-904efa2f5df7",
            "ba86e667-0ecb-4f6b-85eb-528c343e33bb",
            "26f223db-35f4-44e7-8c7a-4d0c94eaa041",
            "1e2db964-ce2d-4fa6-8f6a-5b1dca2f8c5d",
            "f61d0795-4b53-4db7-ba09-805441c663ce"
        ],
        "meta": {
            "revision": 5,
            "created": 1541079145492,
            "version": 0,
            "updated": 1541079145499
        },
        "$loki": 4
    },
    {
        "id": "26b74799-6801-468c-b114-bf47685c5469",
        "name": "Hannah Erdman",
        "todos": [
            "3f743d9e-5fc9-4fbe-b1a9-7edf29368aaf",
            "acee8fae-62e5-49bf-88d2-7cba0235725c",
            "320d1c84-1060-4637-9fd8-3190ae297f81"
        ],
        "meta": {
            "revision": 3,
            "created": 1541079145492,
            "version": 0,
            "updated": 1541079147505
        },
        "$loki": 5
    },
    {
        "id": "9787a400-6517-4028-873f-f504401ef598",
        "name": "Lilla Leffler",
        "todos": [],
        "meta": {
            "revision": 0,
            "created": 1541079146502,
            "version": 0
        },
        "$loki": 6
    }
]
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not get authors"
}
```



**Create a author**
----
  This method creates a author in our backend

* **URL**

  /authors/create

* **METHOD:**
  
  POST
  
*  **URL Params**

   None

* **Data Params**

```js
{
    "id": "string",
    "jobTitle": "string",
    "name": "string",
    "authors": "Array<string>"
}
```

**Required:**
 
  
- "jobTitle"
- "name"


**Optional:**
 
   + todos



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



**Delete a author**
----
  This method updates a author in our backend

* **URL**

  /authors/delete/:authorId

* **METHOD:**
  
  POST
  
*  **URL Params**

   
- {"authorId":"string"}


* **Data Params**

```js
{
    "id": "string",
    "jobTitle": "string",
    "name": "string",
    "authors": "Array<string>"
}
```

**Required:**
 
  
- "id"
- "jobTitle"
- "name"
- "todos"


**Optional:**
 
   



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
{
    "message": "Deleted Successfully"
}
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not delete"
}
```



**Update a author**
----
  This method updates a author in our backend

* **URL**

  /authors/update/:authorId

* **METHOD:**
  
  POST
  
*  **URL Params**

   
- {"authorId":"string"}


* **Data Params**

```js
{
    "id": "string",
    "jobTitle": "string",
    "name": "string",
    "authors": "Array<string>"
}
```

**Required:**
 
  
- "id"
- "jobTitle"
- "name"
- "todos"


**Optional:**
 
   



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
{
    "message": "Updated Successfully",
    "data": {
        "id": "9787a400-6517-4028-873f-f504401ef598",
        "name": "Lilla Leffler",
        "todos": [
            "0000-0000-0000-0001"
        ]
    }
}
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not update",
    "error": {
        "kind": "DecoderError",
        "input": {
            "id": "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
            "title": "Take out the trash",
            "completed": true
        },
        "at": "input",
        "message": "the key 'author' is required but was not present"
    }
}
```



**Get all todos**
----
  This method gets all todos in our backend

* **URL**

  /todos

* **METHOD:**
  
  GET
  
*  **URL Params**

   None

* **Data Params**

```js
{
    "author": "string",
    "completed": "boolean",
    "id": "string",
    "title": "string"
}
```

**Required:**
 
  None

**Optional:**
 
   None



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
[
    {
        "id": "4b3e04a5-c9d7-48af-bae9-d99fd575556a",
        "title": "generate bleeding-edge",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920116,
            "version": 0
        },
        "$loki": 1
    },
    {
        "id": "74c92d86-578a-4277-beef-31277fba6ee1",
        "title": "primary Generic Metal Hat Supervisor",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920117,
            "version": 0
        },
        "$loki": 2
    },
    {
        "id": "897e3154-15c4-4359-99ab-2fbb9e0b5def",
        "title": "Strategist",
        "author": "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920117,
            "version": 0
        },
        "$loki": 3
    },
    {
        "id": "329db0aa-3639-4008-9031-295e666023ec",
        "title": "azure Borders Berkshire",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 4
    },
    {
        "id": "5b8fd597-9ecb-4698-ae54-abd86897db18",
        "title": "mission-critical Philippines",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": true,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 5
    },
    {
        "id": "acd1081d-0aa8-4f67-991b-178ba07c58b1",
        "title": "cross-platform Rubber",
        "author": "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 6
    },
    {
        "id": "aa3f6e20-957b-4d74-933a-60c45af76846",
        "title": "RAM Awesome",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 7
    },
    {
        "id": "1889d8a5-bd28-451f-90bc-2a97b45f1ae5",
        "title": "Incredible Metal Fish Administrator Sri Lanka",
        "author": "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 8
    },
    {
        "id": "841ef946-cc89-4ff6-880c-fd516db1368a",
        "title": "Granite Ways",
        "author": "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 9
    },
    {
        "id": "27eb0b7c-1be2-4b84-aa80-c38ddbbbdbd5",
        "title": "Computers Chips tan",
        "author": "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 10
    },
    {
        "id": "563f9203-b661-4b3d-a682-6600399bc4b2",
        "title": "lavender bifurcated",
        "author": "6dff0f7d-a08b-457e-b781-35a2bff35bf7",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920118,
            "version": 0
        },
        "$loki": 11
    },
    {
        "id": "ad10d246-ee8c-4e49-a177-c2aae0957b55",
        "title": "Frozen Shoes repurpose",
        "author": "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 12
    },
    {
        "id": "192411b9-b678-4b49-9266-ecf88baa5d05",
        "title": "Senior",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 13
    },
    {
        "id": "2bcb311f-1275-467e-b6ef-88c4c5508bc5",
        "title": "programming Bacon methodologies",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": true,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 14
    },
    {
        "id": "a4cb6d64-eb2f-4aa2-a2e6-0b2d22c867f0",
        "title": "Tunisian Dinar",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 15
    },
    {
        "id": "53af2361-bd0f-48a7-bcbd-2157efa77405",
        "title": "Books",
        "author": "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 16
    },
    {
        "id": "2f5d3cc0-1f12-4ce7-8068-ef522ee51189",
        "title": "Dynamic Auto Loan Account Borders",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 17
    },
    {
        "id": "aacd6cd5-fd91-4f55-a8ec-6a06091a5a1b",
        "title": "Cambridgeshire",
        "author": "6dff0f7d-a08b-457e-b781-35a2bff35bf7",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 18
    },
    {
        "id": "bea3c82b-29e5-426c-9d8b-fa2bf49018d2",
        "title": "FTP Ergonomic",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": true,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 19
    },
    {
        "id": "a3d41c9c-84b7-49cc-bd23-d41ee2bb724b",
        "title": "Specialist client-server Gorgeous",
        "author": "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076920119,
            "version": 0
        },
        "$loki": 20
    },
    {
        "id": "61708375-7cb4-45ee-9cdc-d6a3835fed48",
        "title": "Incredible Frozen Salad Money Market Account Chief",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076921126,
            "version": 0
        },
        "$loki": 21
    },
    {
        "id": "030deb09-7786-4e27-8710-ddd63d1ec02f",
        "title": "copying",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076922129,
            "version": 0
        },
        "$loki": 22
    },
    {
        "id": "f79a21c2-167b-4de1-bc64-50e0748e0413",
        "title": "strategic",
        "author": "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076923130,
            "version": 0
        },
        "$loki": 23
    },
    {
        "id": "9e7aed27-1f71-41fa-8244-3a7c9fac4861",
        "title": "Health",
        "author": "0b7417ef-1413-46e6-9b53-2eac468c2801",
        "completed": false,
        "meta": {
            "revision": 0,
            "created": 1541076924132,
            "version": 0
        },
        "$loki": 24
    }
]
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not get todos"
}
```



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

```js
{
    "author": "string",
    "completed": "boolean",
    "id": "string",
    "title": "string"
}
```

**Required:**
 
  
- "author"
- "title"


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



**Delete a todo**
----
  This method updates a todo in our backend

* **URL**

  /todos/delete/:todoId

* **METHOD:**
  
  POST
  
*  **URL Params**

   
- {"todoId":"string"}


* **Data Params**

```js
{
    "author": "string",
    "completed": "boolean",
    "id": "string",
    "title": "string"
}
```

**Required:**
 
  
- "author"
- "title"
- "completed"
- "id"


**Optional:**
 
   



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
{
    "message": "Deleted Successfully"
}
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not delete"
}
```



**Update a todo**
----
  This method updates a todo in our backend

* **URL**

  /todos/update/:todoId

* **METHOD:**
  
  POST
  
*  **URL Params**

   
- {"todoId":"string"}


* **Data Params**

```js
{
    "author": "string",
    "completed": "boolean",
    "id": "string",
    "title": "string"
}
```

**Required:**
 
  
- "author"
- "title"
- "completed"
- "id"


**Optional:**
 
   



* **Success Response:**
  
  success

  * **Code:** 200 <br />
    **Content:**
```js
{
    "message": "Updated Successfully",
    "data": {
        "id": "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
        "title": "Take out the trash",
        "author": "0000-0000-0000-0001",
        "completed": true
    }
}
```    
 
* **Error Response:**

  an err response

  * **Code:** 500 <br />
    **Content:** 
```js
{
    "message": "Could not update",
    "error": {
        "kind": "DecoderError",
        "input": {
            "id": "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
            "title": "Take out the trash",
            "completed": true
        },
        "at": "input",
        "message": "the key 'author' is required but was not present"
    }
}
```
