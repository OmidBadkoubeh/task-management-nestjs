import { ApiProperty } from '@nestjs/swagger';

import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
}
