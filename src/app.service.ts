import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  v2data = '';
  constructor() {
    try {
      this.v2data = fs.readFileSync(
        join(__dirname, '..', 'client/data.txt'),
        'utf8',
      );
    } catch (e) {
      this.v2data = '';
    }
  }

  getDate(data: string): string {
    if (data && data != '') {
      this.v2data = data;
      fs.writeFileSync(join(__dirname, '..', 'client/data.txt'), this.v2data);
    }
    return this.v2data;
  }
}
