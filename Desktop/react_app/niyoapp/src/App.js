import React from "react";
import Footer from "./components/footer/Footer";
import SupportList from "./components/supportlist/SupportList";
import ScholarshipIcon from "./scholarship.png";
import CounsellingIcon from "./counselling.png";
import ChildcareIcon from "./childcare.png";
import ReviewsIcon from "./reviews.png";
import EmploymentIcon from "./employment.png";
import UpskilledIcon from "./upskilled.png";
import CareerIcon from "./career.png";
import AccessIcon from "./access.png";
import RewardIcon from "./rewards.png";
import EmpowermentIcon from "./empowerment.png";
import CommunityIcon from "./community.png";
import ServiceList from "./components/servicelist/ServiceList";



const services = 

[
  {src: <ScholarshipIcon alt="ScholarshipIcon"/>,
  title: "Scholarships",
  description: "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you.",
  },
  {
  src: <CounsellingIcon alt="CounsellingIcon"/>,
  title: "Free Counselling Sessions",
  description: "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists.",
  },
  {src:<ChildcareIcon alt="ChildcareIcon"/>,
  title:"Childcare Support",
  description: "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.",
  },
  {src:<ReviewsIcon alt="ReviewsIcon"/>,
    title: "4.75 / Average Reviews",
    description: "We are focused on ensuring every student has the best experience our bootcamps have to offer.",
  },
  {src: <EmploymentIcon alt="EmploymentIcon"/>,
  title: "75% Employment Rate",
  description: "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
  },
  {src: <UpskilledIcon alt="UpskilledIcon"/>,
    title: "560 people Upskilled",
    description: "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more.",
  },
  {src: <CareerIcon alt="CareerIcon"/>,
      title: "Dedicated Career Support from Day One",
      description: "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.",
    },
  {src: <AccessIcon alt="AccessIcon"/>,
      title: "Exclusive Access to Open Roles to All Our Hiring Partners",
      description: "Exclusive access to open roles to all our hiring partners.",
  },
  {src: <RewardIcon alt="RewardIcon"/>,
    title: "Cool Rewards",
    description: "We like to reward our students during really important milestones. All our rewards come with an element of surprise.",
  },
  {src: <EmpowermentIcon alt="EmpowermentIcon"/>,
    title: "Empowerment Evenings and Events",
    description: "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses.",
  },
  {src: <CommunityIcon alt="CommunityIcon"/>,
    title: "7000+ Community of talents",
    description: "We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries.",
  }
  
];


const App = () => {
  return (
    <div >
      <h5 
      style={{color:"orange", fontWeight:"bold", margin: "10px",}}>
        WHY NIYO BOOTCAMP
        </h5>
      <SupportList services={services} />
      <ServiceList/>
      <Footer/>
    </div>
  );
}



export default App;
