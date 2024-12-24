import { TasksService } from './tasks.service';
import { Task } from '../../task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(task: {
        title: string;
        description?: string;
    }): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, task: {
        title: string;
        description?: string;
        completed?: boolean;
    }): Promise<Task>;
    remove(id: string): Promise<void>;
}
