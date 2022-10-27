import "reflect-metadata"
import { DataSource } from 'typeorm';
import { Account } from './entity/account.entity';
import { Student } from './entity/student.entity';
import { Course } from './entity/course.entity';
import { Absent } from './entity/absent.entity';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "bendo01",
    password: "talaso",
    database: "app_absent",
    synchronize: true,
    logging: true,
    entities: [Student, Course, Absent, Account],
    subscribers: [],
    migrations: [],
})