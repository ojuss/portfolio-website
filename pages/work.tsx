import Head from "next/head";
import Exp from "@/components/Exp";
import Project from "@/components/ProjectCard";
import GitHub from "@/components/GitHub";
import PageLayout from "@/components/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import devstar from "../projects/devestar.png";
import cdoor from "../projects/cdoor.png";


const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div>
      <Head>
        <title>Ojus | Work </title>
      </Head>
      
      <PageLayout >
      <div
          className={
            "mx-auto flex w-full max-w-prose flex-col justify-center "
          }
        >
          <section
            className={
              "mt-16 w-full self-start text-dark-900 dark:text-gray-50"
            }
          >
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>Experiences && Projects.</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
            In this section, you'll find a showcase of my latest projects and experience I've had. Here is a summary of my work so far. 
            </p>
          </section>
          <Exp />
        </div>
        <div className={"mx-auto w-full max-w-prose"}>
          <h1 className={"pb-8 mt-4 text-4xl font-semibold"}>./projects</h1>
          <div className="space-y-12">
            <Project
              url="https://developerstar.com"
              github="devstar"
              className="bg-gradient-to-tr from-cyan-100 to-teal-50 dark:from-cyan-800 dark:to-teal-800"
            > 
              <Project.Image src={devstar} />
              <div className="pt-6 pb-2"><Project.Title>PDF-2-Scan</Project.Title></div>
              
              <Project.Description>
                PDF-2-Scan is a development tool with user friendly interface that scans your .pdf to make it more clearer. Advanced options involves filter adjustment with immediate feedbacks and results.
              </Project.Description>
            </Project>
            <Project
              url="https://collabdoor.github.io/dumbAF/"
              github="collabdoor"
              devpost=""
              className={
                "dark:to-purple-100-900 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
              }
            >
              <Project.Image src={cdoor} />
              <div className="pt-6 pb-2"><Project.Title>Collabdoor / dumbAF</Project.Title></div>
              <Project.Description>
                This community platform is designed to help students to collaborate and share their ideas. A course-work relevant studying resources site is already up to ace your exams.
              </Project.Description>
            </Project>
            <Project
              url=""
              github=""
              className="bg-gradient-to-tr from-pink-100 to-yellow-50 dark:from-pink-800 dark:to-yellow-800"
            >
              <Project.Image src="" />
              <Project.Title>THIRD PROJECT</Project.Title>
              <Project.Description>
                adding soon
              </Project.Description>
            </Project>
            
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
export default Projects;
