import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

// throw errors here, but maybe take care of handling them at higher level

// business level validation
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepo: Repository<Todo>,
  ) {}

  create(todo: string) {
    return this.todosRepo.save({ todo });
  }

  findAll() {
    return this.todosRepo.find();
  }

  async updateOne(input: { id: string; todo: string }) {
    await this.todosRepo.update(parseInt(input.id), { todo: input.todo });
    return this.todosRepo.findOneOrFail({ where: { id: parseInt(input.id) } });
  }

  deleteOne(id: string) {
    return this.todosRepo.delete(parseInt(id));
  }
}
