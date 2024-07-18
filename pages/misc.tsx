import Head from "next/head";
import PageLayout from "@/components/PageLayout";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";

const Misc = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div className="">
      <Head>
        <title>Ojus | Misc </title>
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
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>Miscellaneous.</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
              This is the personal section of my portfolio, where I share a glimpse into my life outside of work. These off-screen activities shape who I am and bring balance to my life.
            </p>
          </section>
          
        </div>
        <div className={"mx-auto w-full max-w-prose"}>
          <h1 className={"text-4xl font-semibold text-pink-200"}>./phonic-boy</h1>
          <div className="mt-4 pb-12 space-y-4">
           <p className="text-lg">
           I love playing and composing music on acoustic guitar with my friend. Right now, I'm learning fingerstyle, which is a way of playing where you use your fingers instead of a pick. I'm also learning the song <span className="text-blue-300">"No Idea"</span> by Don Toliver.
           </p>
            <p className="text-lg">
              Currently I haven't posted my songs anywhere yet but thinking to do that pretty soon!
            </p>
          </div>
        </div>
        <div className="pb-8 flex flex-col sm:flex-row justify-center items-center w-full gap-8 sm:gap-14">
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <Image
              src="/meguitar.png"
              alt="me"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <Image
              src="/guitar.jpg"
              alt="me"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
export default Misc;
