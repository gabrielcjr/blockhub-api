import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { AssociateController } from './associate/associate.controller';
import { AssociateService } from './associate/associate.service';

@Module({
  imports: [],
  controllers: [AppController, ProjectController, AssociateController],
  providers: [AppService, ProjectService, AssociateService],
})
export class AppModule {}
