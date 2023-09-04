import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address, Category, RealEstate, User } from "../entities"


@Entity('schedules') 
class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number 
    
    @Column({ type: 'date' })
    date: string 

    @Column({ type: 'time' })
    hour: string 


    // @ManyToOne(() => Course, (course) => course.students)
    // course: Course;
    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User
}

export default Schedule

