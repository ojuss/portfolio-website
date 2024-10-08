import Head from "next/head";
import PageLayout from "@/components/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";

const Projects = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div className="">
      <Head>
        <title>Ojus | Posts </title>
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
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>Posting Soon..</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
              
            </p>
          </section>
        </div>
      </PageLayout>
    </div>
  );
};
export default Projects;
