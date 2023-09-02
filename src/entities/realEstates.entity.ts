import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address, Category } from "../entities"

@Entity('realEstates') 
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number 
    
    @Column({ type: 'boolean', default: false })
    sold: boolean 

    @Column({ type: 'numeric', default: 0 })
    value: number | string

    @Column()
    size: number;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category)
    category: Category;
}

export default RealEstate 

