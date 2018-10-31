import express, { Router } from "express";
import Loki, { Collection } from "lokijs";
import { Socket } from "socket.io";
import { todoDecoder, authorDecoder } from "./models";
import { Decoder } from "@mojotech/json-type-validation";

const db = new Loki("./db.json");
export const authorCollection = db.addCollection("authors");
export const todosCollection = db.addCollection("todos");
todosCollection.on("insert", data => {
  const authorId = data.author;
  authorCollection.updateWhere(
    author => author.id === authorId,
    author => ({
      ...author,
      todos: author.todos.concat(data.id)
    })
  );
});

interface CrudMethods<T> {
  create(item: T): { message: string; data?: any; error?: any };
  update(
    id: string,
    data: Partial<T>
  ): { message: string; data?: any; error?: any };
  delete(id: string): { message: string; data?: any; error?: any };
}
type GenerateCrud = <T>(
  collection: Collection,
  decoder: Decoder<T>
) => CrudMethods<T>;
const generateCRUD: GenerateCrud = (collection, decoder) => ({
  create: item => {
    console.log("LOKO", item);
    const result = decoder.run(item);
    if (result.ok) {
      collection.insertOne(result);
      return { message: "Created successfully", data: result };
    } else {
      return { message: "Could not create", error: result.error };
    }
  },
  update: (id, data) => {
    const result = decoder.runWithException(data);
    console.log(result);
    try {
      result &&
        collection.updateWhere(
          data => data.id === id,
          found => Object.assign({}, found, result)
        );
      return { message: "Updated Successfully", data: result };
    } catch (e) {
      return e;
    }
  },
  delete: id => {
    try {
      collection.removeWhere(data => data.id === id);
      return { message: "Deleted Successfully" };
    } catch (e) {
      return e;
    }
  }
});

export const todoCRUD = generateCRUD(todosCollection, todoDecoder);
export const authorCRUD = generateCRUD(authorCollection, authorDecoder);

type ConfigureRouter = <T>(
  router: Router,
  collection: Collection,
  crudMethods: CrudMethods<T>
) => void;
const configureRouter: ConfigureRouter = (router, collection, crudMethods) => {
  router.get("/", (req, res) => {
    res.json(collection.data);
  });
  router.get("/:id", (req, res) => {
    res.json(collection.where(item => item.id === req.params.id));
  });
  router.post("/update/:id", (req, res) =>
    res.json(crudMethods.update(req.params.id, req.body))
  );
  router.post("/create", (req, res) => {
    res.json(crudMethods.create(req.body));
  });
  router.post("/delete/:id", (req, res) =>
    res.json(crudMethods.delete(req.params.id))
  );
};

const configureMutexSocket = <T>(
  name: string,
  crudMethods: CrudMethods<T>,
  collection: Collection
) => (socket: Socket) => {
  collection.on("insert", ev => socket.send({ [name]: ev }));
  socket.on(`create-${name}`, ev => crudMethods.create(ev));
  socket.on(`update-${name}`, ev => crudMethods.update(ev.id, ev));
  socket.on(`delete-${name}`, ev => crudMethods.delete(ev));
};

export const todoRouter = express.Router();
export const authorRouter = express.Router();

configureRouter(todoRouter, todosCollection, todoCRUD);
configureRouter(authorRouter, authorCollection, authorCRUD);

export const todoSockets = configureMutexSocket(
  "todo",
  todoCRUD,
  todosCollection
);
export const authorSockets = configureMutexSocket(
  "author",
  authorCRUD,
  authorCollection
);
