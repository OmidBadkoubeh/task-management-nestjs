import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateTaskDto } from '../application/models/dtos/create-task.dto';
import { GetTasksQuery } from '../application/models/dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from '../application/pipes/task-status-validation.pipe';
import { TasksService } from '../application/services/tasks.service';
import { Task } from '../domain/task.entity';
import { TaskStatus } from '../domain/task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksQuery): Promise<Task[]> {
    const getTasksQuery = new GetTasksQuery();
    getTasksQuery.search = filterDto.search;
    getTasksQuery.status = filterDto.status;
    return this.tasksService.getTasks(getTasksQuery);
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
