import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 45, unique: true })
  name: string
}


export default Category 