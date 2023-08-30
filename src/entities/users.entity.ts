import { getRounds, hashSync } from 'bcryptjs'
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'


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

    @BeforeInsert()
    @BeforeUpdate()
    hashedPassword(){
        const password = getRounds(this.password)
        if(!password){
            this.password = hashSync(this.password, 10)
        }
    }

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ name: "deletedAt", nullable: true })
    deletedAt: Date | null;
}

export default User

