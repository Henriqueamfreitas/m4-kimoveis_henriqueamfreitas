import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users') 
class User {
    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({ type: 'varchar', length: 45 })
    name: string 

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string 

    @Column({ type: 'boolean', default: false })
    admin: boolean 

    @Column({ type: 'varchar', length: 120 })
    password: string 

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn({ name: "deletedAt", nullable: true })
    deletedAt: Date | null;
}

export default User

