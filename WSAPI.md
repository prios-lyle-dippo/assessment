# WEBSOCKET IMPL

Connect to [socket.io](https://socket.io/) client;

The websocket implementation mirrors the REST implementation in terms of payload typings.

To push entity creation / updates use the convention

## CAUTION: WS WILL NOT VALIDATE SCHEMA TYPE

```ts
const socket = io('http://localhost:3000');
// socket.emit(<crud operation>-<entity namespace>, <data>)
socket.emit('create-author', {...})
// update can take the full author object
socket.emit('update-author', {...})
// delete only needs author id
socket.emit('delete-author', 'some author id')
```
