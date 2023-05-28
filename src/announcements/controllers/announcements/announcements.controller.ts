import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAnnouncementDto } from 'src/announcements/dtos/CreateAnnouncement.dto';
import { AnnouncementsService } from 'src/announcements/services/announcements/announcements.service';

@Controller('announcements')
@ApiTags('announcements')
export class AnnouncementsController {
  constructor(
    @Inject('ANNOUNCEMENTS_SERVICE')
    private annoucementService: AnnouncementsService,
  ) {}

  @Get()
  getAnnouncements() {
    return this.annoucementService.getAnnouncements();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.annoucementService.getAnnouncementById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAnnouncement(@Body() annoucementDto: CreateAnnouncementDto) {
    return this.annoucementService.createAnnoucement(annoucementDto);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  updateAnnouncement(
    @Param('id') id: number,
    @Body() annoucementDto: CreateAnnouncementDto,
  ) {
    return this.annoucementService.updateAnnouncement(id, annoucementDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  replaceAnnouncement(
    @Param('id') id: number,
    @Body() annoucementDto: CreateAnnouncementDto,
  ) {
    return this.annoucementService.replaceAnnouncement(id, annoucementDto);
  }

  @Delete(':id')
  deleteAnnouncement(@Param('id') id: number) {
    return this.annoucementService.deleteAnnouncement(id);
  }
}
