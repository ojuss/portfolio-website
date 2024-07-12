import Head from "next/head";
import NavBar from "@/components/NavBar";
import useColorMode from "../hooks/useColorMode";
import colorModes from "@/utils/colorModes";
import Image from "next/image";

const Misc = () => {
  const { colorMode } = useColorMode();
  const darkMode = colorMode === colorModes.dark;
  return (
    <div className="">
      <Head>
        <title>Ojus | Work </title>
        <link rel="icon" href="/blue.ico" />
      </Head>
      <NavBar />
      <div
          className={
            "mx-auto flex w-full max-w-prose flex-col justify-center"
          }
        >
          <section
            className={
              "mt-32 w-full self-start text-dark-900 dark:text-gray-50 "
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
          <h1 className={"text-4xl font-semibold"}>./guitar</h1>
          <div className="mt-4 pb-12 space-y-4">
           <p className="text-lg">
           <span className="text-pink-400">6 strings</span> I love playing and composing music on acoustic guitar with my friend. Right now, I'm learning fingerstyle, which is a way of playing where you use your fingers instead of a pick. I'm trying to learn the song <span className="text-blue-300">"No Idea"</span> by Don Toliver.
           </p>
            <p>
              Currently I haven't posted my songs anywhere yet but thinking to do that pretty soon!
            </p>
          </div>
        </div>
        <div className=" pb-8 flex justify-center gap-14 items-center w-full">
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <Image 
              src="/images/posts/meguitar.png" 
              alt="Pit" 
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <Image 
              src="/images/posts/guitar.jpg" 
              alt="Pit" 
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      
    </div>
  );
};
export default Misc;
