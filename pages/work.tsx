import Head from "next/head";
import Experience from "@/components/Experience";
import Project from "@/components/ProjectCard";
import GitHub from "@/components/GitHub";
import PageLayout from "../layouts/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import octolink from "../projects/octolink.png";
import flush from "../projects/flush.png";
import geochattr from "../projects/geochattr.png";

const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div>
      <Head>
        <title>Ojus | Work </title>
        <link rel="icon" href="/blue.ico" />
      </Head>
      
      <PageLayout>
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
          <h1 className={"pt-12 text-4xl font-semibold"}>Projects</h1>
          <div className="mt-4 space-y-12">
            <Project
              url="https://octolink.vercel.app"
              github="octolink"
              className="bg-gradient-to-tr from-cyan-100 to-teal-50 dark:from-cyan-800 dark:to-teal-800"
            >
              <Project.Image src={octolink} />
              <Project.Title>Octolink</Project.Title>
              <Project.Description>
                Octolink is a webapp that enables link sharing for GitHub
                repositories. You can generate a link to invite collaborators to a
                repository, without needing to know their GitHub username.
              </Project.Description>
              <br />
              <a
                className="block w-max"
                href="https://www.producthunt.com/posts/octolink?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-octolink"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=325061&theme=${
                    darkMode ? "dark" : "light"
                  }`}
                  alt="Octolink - Link sharing for GitHub repositories | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </a>
            </Project>
            <Project
              url="https://geochattr.netlify.app"
              github={["GeoChattr/website", "GeoChattr/api"]}
              devpost="geochattr"
              className={
                "dark:to-purple-100-900 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
              }
            >
              <Project.Image src={geochattr} />
              <Project.Title>GeoChattr</Project.Title>
              <Project.Description>
                <p>
                  GeoChattr is a webapp that allows you to chat with people in
                  your city through doodles and drawings. It features an array of
                  drawing utensils, colors, and brush sizes. When you chat with
                  others in your area in real time, you're able to see their
                  drawings and respond with your own.
                </p>
                <p>
                  Built with <GitHub>ShubhamPatilsd</GitHub> and{" "}
                  <GitHub>eternalmoon1234</GitHub>
                </p>
              </Project.Description>
            </Project>
            <Project
              url="https://github.com/maggie-j-liu/flush"
              github="flush"
              className="bg-gradient-to-tr from-pink-100 to-yellow-50 dark:from-pink-800 dark:to-yellow-800"
            >
              <Project.Image src={flush} />
              <Project.Title>Flush</Project.Title>
              <Project.Description>
                Flush is a chrome extension that will promote productivity and
                focus! By blocking distraction-causing websites and regularly
                prompting you with flashcards, Flush ensures that your studying is
                not compromised. Via an options page, you may mark which websites
                you would like to block and customize the time between prompts
                (flashcards). When you get one question (flashcard) correct, you
                are allowed to visit the site for a time that you set (e.g., 5
                minutes) before you have to answer another flashcard.
              </Project.Description>
            </Project>
            
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
export default Projects;
