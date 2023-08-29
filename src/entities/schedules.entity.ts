import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address, Category, RealEstate, User } from "../entities"


@Entity('schedules') 
class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number 
    
    @Column({ type: 'date' })
    date: string 

    @Column({ type: 'varchar', length: 45 })
    hour: string 

    // realEstateId NUMBER NOT NULL
    //      um realEstate pode conter muitas schedules, mas uma schedule pode pertencer apenas um realEstate.
    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    // userId NUMBER NOT NULL
    //      um user pode conter muitas schedules, mas uma schedule pode pertencer apenas um user.
    @ManyToOne(() => User)
    user: User
}

export default Schedule

