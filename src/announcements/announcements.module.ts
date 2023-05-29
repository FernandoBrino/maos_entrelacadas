import { Module } from '@nestjs/common';
import { AnnouncementsService } from './services/announcements/announcements.service';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Announcement } from 'src/typeorm/Announcement';
import { Image } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Announcement, Image])],
  providers: [
    {
      provide: 'ANNOUNCEMENTS_SERVICE',
      useClass: AnnouncementsService,
    },
  ],
  controllers: [AnnouncementsController],
})
export class AnnouncementsModule {}
