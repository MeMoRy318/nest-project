import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CreatedUpdatedModel {
  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz', default: () => `NOW()` })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamptz', default: () => `NOW()` })
  updateAt: Date;
}
