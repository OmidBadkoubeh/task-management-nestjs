import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

import { TaskStatus } from '../task.model';

export class GetTasksFilterdDto {
  @ApiPropertyOptional({ name: 'Status', enum: TaskStatus })
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
