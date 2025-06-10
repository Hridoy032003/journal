import { Calendar } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Book } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Lock } from "lucide-react";
import { Notebook } from "lucide-react";
import { ChartArea } from "lucide-react";
import { ChartAreaIcon } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { useEffect } from "react";
import TestoMonialCarousal from "../components/TestoMonialCarousal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import journals from '../Data/F&Q.json';

const Home = () => {
  console.log(journals)
  return (
    <div className="relative container mx-auto px-4 pb-16 pt-26 justify-center">
      <div>
        <h1 className="max-w-5xl  space-y-8 text-center mx-auto text-5xl grediaint-title p-5 ">
          Your Space to Reflect <br /> shere your mood and story
        </h1>
        <p className="max-w-5xl  space-y-8 text-center mx-auto text-xl mt-5">
          Capture your Thought ,Track your Mood,and see your Happiness for a
          long duration with secure space.
        </p>
      </div>
      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none z-10" />
        <div className="bg-white rounded-2xl p-4 max-full mx-auto mt-15">
          <div className=" border-b border-blue-100 pb-4 flex justify-between items-center">
            <div className="flex items-center gap-2 ml-5">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-medium">Today's Entry</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-200" />
              <div className="h-3 w-3 rounded-full bg-blue-300" />
              <div className="h-3 w-3 rounded-full bg-blue-400" />
            </div>
          </div>
          <div className="flex flex-col text-center justify-center mt-5 gap-3 p-2 scroll-none">
            <span className="text-blue-900 text-xl">
              Todays quat that must a line.
            </span>
            <Skeleton className=" h-4 bg-blue-100 rounded w-3/4" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-full" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-2/3" />
          </div>
        </div>
      </div>
      <div className="flex mt-8 p-4 justify-center  gap-4 ">
        <Link to="/dashboard">
          <Button className="bg-blue-400 px-7 py-5 cursor-pointer hover:bg-blue-300 text-md font-medium">
            Start Writing
          </Button>
        </Link>
        <Link to="/about">
          <Button className="boarder-blue-100 text-blue-600 hover:bg-blue-300 hover:text-black  px-7 py-5 cursor-pointer text-md font-medium">
            Lern More
          </Button>
        </Link>
      </div>
      <div className="mt-40  gap-8 justify-center items-center flex sm:grid-cols-1 max-h-300 ">
        <Card className="w-100 gap-2 hover:transform-scale(1.5)">
          <CardHeader>
            <CardTitle className="flex items-center  gap-2">
              <Book className="text-blue-600 h-7 w-7" />{" "}
            </CardTitle>
            <CardDescription className="text-md">
              Rich Text Editor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300 overflow-hide">
              Express your self and thaought with us and write some good
              thaought
            </p>
          </CardContent>
        </Card>
        <Card className="w-100 gap-2 hover:transform-scale(1.5)">
          <CardHeader>
            <CardTitle className="flex items-center  gap-2">
              <Sparkles className="text-blue-600 h-7 w-7" />{" "}
            </CardTitle>
            <CardDescription className="text-md">
              Daily Inspiration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300">
              Get Inpres by our Daily prompt and get happy all day.
            </p>
          </CardContent>
        </Card>
        <Card className="w-100 gap-2 hover:transform-scale(1.5)">
          <CardHeader>
            <CardTitle className="flex items-center  gap-2">
              <Lock className="text-blue-600 h-7 w-7" />{" "}
            </CardTitle>
            <CardDescription className="text-md">
              Securer & private
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300">
              Your thaoughtare save with use be sercure.and write anything you
              want
            </p>
          </CardContent>
        </Card>
      </div>
      {/* edito-cards */}
      <div className="flex justify-between mt-50 p-10">
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm px-20 ">
          <Notebook className="text-blue-600 bg-blue-200 h-9 w-9 p-1 rounded-full hover:bg-blue-100" />
          <h1 className="text-xl text-blue-700">Rich Text Editor</h1>
          <p className="text-blue-300">
            Express Your self with Our powerfull Editor
          </p>
          <div>
            <li className="decoration-blue-900">Format Text with Ease</li>
            <li>Finding Link</li>
          </div>
        </div>
        <div className="w-200 text-card-foreground flex flex-col gap-5 rounded-xl border py-6 shadow-sm px-20 bg-card  ">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none z-10" /> */}
          <div className="flex gap-3">
            <div className="h-7 w-7 bg-blue-200 rounded-sm" />
            <div className="h-7 w-7 bg-blue-200 rounded-sm" />
            <div className="h-7 w-7 bg-blue-200 rounded-sm" />
          </div>
          
            
            <Skeleton className=" h-4 bg-blue-100 rounded w-3/4" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-full" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-2/4 " />
            <Skeleton className=" h-4 bg-blue-100 rounded w-1/4 opacity-5" />
         
          

        </div>
      </div>
      {/* second editor */}
      <div className="flex justify-between mt-20 p-10">
        <div className="w-200 text-card-foreground flex flex-col gap-5 rounded-xl border py-6 shadow-sm px-20 bg-card  ">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none z-10" /> */}
          <div>
            
            <Skeleton className="  bg-blue-100 rounded h-40 w-full opacity-5" />
          </div>
          <div className="flex justify-between">
            <Skeleton className=" h-4 bg-blue-100 rounded w-1/5 opacity-5" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-1/5 opacity-5" />
            <Skeleton className=" h-4 bg-blue-100 rounded w-1/5 opacity-5" />
          </div>


          
          {/* <Skeleton className=" h-4 bg-blue-100 rounded w-1/4 opacity-5" /> */}



        </div>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm px-20 ">
          <BarChart2 className="text-blue-600 bg-blue-200 h-9 w-9 p-1 rounded-full hover:bg-blue-100" />
          <h1 className="text-xl text-blue-700">Mood Analytics</h1>
          <p className="text-blue-300">
            Track your Emotional journy throughout how year
          </p>
          <div>
            <li className="decoration-blue-900">Visual Mode Trand</li>
            <li>Pattern recognition</li>
          </div>
        </div>
       
      </div>
      <TestoMonialCarousal/>
      <div className="flex flex-col mt-50 justify-center items-center sm:p-10">
        <h1 className="text-blue-300 text-3xl text-center mb-10">Most Ask Question</h1>
        <Accordion type="single" collapsible>
          {journals.map((journals, index) => {

            return (
              <AccordionItem key={journals.q} value={`item-${index}`}className=' w-200 p-3'>
                <AccordionTrigger className='text-lg'>{journals.question}</AccordionTrigger>
                <AccordionContent className='text-md'>
                  {journals.answer}
                </AccordionContent>
              </AccordionItem>
            )

          })}
        </Accordion>
      </div>
      <Card className="bg-blue-100  text-center p-25 mt-50 gap-6">
        <CardHeader className="text-blue-900 text-3xl font-bold">Let's Start Creating a Unique thing with us Today</CardHeader>
        <CardContent className="text-md -mt-5 text-black">Join Thousand  writer who have already join with us and Discover many Unique Idea</CardContent>
        <Link to='/dashboard'>
        <Button className="bg-blue-500 text-sm hover:bg-blue-200 animate-bounce mt-5 ">
          Get Start For Free &gt; 
        </Button>
        </Link>
      </Card>

    </div>
  );
};

export default Home;
