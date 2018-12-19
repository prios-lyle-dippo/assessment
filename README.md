# Application Assessment

# Objective

Build a responsive (optional if creating native project) SPA with a modern framework (or no framework) of your choice against the provided TODO application API. Utilize any libraries that you wish but please provide a rationale for the external tools you chose to use.

There is a REST implementation & a WS implementation available for reading todos.

Write this app in a way that is true to your engineering style, we want to get to know you. Feel free to use any libraries to accomplish your task but you should be able to justify your decisions. 

Upon reaching the point at which you decide to stop, please include some brief notes as to what remaining work you would have liked to get done and what technical debt you would plan to address at a later time.

# Required Features:

- [WEBAPP ONLY] App must display a responsive grid of todo items, 1 box wide on mobile, 3 box wide tablet, 8 box wide desktop.
- [NATIVE ONLY] App must display a list of todo items
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

# Getting Started

Install dependencies using
`yarn` or `npm i`

Run application backend `npm start`
