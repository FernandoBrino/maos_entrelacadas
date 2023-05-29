import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnnouncementDto } from 'src/announcements/dtos/CreateAnnouncement.dto';
import { Image } from 'src/typeorm';
import { Announcement } from 'src/typeorm/Announcement';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async getAnnouncements(): Promise<Announcement[]> {
    return this.announcementRepository.find();
  }

  async getAnnouncementById(id: number): Promise<Announcement> {
    const announcement = await this.announcementRepository.findOne({
      where: { id },
    });

    if (!announcement) {
      throw new NotFoundException('Announcement not found');
    }

    return announcement;
  }

  async createAnnoucement(
    announcementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const newAnnouncement = this.announcementRepository.create({
      ...announcementDto,
    });

    if (announcementDto.images) {
      const newImages = this.imageRepository.create(announcementDto.images);

      newAnnouncement.images = newImages;
      await this.imageRepository.save(newImages);
    }

    return await this.announcementRepository.save(newAnnouncement);
  }

  async updateAnnouncement(
    id: number,
    announcementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const existingAnnouncement = await this.getAnnouncementById(id);

    const updatedAnnouncement = {
      ...existingAnnouncement,
      ...announcementDto,
    };

    return await this.announcementRepository.save(updatedAnnouncement);
  }

  async replaceAnnouncement(
    id: number,
    announcementDto: CreateAnnouncementDto,
  ): Promise<Announcement> {
    const existingAnnouncement = await this.getAnnouncementById(id);

    const replacedAnnouncement = {
      ...announcementDto,
      id: existingAnnouncement.id,
    };

    return await this.announcementRepository.save(replacedAnnouncement);
  }

  async deleteAnnouncement(id: number): Promise<void> {
    const existingAnnouncement = await this.getAnnouncementById(id);
    await this.announcementRepository.remove(existingAnnouncement);
  }
}
