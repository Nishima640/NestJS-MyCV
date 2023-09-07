import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({  //forRoot-->typerOrmmodule for whole project, connection of db
      type: "sqlite", //type db
      database : "db.sqlite", //name of db
      entities: [User,Report],
      synchronize: true,
    }),
    UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
