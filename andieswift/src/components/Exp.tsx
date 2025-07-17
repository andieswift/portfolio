import { useState } from "react";
import Heading from "../assets/headings/Exp.png";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "./Accordion/Accordion";

export const Exp = () => {
  const [selected, setSelect] = useState("");
  const resume = [
    {
      name: "Groundswell",
      year: "2024 - now",
      title: "Software Engineer",
      dets: (
        <ul className="list-disc">
          <li className="mb-2">
            Develop and maintain web applications using <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>TanStack</strong>, and other
            modern libraries, focusing on building intuitive and responsive
            <strong>form-based interfaces</strong> for a government-facing
            platform
          </li>
          <li className="mb-2">
            Design and implement HTML email templates, with{" "}
            <strong>React Email</strong>ensuring accessibility, responsiveness,
            and consistent delivery across various clients, and using{" "}
            <strong>Kafka</strong> events to send emails based on user taken
            actions
          </li>
          <li className="mb-2">
            Collaborate with backend teams working with <strong>Kafka</strong>{" "}
            and <strong>OpenSearch</strong> to build lambda functions, while
            maintaining a strong emphasis on front-end architecture and user
            experience
          </li>
          <li className="mb-2">
            Participate in a <strong>Scrum</strong> team, engaging in sprint
            planning, daily standups, and regular demos—earning consistent
            praise from stakeholders for clear, enthusiastic, and effective
            presentations
          </li>
        </ul>
      ),
    },
    {
      name: "NorthropGrumman",
      year: "2022 - 2024",
      title: "Software Engineer",
      dets: (
        <ul className="list-disc">
          <li className="mb-2">
            Quickly learned and proficiently used <strong>Vue</strong>,{" "}
            <strong>React</strong>, and <strong>TypeScript</strong> in a
            fast-paced development environment, contributing to the successful
            implementation of new features to various projects
          </li>
          <li className="mb-2">
            Designed and iterated on a <strong>Figma</strong> wireframe for a
            new project, working closely with the customer to ensure the design
            met their objectives while ensuring a positive user experience
          </li>
          <li className="mb-2">
            Actively participated in an agile team, attending weekly stand-up,
            sprint planning meetings, and presenting and effectively
            communicating progress made during the sprint to the customers and
            to the team as a whole
          </li>
          <li className="mb-2">
            Contributed to a collaborative team environment by sharing knowledge
            and participating in code reviews
          </li>
        </ul>
      ),
    },
    {
      name: "McGrawHill",
      year: "2020 - 2022",
      title: "Content Programmer",
      dets: (
        <ul className="list-disc">
          <li className="mb-2">
            Developed and maintained interactive online learning modules which
            included answer processing, guided solutions, and cycling question
            types using <strong>proprietary language</strong>,{" "}
            <strong>JavaScript</strong>, <strong>HTML</strong>,{" "}
            <strong>CSS 3</strong>
          </li>
          <li className="mb-2">
            Collaborated with subject matter experts, as well as quality
            assurance, to ensure the learning modules matched the outlined
            specs, were accurate, and gave students helpful and appropriate
            feedback when incorrect
          </li>
          <li className="mb-2">
            Teamed up with coworkers and supervisors to: review each other’s
            work, debug, find solutions to new challenges, and check that code
            is flexible to accommodate future changes
          </li>
          <li className="mb-2">
            Used <strong>Confluence</strong> to track progress and weekly
            objectives, as well as use <strong>JIRA</strong> to report and
            address issues
          </li>
        </ul>
      ),
    },
    {
      name: "UniversityOfRedlands",
      year: "Degree",
      title: "BS in Math & CS",
      dets: (
        <p>
          Undergraduate Coursework: Programming in Java, JavaScript, HTML,
          Android Studio, OOP, Databases
        </p>
      ),
    },
  ];
  return (
    <div id="experience" className="h-screen">
      <img src={Heading} className="p-10 w-1/2" alt="Expierence" />
      <div className="m-auto w-[80%]">
        <Accordion
          value={selected}
          type="single"
          onValueChange={(value) => {
            setSelect(value);
          }}
        >
          {resume.map((resumeItem) => (
            <AccordionItem value={resumeItem.name} key={resumeItem.name}>
              <AccordionTrigger className="font-bold hover:no-underline">
                <div className="px-3 flex justify-between w-full">
                  <span>{resumeItem.year}</span>{" "}
                  <span className="flex flex-col">
                    <span>{resumeItem.title}</span>
                    <span className="font-light">@{resumeItem.name}</span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-left">{resumeItem.dets}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
