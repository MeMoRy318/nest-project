import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CreatedUpdatedModel } from '../common/created-updated.model';

@Entity()
export class UserEntity extends CreatedUpdatedModel {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid', { name: 'userId' })
  id: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  userName: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  city: string;

  @ApiProperty()
  @Column({ type: 'int', nullable: false })
  age: number;

  @ApiProperty()
  @Column({ type: 'boolean', nullable: false })
  status: boolean;
}
