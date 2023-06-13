import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class GeneratorService {
  public uuid(): string {
    return uuid();
  }

  public fileName(name: string, ext: string): string {
    return this.uuid() + `-${name}` + '.' + ext;
  }
}
