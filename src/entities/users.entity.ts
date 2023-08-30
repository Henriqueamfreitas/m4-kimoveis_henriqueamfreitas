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

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @DeleteDateColumn({ type: "date" })
    deletedAt: string | null | Date;
}

export default User

