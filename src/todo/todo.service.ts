import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  create(createTodoInput: CreateTodoInput) {
    return 'This action adds a new todo';
  }

  findAll() {
    console.log('path of file', `${__dirname}/todo.data.js`);
    return fs.readFile(`${__dirname}/todo.data.js`, 'utf-8', (err, data) => {
      // @ts-expect-error figure out TS solution here

      console.log('result of read file data', data?.todos);
      console.log('result of read file error', err);
      if (err) {
        console.error(err);
      }

      // @ts-expect-error figure out TS solution here
      if (data) return data.todos;
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
