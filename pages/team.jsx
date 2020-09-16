import TeamCard from "../components/TeamCard";
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The team that brought you Code The Universe"
        />
      </Head>
      <div className="team-boxed">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">Team</h2>
            <p class="text-center">
              The team that brought you Code the Universe.
              <br />
            </p>
          </div>
          <div className="row">
          <TeamCard
            name={"Naveen Kannan"}
            imageSrc={"assets/img/naveen.png"}
            title={"Chief Executive Officer"}
            bio={`
                As a 15 year old high school freshman, Naveen Kannan;
                programming lead him to join Code The Universe as VP, and lead
                a course as an instructor. By teaching lectures, Naveen
                aspires to share his passion with his students. As a VP,
                Naveen hosts the C++ lectures as well as assist with behind
                the scenes protocol.
          `}
          />

            <TeamCard
              name={"Jeffrey Annaraj"}
              imageSrc={"assets/img/photo_2020-05-28_01-16-07.jpg"}
              title={"Chief of Technology"}
              bio={`
                Jeffrey Annaraj is 16-year old programmer, that specializes in
                web design, development and cloud computing architecture.
            `}
            />
            <TeamCard
              name={"Puneet Bagga"}
              imageSrc={"assets/img/puneet.png"}
              title={"Chief Operating Officer"}
              bio={`
                  Puneet Bagga is a 16 year old High School Junior that leads weekly C++
                  lectures and handles behind the scenes work, he hopes that all
                  students learn as much as they can from Code the Universe and
                  spread their newfound passion to others.
            `}
            />
            <TeamCard
              name={`Siddharth Balaganesh`}
              imageSrc={"assets/img/sid.jpg"}
              title={"Chief Content Executive"}
              bio={`
                  A programmer, and graphic designer. Specializing
                  in Video editing, photography, and marketing. Is currently the
                  Content Director at Code the Universe.
            `}
            />
            <TeamCard
              name={"Ryan [well in that case#0082]"}
              imageSrc={"assets/img/wellinthatcase.png"}
              title={"Teacher Assistant"}
              bio={`
              I program well with Python & I'm an aspiring Rust developer
            `}
            />
            <TeamCard
              name={"Gentian Gashi"}
              imageSrc={"assets/img/unbound.png"}
              title={"Python Teacher Assistant"}
              bio={`
                  Gentian Gashi is a 21 year old computer science student. With 5 years programming experience, specializing in C# and .NET Core, assisting students and teachers alike.
            `}
            />
            <TeamCard
              name={"Bayan Paruanda"}
              imageSrc={"assets/img/unknown.png"}
              title={"Teacher Assistant"}
              bio={`
                  Bayan Paraunda is a 19-year old programmer from the
                  Philippines. A complete geek from a young age, he has been
                  fascinated by all topics that relate to science as a young
                  child. He is now plans to study computer engineering in
                  college and learn more about how computers work. He dreams of
                  becoming a scientist who can contribute to solving problems in
                  the world.
            `}
            />
            <TeamCard
              name={"Lance Soo"}
              imageSrc={"/assets/img/unknown.png"}
              role={"Lecturer"}
              bio={`
           Lance Soo is a Mechanical Engineering major at Kennesaw State University.
          However, he resolved to never lose sight of his Computer Science background.
           He is excited to teach MatLab, and hopes they will get something out of it as well!
            In his words, engineering and computer science don't have to be mutually exclusive.
             In his free time, he composes music and does art.
            `}
            />
            <TeamCard
              name={"Yashaswi Bhardawaj"}
              imageSrc={"/assets/img/claw.jpeg"}
              role={"Lecturer"}
              bio={`Yashaswi Bhardawaj is passionate about computer science, PC building and literature. His love of literature, history and gaming has helped him see things from the ground up not just for what it is but for the future of what it can be. He has been working with C++ for over a year and now specializes in data structures and algorithms with the language.
            `}
            />
            <TeamCard
              name={"Yashaswi Bhardawaj"}
              imageSrc={"/assets/img/unknown.png"}
              role={"Lecturer"}
              bio={`Yashaswi Bhardawaj is passionate about computer science, PC building and literature. His love of literature, history and gaming has helped him see things from the ground up not just for what it is but for the future of what it can be. He has been working with C++ for over a year and now specializes in data structures and algorithms with the language.
            `}
            />
          </div>
        </div>
      </div>
    </>
  );
}
