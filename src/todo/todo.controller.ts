import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo';

@Controller('todos')
export class TodoController {
  constructor(public todoService: TodoService) {}

  @Get()
  listTodos() {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todoService.create(body.todo);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todoService.updateOne({ id, todo: body.todo });
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteOne(id);
  }
}
