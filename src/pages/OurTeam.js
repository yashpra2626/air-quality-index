import React from "react";
import './OurTeam.css'
import ramanimg from "../assets/raman6.png"
import yashimg from "../assets/WhatsApp_Image_2021-03-22_at_1.17.13_PM-removebg.png"
import sanyamimg from "../assets/WhatsApp_Image_2021-03-22_at_2.05.21_PM-removebg-preview.png"




const teamDetail = [
  {
    id: "p1",
    name: "Tirupati Raman Mishra",
    review: "Develop Header and Footer Component , Team Page,design theme for pages and having a good experience in Css and Bootstrap .",
  },
  {
    id: "p2",
    name: "Yash Kumar Prajapati",
    review: "Develop HomePage,TeamPage, Article Page ,design content for all the pages  and having a good experience in Backend.",
  },
  {
    id: "p3",
    name: "Sanyam Gupta",
    review: "Develop Article Page and design basic component in react and having a good experience in Frontend.",
  },
];

const OurTeam = () => {
  return (
    <div className="ourteam-background">
    <h1 className="team-bottomh1"> Paper Design Project (Phase-I) </h1>
    <h1 className="team-bottomh2"> JK Institute of Applied Physics & Technology </h1>
    <h1 className="team-bottomh3"> University Of Allahabad</h1>
      <h1 className="team-heading"> Our Team </h1>
      <div className="teammate person1">
      <h1 className="teammate-h1"> {teamDetail[0].name} </h1>
      <h3 className="teammate-h3"> {teamDetail[0].review}</h3>
      <h1 className="class-detail" > B.tech 5th Sem (CSE)</h1>
      <h1 className="class-detail" > Enroll : U1851066</h1>
      <img className="team-imgraman" src={ramanimg} />
      </div>
      <div className="teammate person2">
  
      <h1 className="teammate-h1"> {teamDetail[1].name} </h1>
      <h3 className="teammate-h3"> {teamDetail[1].review}</h3>
      <h1 className="class-detail" > B.tech 5th Sem (CSE)</h1>
      <h1 className="class-detail" > Enroll : U1851069</h1>
      <img className="team-img" src={yashimg} />
      </div>
      <div className="teammate person3">
      
      <h1 className="teammate-h1"> {teamDetail[2].name} </h1>
      <h3 className="teammate-h3"> {teamDetail[2].review}</h3>
      <h1 className="class-detail" > B.tech 5th Sem (CSE)</h1>
      <h1 className="class-detail" > Enroll : U1851056</h1>
      <img className="team-img" src={sanyamimg} />
      </div>
      <h1 className="supervisor">Supervision By </h1>
      <h2 className="supervisor-name">Dr. Sudhanshu Kumar Jha Sir </h2>
    </div>
  );
};

export default OurTeam;
