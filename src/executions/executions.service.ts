import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateExecutionDto } from './dto/create-execution.dto';
import { UpdateExecutionDto } from './dto/update-execution.dto';
import { Execution } from './entities/execution.entity';
import { Client } from 'pg';

@Injectable()
export class ExecutionsService {
  constructor(
    @InjectRepository(Execution)
    private executionRepo: Repository<Execution>
  ) {}
  create(createExecutionDto: CreateExecutionDto) {
    const execution = this.executionRepo.create(createExecutionDto);
    return this.executionRepo.save(execution)
  }

  findAll() {
    return this.executionRepo.find();
  }

  findOne(id: number) {
    return this.executionRepo.findOne(id);
  }

  async update(id: number, updateExecutionDto: UpdateExecutionDto) {
    const updateResult = await this.executionRepo.update(id, updateExecutionDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Execution, id + 'Associate not found');
    }
      return this.executionRepo.findOne(id);
  }

 async remove(id: number) {
    const deleteResult = await this.executionRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Execution, id + 'Associate not found');
    }
  }
}
