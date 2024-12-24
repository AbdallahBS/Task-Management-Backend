import { Task } from '../../task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    createTask(title: string, description?: string): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    updateTask(id: number, title: string, description?: string, completed?: boolean): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
