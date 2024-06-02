import bImg1 from "../../assets/testimony 1.jpg"
import bImg2 from "../../assets/testimony 2.jpg"
import bImg3 from "../../assets/testimony 3.jpg"
import bImg4 from "../../assets/testimony 4.jpg"

const Testimonials = () =>{
    return(
       <div className="testimonials-items">
        <h2 className="title">Testimonials</h2>

        <div className="Testimonials-title">
        <div className="testimonials">
            <div className="testimonials-image">
            <img src={bImg1} alt="student" />
            </div>
            <div className="testimonials-text">
                <h3 className="name">alex githinji</h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, perferendis.</p>
            </div>
        </div>  

       
         <div className="testimonials">
            <div className="testimonials-image">
            <img src={bImg2} alt="student" />
            </div>
            <div className="testimonials-text">
                <h3 className="name">diana mwende</h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, perferendis.</p>
            </div>
        </div>  

        
         <div className="testimonials">
            <div className="testimonials-image">
            <img src={bImg3} alt="student" />
            </div>
            <div className="testimonials-text">
                <h3 className="name">daniel justin</h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, perferendis.</p>
            </div>
        </div>  

        
         <div className="testimonials">
            <div className="testimonials-image">
            <img src={bImg4} alt="student" />
            </div>
            <div className="testimonials-text">
                <h3 className="name">faith jackson</h3>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, perferendis.</p>
            </div>
        </div>  
        </div>
       </div>

    )
}
export default Testimonials;