import { TaskStatus } from 'src/tasks/domain/task-status.enum';

class GetTasksQuery {
  public status: TaskStatus;
  public search: string;
}
