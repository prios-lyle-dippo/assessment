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

export const todoCreateDecoder: Decoder<Partial<Todo>> = object({
  title: string(),
  author: string(),
  completed: optional(boolean())
});
export const todoUpdateDecoder: Decoder<Todo> = object({
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

export const authorCreateDecoder: Decoder<Partial<Author>> = object({
  name: string(),
  jobTitler: optional(string()),
  todos: optional(array(string()))
});

export const authorUpdateDecoder: Decoder<Author> = object({
  id: string(),
  name: string(),
  jobTitler: optional(string()),
  todos: optional(array(string()))
});
