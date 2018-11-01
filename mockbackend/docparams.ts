import { CreateDocsParams, TemplateParams } from "./generate-docs";
import { Author, Todo } from "./models";

type TodoParamsType = { [K in keyof Todo]: string };
class TodoParams implements TodoParamsType {
  author = "string";
  completed = "boolean";
  id = "string";
  title = "string";
}
const requiredTodoParams: Array<keyof Todo> = ["author", "title"];
const optionalTodoParams: Array<keyof Todo> = ["completed"];

type AuthorParamsType = { [K in keyof Author]: string };
class AuthorParams implements AuthorParamsType {
  id = "string";
  jobTitle = "string";
  name = "string";
  todos = "Array<string>";
}

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
    header: "Update a todo",
    description: "This method creates a todo in our backend"
  },
  url: "/todos/update/0000-0000-0000-0001"
};
export const docParams: CreateDocsParams = [createTodo];
