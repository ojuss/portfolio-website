import Head from "next/head";
import Exp from "@/components/Exp";
import Project from "@/components/ProjectCard";
import GitHub from "@/components/GitHub";
import PageLayout from "@/components/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import devstar from "../projects/devestar.png"


const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div className="">
      <Head>
        <title>Ojus | Work </title>
        <link rel="icon" href="/mishap.ico" />
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
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>experiences && projects.</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
            in this section, you'll find a showcase of my latest projects and experience i've had. here is a summary of my work so far. 
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
                PDF-2-Scan is a development tool with user friendly interface that scans your .pdf to make it more clearer. advanced options involves filter adjustment with immediate feedbacks and results.
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
                adding soon 
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
