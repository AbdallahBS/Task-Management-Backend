import { Injectable } from '@nestjs/common';
import { Task } from '../../task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(title: string, description?: string): Promise<Task> {
    const task = this.tasksRepository.create({ title, description });
    return this.tasksRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  async updateTask(id: number, title: string, description?: string, completed?: boolean): Promise<Task> {
    await this.tasksRepository.update(id, { title, description, completed });
    return this.getTaskById(id);
  }

  async deleteTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
