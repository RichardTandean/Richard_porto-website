import ExpCar from "./Experience_carousel"
import ExpMenu from "./Experience_menu"

export default function Experience(){
    return(
        <div className="container experience-container" id="Experience">
            <div className="d-flex flex-column">
                <h1 className="d-flex align-items-center justify-content-center experience-title text-md">
                    Experience
                </h1>
                    <ExpMenu/>
                <div>
                    <ExpCar/>
                </div>
            </div>
        </div>
    )
}