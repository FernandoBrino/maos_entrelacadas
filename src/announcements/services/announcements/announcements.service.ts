import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnnouncementDto } from 'src/announcements/dtos/CreateAnnouncement.dto';
import { Announcement } from 'src/typeorm/Announcement';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  getAnnouncements() {
    return this.announcementRepository.find();
  }

  async createAnnoucement(announcementDto: CreateAnnouncementDto) {
    const newAnnouncement = this.announcementRepository.create({
      ...announcementDto,
    });

    return await this.announcementRepository.save(newAnnouncement);
  }
}
