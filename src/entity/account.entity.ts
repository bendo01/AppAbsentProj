import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
@Entity({ schema: 'public', name: 'accounts' })
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    @IsNotEmpty()
    name: string;

    @Column({ name: 'email', type: 'varchar', length: 255, nullable: false })
    @IsNotEmpty()
    @IsEmail()
    email: string;

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