import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.model';

export class GetTasksFilterdDto {
  @ApiPropertyOptional({ name: 'Status', enum: TaskStatus })
  status: TaskStatus;

  @ApiPropertyOptional()
  search: string;
}
