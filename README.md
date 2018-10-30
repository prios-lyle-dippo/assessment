# Application Assessment

# Objective

Build a responsive SPA with a modern framework (or no framework) of your choice against the provided TODO application API. Utilize any libraries that you wish but please provide a rationale for the external tools you chose to use.

There is a REST implementation & a WS implementation available for reading todos.

Write this app in a way that is true to your engineering style, we want to get to know you.

# Required Features:

- App must display a responsive grid of todo items, 1 box wide on mobile, 3 box wide tablet, 8 box wide desktop.
- App must display a title bar above the grid
- The title bar will filter todos by author name, todo name & creation date
- The title bar will have a text input or trigger a modal where a todo may be created
- Grid must be able to fetch additional todos as they come in
- Todo items will be marked complete on click / touch
- Utilize a clearly defined state management pattern

# Optional Features

- Implement a light & dark mode
- Allow Grid to infinitely scroll
- Allow the UI to update in real time utilizing the websocket API
- Give todos a close button and add editing functionality
- Animate the todo item's entrance/exit form the dom
- Todo grid tiles are colored randomly with text remaining legibile
- Create and optimize an application build for deployment as a static web app
- Write an e2e test
