import { Test, TestingModule } from '@nestjs/testing';
import { GendersController } from './genders.controller';

describe('GendersController', () => {
  let controller: GendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GendersController],
    }).compile();

    controller = module.get<GendersController>(GendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
