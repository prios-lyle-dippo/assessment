import { TemplateParams } from "../generate-docs";
import { Todo } from "../models";

type TodoParamsType = { [K in keyof Todo]: string };
class TodoParams implements TodoParamsType {
  author = "string";
  completed = "boolean";
  id = "string";
  title = "string";
}
const requiredTodoParams: Array<keyof Todo> = ["author", "title"];
const optionalTodoParams: Array<keyof Todo> = ["completed"];
const requiredTodoUpdateParams: Array<keyof Todo> = [
  "author",
  "title",
  "completed",
  "id"
];
const optionalTodoUpdateParams: Array<keyof Todo> = [];

const createTodo: TemplateParams<Todo> = {
  dataParams: new TodoParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not create",
      error: {
        kind: "DecoderError",
        input: {
          title: "Take out the trash"
        },
        at: "input",
        message: "the key 'author' is required but was not present"
      }
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredTodoParams,
  optionalParams: optionalTodoParams,
  successResponse: {
    description: "success",
    response: {
      message: "Created successfully",
      data: {
        title: "Take out the trash",
        author: "0000-0000-0000-0001"
      }
    },
    statusCode: 200
  },
  title: {
    header: "Create a todo",
    description: "This method creates a todo in our backend"
  },
  url: "/todos/create"
};

const updateTodo: TemplateParams<Todo> = {
  dataParams: new TodoParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not update",
      error: {
        kind: "DecoderError",
        input: {
          id: "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
          title: "Take out the trash",
          completed: true
        },
        at: "input",
        message: "the key 'author' is required but was not present"
      }
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredTodoUpdateParams,
  optionalParams: optionalTodoUpdateParams,
  successResponse: {
    description: "success",
    response: {
      message: "Updated Successfully",
      data: {
        id: "4420944c-45ba-4399-a7e7-0b9ecb9ad25d",
        title: "Take out the trash",
        author: "0000-0000-0000-0001",
        completed: true
      }
    },
    statusCode: 200
  },
  title: {
    header: "Update a todo",
    description: "This method updates a todo in our backend"
  },
  url: "/todos/update/:todoId",
  urlParams: [{ todoId: "string" }]
};

const deleteTodo: TemplateParams<Todo> = {
  dataParams: new TodoParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not delete"
    },
    statusCode: 500
  },
  method: "POST",
  requiredParams: requiredTodoUpdateParams,
  optionalParams: optionalTodoUpdateParams,
  successResponse: {
    description: "success",
    response: {
      message: "Deleted Successfully"
    },
    statusCode: 200
  },
  title: {
    header: "Delete a todo",
    description: "This method updates a todo in our backend"
  },
  url: "/todos/delete/:todoId",
  urlParams: [{ todoId: "string" }]
};

const getTodo: TemplateParams<Todo> = {
  dataParams: new TodoParams(),
  errorResponse: {
    description: "an err response",
    response: {
      message: "Could not get todos"
    },
    statusCode: 500
  },
  method: "GET",
  successResponse: {
    description: "success",
    response: [
      {
        id: "4b3e04a5-c9d7-48af-bae9-d99fd575556a",
        title: "generate bleeding-edge",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920116,
          version: 0
        },
        $loki: 1
      },
      {
        id: "74c92d86-578a-4277-beef-31277fba6ee1",
        title: "primary Generic Metal Hat Supervisor",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920117,
          version: 0
        },
        $loki: 2
      },
      {
        id: "897e3154-15c4-4359-99ab-2fbb9e0b5def",
        title: "Strategist",
        author: "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920117,
          version: 0
        },
        $loki: 3
      },
      {
        id: "329db0aa-3639-4008-9031-295e666023ec",
        title: "azure Borders Berkshire",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 4
      },
      {
        id: "5b8fd597-9ecb-4698-ae54-abd86897db18",
        title: "mission-critical Philippines",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: true,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 5
      },
      {
        id: "acd1081d-0aa8-4f67-991b-178ba07c58b1",
        title: "cross-platform Rubber",
        author: "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 6
      },
      {
        id: "aa3f6e20-957b-4d74-933a-60c45af76846",
        title: "RAM Awesome",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 7
      },
      {
        id: "1889d8a5-bd28-451f-90bc-2a97b45f1ae5",
        title: "Incredible Metal Fish Administrator Sri Lanka",
        author: "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 8
      },
      {
        id: "841ef946-cc89-4ff6-880c-fd516db1368a",
        title: "Granite Ways",
        author: "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 9
      },
      {
        id: "27eb0b7c-1be2-4b84-aa80-c38ddbbbdbd5",
        title: "Computers Chips tan",
        author: "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 10
      },
      {
        id: "563f9203-b661-4b3d-a682-6600399bc4b2",
        title: "lavender bifurcated",
        author: "6dff0f7d-a08b-457e-b781-35a2bff35bf7",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920118,
          version: 0
        },
        $loki: 11
      },
      {
        id: "ad10d246-ee8c-4e49-a177-c2aae0957b55",
        title: "Frozen Shoes repurpose",
        author: "fdd9a05a-0bea-4b9a-9b5e-057dbb031671",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 12
      },
      {
        id: "192411b9-b678-4b49-9266-ecf88baa5d05",
        title: "Senior",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 13
      },
      {
        id: "2bcb311f-1275-467e-b6ef-88c4c5508bc5",
        title: "programming Bacon methodologies",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: true,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 14
      },
      {
        id: "a4cb6d64-eb2f-4aa2-a2e6-0b2d22c867f0",
        title: "Tunisian Dinar",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 15
      },
      {
        id: "53af2361-bd0f-48a7-bcbd-2157efa77405",
        title: "Books",
        author: "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 16
      },
      {
        id: "2f5d3cc0-1f12-4ce7-8068-ef522ee51189",
        title: "Dynamic Auto Loan Account Borders",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 17
      },
      {
        id: "aacd6cd5-fd91-4f55-a8ec-6a06091a5a1b",
        title: "Cambridgeshire",
        author: "6dff0f7d-a08b-457e-b781-35a2bff35bf7",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 18
      },
      {
        id: "bea3c82b-29e5-426c-9d8b-fa2bf49018d2",
        title: "FTP Ergonomic",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: true,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 19
      },
      {
        id: "a3d41c9c-84b7-49cc-bd23-d41ee2bb724b",
        title: "Specialist client-server Gorgeous",
        author: "58a8ec9f-6a05-4c67-a45e-8bade8c5f64a",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076920119,
          version: 0
        },
        $loki: 20
      },
      {
        id: "61708375-7cb4-45ee-9cdc-d6a3835fed48",
        title: "Incredible Frozen Salad Money Market Account Chief",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076921126,
          version: 0
        },
        $loki: 21
      },
      {
        id: "030deb09-7786-4e27-8710-ddd63d1ec02f",
        title: "copying",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076922129,
          version: 0
        },
        $loki: 22
      },
      {
        id: "f79a21c2-167b-4de1-bc64-50e0748e0413",
        title: "strategic",
        author: "8eb2861c-942b-4c86-9a89-1d43b8c54b6b",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076923130,
          version: 0
        },
        $loki: 23
      },
      {
        id: "9e7aed27-1f71-41fa-8244-3a7c9fac4861",
        title: "Health",
        author: "0b7417ef-1413-46e6-9b53-2eac468c2801",
        completed: false,
        meta: {
          revision: 0,
          created: 1541076924132,
          version: 0
        },
        $loki: 24
      }
    ],
    statusCode: 200
  },
  title: {
    header: "Get all todos",
    description: "This method gets all todos in our backend"
  },
  url: "/todos"
};

export default [getTodo, createTodo, deleteTodo, updateTodo];
