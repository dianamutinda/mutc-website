import "./Events.css"
import { GrSecure } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiAzurefunctions } from "react-icons/si";
import { PiMicrosoftPowerpointLogoBold } from "react-icons/pi";
const Events = () =>{
    return(
       <section>
        <h1 className="event-title">Events</h1>
         <div className="events">
            
            <div className="events-container">
                <h2 className="events-title">Cyber security</h2>
                <p className="icon">{<GrSecure />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 4pm to 7pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span> Webster Ifedha</p>
            </div>

            <div className="events-container">
                <h2 className="events-title">UI/UX </h2>
                <p className="icon">{<FaFigma />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 5pm to 8pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span> Manase Gunga</p>
            </div>

            <div className="events-container">
                <h2 className="events-title">Web development</h2>
                <p className="icon">{<FaHtml5 />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 6pm to 9pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span> Carolyne Githenduka</p>
            </div>

            <div className="events-container">
                <h2 className="events-title">Mobile apps dev</h2>
                <p className="icon">{<TbBrandKotlin />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 4pm to 7pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span> Stanley Amunze</p>
            </div>

            <div className="events-container">
                <h2 className="events-title">Cloud engineering</h2>
                <p className="icon">{<SiAzurefunctions />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 3pm to 6pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span>Paul Karanja</p>
            </div>

            <div className="events-container">
                <h2 className="events-title">Power Platform</h2>
                <p className="icon">{<PiMicrosoftPowerpointLogoBold />}</p>
                <p className="events-text"><span className="subtitle">date & time:</span> Monday from 1pm to 4pm <br /> 
                <span className="subtitle">venue:</span> computer lab F04 <br />
                <span className="subtitle">leader:</span>Evyonn Mbithe </p>
            </div>
        </div>
       </section>
    )
}

export default Events;