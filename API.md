# TODO API

# REST IMPL

## Todo

_Get All TODOS_

path: "/todos"

method: GET

Returns an array of todos

_Get TODO_

path: "/todos/:id"

method: GET

Returns an array containing todo

_Create TODO_

path: "/todos/create"

method: POST

Create a todo request body

_Update TODO_

path: "/authors/update/:todoId"

method: POST

Update an author request body

_Delete TODO_

path: "/authors/delete/:todoId"

method: GET

## Author

_Get All AUTHORS_

path: "/authors"

method: GET

Returns an array of authors

_Get AUTHOR_

path: "/authors/:id"

method: GET

Returns an array containing author

_Create AUTHOR_

path: "/authors/create"

method: POST

Create a author request body

_Update AUTHOR_

path: "/authors/update/:authorId"

method: POST

Update an author request body

_Delete AUTHOR_

path: "/authors/delete/:authorId"

method: GET

# WEBSOCKET IMPL

Connect to [socket.io](https://socket.io/) client;

The websocket implementation mirrors the REST implementation in terms of payload typings.

To push entity creation / updates use the convention

```ts
const socket = io('http://localhost:3000');
// socket.emit(<crud operation>-<entity namespace>, <data>)
socket.emit('create-author', {...})
// update can take the full author object
socket.emit('update-author', {...})
// delete only needs author id
socket.emit('delete-author', 'some author id')
```
