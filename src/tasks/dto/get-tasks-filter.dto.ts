import { TaskStatus } from '../task.model';

export class GetTasksFilterdDto {
  status: TaskStatus;
  search: string;
}
