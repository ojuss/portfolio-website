import React from "react";
import Link from "next/link";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ojus | Porfolio </title>
        <link rel="icon" href="/blue.ico" />
      </Head>
      <NavBar />
      <div className={"bg-dark-100 px-4 dark:bg-black sm:px-8"}>
        <div
          className={
            "mx-auto flex w-full max-w-prose flex-col justify-center py-16"
          }
        >
          <section
            className={
              "mt-16 w-full self-start text-dark-900 dark:text-gray-50"
            }
          >
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>Ojus.</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
              Hello world! I'm Ojus, a computer science undergrad {" "}
              <a
                href="https://ptu.ac.in/"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded bg-blue-300 px-0.5 py-0.5 font-medium text-black hover:bg-blue-400 hover:text-black dark:bg-blue-900 dark:text-white dark:hover:bg-blue-400 dark:hover:text-white"
                }
              >
                @Punjab Technical University
              </a>
              . I enjoy coding competitively and building useless but fun projects!{" "}
            </p>
            <p>
              Check out{" "}
              <Link
                href="/projects"
                className="rounded px-0.5 py-0.5 font-medium text-blue-400 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-900"
              >
                ./projects
              </Link>{" "}
              or my GitHub (
              <a
                href="https://github.com/ojuss"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded px-0.5 py-0.5 font-medium text-green-400 hover:text-green-700 dark:text-green-300 dark:hover:text-green-900"
                }
              >
                @ojuss
              </a>
              ) to see some cool projects!
            </p>
          </section>
          <div className=" pb-8 flex justify-center items-center w-full">
            <div className="w-64 h-64 overflow-hidden rounded-full">
              <Image 
                src="/images/posts/bitcoin2.jpg" 
                alt="Pit" 
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" space-y-4 text-lg">
            <p>
               I enjoy programming the most when it comes to <span className="text-react">React.js</span> && <span className="text-golang">Go</span> development, creating minimalist front-ends and strong back-ends. Always keen on imporving my skills!
            </p>
            <p> I am actively looking for internship opportunities as a Web developer || Software engineer.<br /> Curious to know more about me or discuss opportunities? Let's connect on LinkedIn (
              <a
                href="https://github.com/ojuss"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded px-0.5 py-0.5 font-medium text-blue-400 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-900"
                }
              >
                @ojuss
              </a>
              ) !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


