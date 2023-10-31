import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatedUpdatedModel } from '../common/created-updated.model';

@Entity()
export class UserEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid', { name: 'userId' })
  id: string;

  @Column({ type: 'text', nullable: false })
  userName: string;

  @Column({ type: 'text', nullable: false, unique: true })
  email: string;

  @Column({ type: 'text', nullable: false })
  city: string;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'boolean', nullable: false })
  status: boolean;
}
