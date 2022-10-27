import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
@Entity({ schema: 'public', name: 'courses' })
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'code', type: 'varchar', length: 255, nullable: false })
    @IsNotEmpty()
    code: string;

    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    @IsNotEmpty()
    name: string;

    @Column({ name: 'credit', type: 'int', nullable: false })
    @IsNotEmpty()
    credit: number;

    @Column({ name: 'created_by', type: 'uuid', nullable: true })
    created_by?: string;

    @Column({ name: 'modified_by', type: 'uuid', nullable: true })
    modified_by?: string;

    @CreateDateColumn({ nullable: true })
    created_at?: Date;

    @UpdateDateColumn({ nullable: true })
    updated_at?: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at?: Date;
}