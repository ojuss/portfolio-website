import Head from "next/head";
import Experience from "@/components/Experience";
import Project from "@/components/ProjectCard";
import GitHub from "@/components/GitHub";
import PageLayout from "@/components/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";


const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div className="">
      <Head>
        <title>Ojus | Work </title>
        <link rel="icon" href="/blue.ico" />
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
          <Experience />
        </div>
        <div className={"mx-auto w-full max-w-prose"}>
          <h1 className={"pb-8 mt-4 text-4xl font-semibold"}>./projects</h1>
          <div className="space-y-12">
            <Project
              url=""
              github=""
              className="bg-gradient-to-tr from-cyan-100 to-teal-50 dark:from-cyan-800 dark:to-teal-800"
            >
              <Project.Image src="" />
              <Project.Title>FIRST PROJECT</Project.Title>
              <Project.Description>
                1st project
              </Project.Description>
              <a
                className="block w-max"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                
                {/* <img
                  src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=325061&theme=${
                    darkMode ? "dark" : "light"
                  }`}
                  alt="Octolink - Link sharing for GitHub repositories | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                /> */}
              </a>
            </Project>
            <Project
              url=""
              github=""
              devpost=""
              className={
                "dark:to-purple-100-900 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
              }
            >
              <Project.Image src="" />
              <Project.Title>SECOND PROJECT</Project.Title>
              <Project.Description>
                2nd project 
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
                3rd project
              </Project.Description>
            </Project>
            
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
export default Projects;
