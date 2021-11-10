import { Module } from '@nestjs/common';
import { ExecutionsService } from './executions.service';
import { ExecutionsController } from './executions.controller';
import { Execution } from './entities/execution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Execution])],
  controllers: [ExecutionsController],
  providers: [ExecutionsService]
})
export class ExecutionsModule {}
