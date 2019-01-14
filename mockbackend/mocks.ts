import faker from "faker";
import { interval } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Todo, Author } from './models';
import { todoCRUD, authorCRUD, authorCollection, todosCollection } from "./api";
const mockAuthor = () => {
  const result = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    jobTitle: `${faker.name.jobTitle()}`,
    id: faker.random.uuid(),
    todos: []
  };

  authorCRUD.create(result);
};

const getAuthorId = (): string => {
  const author = faker.random.arrayElement(authorCollection.data);
  return author ? author.id : '';
}

const mockTodo = ()=> {
  const result: Todo = {
    id: faker.random.uuid(),
    title: faker.random.words(faker.random.number({ min: 1, max: 3 })),
    author: getAuthorId(),
    completed: faker.random.arrayElement([false, false, false, true])
  };

  todoCRUD.create(result);
};

const getManyAuthors = (n: number) =>
  Array.apply(null, Array(n)).map(item => mockAuthor());
const getManyTodos = (n: number) => Array.apply(null, Array(n)).map(mockTodo);
export const seedDb = () => {
  getManyAuthors(5);
  getManyTodos(20);
  interval(1000)
    .pipe(tap((x: number) => (x % 5 === 0 ? getManyAuthors(1) : true)))
    .pipe(map(mockTodo))
    .subscribe();
};
