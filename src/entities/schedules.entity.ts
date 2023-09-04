import { 
    Column, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { 
    RealEstate, 
    User 
} from "../entities"


@Entity("schedules") 
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number 
    
    @Column({ type: "date" })
    date: string 

    @Column({ type: "time" })
    hour: string 

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User
}

export default Schedule

