import faker from "faker";
import { interval } from "rxjs";
import { map, tap } from "rxjs/operators";
import { todoCRUD, authorCRUD, authorCollection, todosCollection } from "./api";
const mockAuthor = (n: number) => {
  const result = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    jobTitle: `${faker.name.jobTitle()}`,
    id: faker.random.uuid()
  };

  authorCRUD.create(result);
};

const getAuthorId = () => faker.random.arrayElement(authorCollection.data).id;

const mockTodo = () => {
  const result = {
    id: faker.random.uuid(),
    title: faker.random.words(faker.random.number({ min: 1, max: 3 })),
    author: getAuthorId(),
    completed: faker.random.arrayElement([false, false, false, true])
  };

  todoCRUD.create(result);
};

const getManyAuthors = (n: number) =>
  Array.apply(null, Array(n)).map(mockAuthor);
const getManyTodos = (n: number) => Array.apply(null, Array(n)).map(mockTodo);
export const seedDb = () => {
  getManyAuthors(5);
  getManyTodos(20);
  interval(1000)
    .pipe(tap((x: number) => (x % 5 === 0 ? mockAuthor(1) : true)))
    .pipe(map(mockTodo))
    .subscribe();
};
