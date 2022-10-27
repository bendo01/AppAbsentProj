import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';
import { IsBoolean, IsInt, IsNotEmpty, IsUUID } from 'class-validator';
@Entity({ schema: 'public', name: 'absents' })
export class Absent {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'course_id', type: 'uuid', nullable: false })
    @IsNotEmpty()
    course_id: string;

    @Column({ name: 'student_id', type: 'uuid', nullable: false })
    @IsNotEmpty()
    student_id: string;

    @Column({ name: 'meeting', type: 'int', nullable: false })
    @IsNotEmpty()
    @IsInt()
    meeting: number;

    @Column({ name: 'is_present', type: 'boolean', default: false })
    @IsBoolean()
    is_present: boolean;

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