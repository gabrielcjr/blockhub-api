import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AssociatesModule } from './associates/associates.module';


@Module({
  imports: [ProjectsModule, AssociatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
