import { CreateDocsParams } from "./generate-docs";
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
export const docParams: CreateDocsParams = [
  {
    dataParams: new TodoParams(),
    errorResponse: {
      description: "an err response",
      response: "response goes here",
      statusCode: 500
    },
    method: "POST",
    requiredParams: requiredTodoParams,
    optionalParams: optionalTodoParams,
    successResponse: {
      description: "success",
      response: "success",
      statusCode: 200
    },
    title: {
      header: "Create a todo",
      description: "This method creates a todo in our backend"
    },
    url: "/todos/create"
  }
];
