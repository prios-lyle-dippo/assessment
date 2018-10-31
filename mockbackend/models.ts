import {
  Decoder,
  object,
  string,
  optional,
  array,
  boolean
} from "@mojotech/json-type-validation";

export interface Todo {
  id: string;
  title: string;
  author: string;
  completed?: boolean;
}

export const todoDecoder: Decoder<Todo> = object({
  id: string(),
  title: string(),
  author: string(),
  completed: optional(boolean())
});

export interface Author {
  id: string;
  name: string;
  jobTitle?: string;
  todos?: string[];
}

export const authorDecoder: Decoder<Author> = object({
  id: string(),
  name: string(),
  jobTitler: optional(string()),
  todos: optional(array(string()))
});
