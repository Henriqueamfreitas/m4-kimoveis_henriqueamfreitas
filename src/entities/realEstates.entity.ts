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

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    // addressId NUMBER UNIQUE NOT NULL
    //      Relacionamento 1 pra 1 com addresses
    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    // categoryId NUMBER NOT NULL
    //      Relacionamento 1 pra n com categories
    //      uma categoria pode conter muitos realEstates, mas um realEstate pode pertencer apenas uma categoria.
    @ManyToOne(() => Category)
    category: Category;
}

export default RealEstate 

