import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAnnouncementDto } from 'src/announcements/dtos/CreateAnnouncement.dto';
import { AnnouncementsService } from 'src/announcements/services/announcements/announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(
    @Inject('ANNOUNCEMENTS_SERVICE')
    private annoucementService: AnnouncementsService,
  ) {}

  @Get()
  getAnnouncements() {
    return this.annoucementService.getAnnouncements();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAnnouncement(@Body() annoucementDto: CreateAnnouncementDto) {
    return this.annoucementService.createAnnoucement(annoucementDto);
  }
}
