import cyberImg from "../../assets/cyber.jpg"
import uiImg from "../../assets/ui-design.jpg"
import webImg from "../../assets/web-design.jpg"
import appImg from "../../assets/app-design.jpg"
import cloudImg from "../../assets/cloud.jpg"
import powerImg from "../../assets/power.jpg"

import "./Tracks.css"
const Tracks = () =>{
    return(
    <div>
        <h1 className="track-head">Tracks</h1>
        <div className="tracks">
            <div className="container">
                <div className="trackImage">
                    <img src={cyberImg} alt=" image" />
                </div>
                <div className="track-text">
                    <h3 className="track-title">Cyber security</h3>
                    <p className="track-para">Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
                </div>
            </div>

            <div className="container">
                <div className="track-text">
                    <h3 className="track-title">UI/UX design</h3>
                    <p className="track-para">Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications.</p>
                </div>
                <div className="trackImage">
                    <img src={uiImg} alt="image" />
                </div>

            </div>

            
            <div className="container">
                <div className="trackImage">
                    <img src={webImg} alt="image" />
                </div>
                <div className="track-text">
                    <h3 className="track-title">Web development</h3>
                    <p className="track-para">Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.</p>
                </div>
            </div>


            
            <div className="container">
                <div className="track-text">
                    <h3 className="track-title">Mobile apps development</h3>
                    <p className="track-para">Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.</p>
                </div>
                <div className="trackImage">
                    <img src={appImg} alt=" image" />
                </div>

            </div>


            
            <div className="container">
                <div className="trackImage">
                    <img src={cloudImg} alt=" image" />
                </div>
                <div className="track-text">
                    <h3 className="track-title">Cloud engineering</h3>
                    <p className="track-para">Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.</p>
                </div>
        

            </div>


            
            <div className="container">
                <div className="track-text">
                    <h3 className="track-title">Power Platform </h3>
                    <p className="track-para">Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency.</p>
                </div>
                <div className="trackImage">
                    <img src={powerImg} alt=" image" />
                </div>
            </div>

        </div>
       <div className="form">
         
       <div className="form-container">
            <label htmlFor="fullname">fullname</label>
            <input 
            type="text"
            id="fullname"
            className="track-form"
            placeholder="Your fullname"
            />
        </div>
        <div className="form-container">
            <label htmlFor="email">email</label>
            <input 
            type="email"
            id="email"
            className="track-form"
            placeholder="example@gmail.com"
            />
        </div>
        <div className="form-container">
            <label htmlFor="course">course of study</label>
            <input 
            type="text"
            id="course"
            className="track-form"
            placeholder="e.g  Software Engineering"
            />
        </div>
        <div className="form-container">
            <label htmlFor="yos">Year of study</label>
            <input 
            type="text"
            id="yos"
            className="track-form"
            placeholder="e.g year 2"
            />
        </div>
        <div className="form-container">
            <label htmlFor="track">Desired tracks</label>
            <select id="tracks">
                <option value="">Cyber Security</option>
                <option value="">UI/UX design</option>
                <option value="">Web development</option>
                <option value="">Mobile apps development</option>
                <option value="">Cloud engineering</option>
                <option value="">Power Platform</option>
            </select>
        </div>
       </div>
    </div>
    )
};

export default Tracks;