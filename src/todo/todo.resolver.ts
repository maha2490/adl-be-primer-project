import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import {
  CreateTodoInput,
  DeleteTodoInput,
  Todo,
  TodosConnection,
  UpdateTodoInput,
} from 'src/graphql';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation()
  async createTodo(@Args('input') input: CreateTodoInput): Promise<Todo> {
    return await this.todoService.create(input.todo);
  }

  @Query('todos')
  async getAllTodos(): Promise<TodosConnection> {
    const todos = await this.todoService.findAll();
    return {
      nodes: Object.values(todos),
    };
  }

  @Mutation()
  async updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    return this.todoService.updateOne({
      id: '5',
      todo: updateTodoInput.todo,
    });
  }

  @Mutation()
  async deleteTodo(@Args('input') input: DeleteTodoInput) {
    return this.todoService.deleteOne(input.id.toString());
  }
}
