import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../../task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() task: { title: string; description?: string }): Promise<Task> {
    return this.tasksService.createTask(task.title, task.description);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: { title: string; description?: string; completed?: boolean }): Promise<Task> {
    return this.tasksService.updateTask(+id, task.title, task.description, task.completed);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(+id);
  }
}
