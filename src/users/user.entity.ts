import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm' ;

@Entity()
export class User {
    //list the props of the user which we expect
    @PrimaryGeneratedColumn()
    id: number; //id column values are generated automatically
    @Column()
    email: string;
    @Column()
    password: string;
}
