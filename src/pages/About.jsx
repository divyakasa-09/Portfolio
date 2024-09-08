import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, education } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Divya Kasa
        </span>{" "}
        👋
      </h1>


      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer, I am currently pursuing my Master of Science in Information Systems at Northeastern University, Boston, MA.
          I enjoy building applications and solving complex problems.<br></br><br></br> I am actively looking for <strong>Full Time Opportunities For Software Development Roles</strong> starting <strong>May 2025</strong>.
         <br></br><br></br> I am a quick learner and I'm always open to learning new technologies to stay ahead in the ever-evolving field of software engineering.<br></br>

<br></br>In addition to my technical skills, I possess strong problem-solving abilities, effective communication skills, and the ability to work well both independently and as part of a team. I thrive in a dynamic and fast-paced environment, and I am always eager to take on new challenges and responsibilities.
        </p>
      </div>
       <div className= 'py-16'>
       <h3 className='subhead-text'>Education</h3>
       
       <div className='mt-12 flex'>
          <VerticalTimeline>
            { 
            education.map((educations, index) => (
              <VerticalTimelineElement
                key={educations.university_name}
                date={educations.date}
                iconStyle={{ background: educations.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={educations.icon}
                      alt={educations.university_name}
                      className='w-[100%] h-[100%] object-cover'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: educations.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {educations.university_name}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {educations.course_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {educations.points.map((point, index) => (
                    <li
                      key={`educations-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        
       </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with Cognizant, leveling up my skills and
            teaming up with smart people. I have about 1.5 years of experience as a Full Stack Software Developer. 
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            { experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[100%] h-[100%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
