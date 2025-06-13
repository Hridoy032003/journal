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
import { Book, Sparkles, Lock, Notebook, BarChart2 } from "lucide-react";
import { useEffect } from "react";
import TestoMonialCarousal from "../components/TestoMonialCarousal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import journals from "../Data/F&Q.json";
import "../index.css";
import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="relative container mx-auto px-4 pb-16 pt-16 sm:px-2 lg:px-10" >
      <div>
        <motion.h1
          initial={{ y: 1300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="max-w-5xl space-y-8 text-center mx-auto text-4xl sm:text-3xl lg:text-5xl grediaint-title p-5"
        >
          Your Space to Reflect <br /> Share your mood and story
        </motion.h1>
        <motion.p 
          initial={{ y: 1300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
        className="max-w-5xl space-y-8 text-center mx-auto text-xl sm:text-md mt-5">
          Capture your thoughts, Track your mood, and see your happiness for a
          long duration with secure space.
        </motion.p>
      </div>

      {/* Today's Entry Section */}
      <motion.div className="relative mt-10"
        initial={{ x: -1500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay:0.6
          
        }}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none z-10" />
        <div className="bg-white rounded-2xl p-4 max-full mx-auto mt-15">
          <div className="border-b border-blue-100 pb-4 flex justify-between items-center">
            <div className="flex items-center gap-2 ml-5">
              <Calendar className="h-5 w-5 text-blue-600" />
              <motion.span 
                initial={{ x: -1500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
               
                transition={{
                  duration: 0.7,
                  delay: 0.6

               }}
              className="text-blue-900 font-medium">Today's Entry</motion.span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-200" />
              <div className="h-3 w-3 rounded-full bg-blue-300" />
              <div className="h-3 w-3 rounded-full bg-blue-400" />
            </div>
          </div>
          <div className="flex flex-col text-center justify-center mt-5 gap-3 p-2">
            <motion.span
              initial={{ x: -1500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
           
              transition={{
                duration: 0.7,
                delay: 0.6

              }}
             className="text-blue-900 text-xl">
              Today's quote that must align.
            </motion.span>
            <Skeleton className="h-4 bg-blue-100 rounded w-3/4 sm:w-full" />
            <Skeleton className="h-4 bg-blue-100 rounded w-full sm:w-full" />
            <Skeleton className="h-4 bg-blue-100 rounded w-2/3 sm:w-full" />
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex mt-8 p-4 justify-center gap-4 sm:flex-row sm:gap-6 lg:flex-row md:fex-row ">
        <Link to="/writeContent">
          <Button className="bg-blue-400 px-7 py-5 cursor-pointer hover:bg-blue-300 text-md font-medium sm:px-4 sm:py-3 w-full sm:w-auto">
            Start Writing
          </Button>
        </Link>
        <Link to="/about">
          <Button className="border-blue-100 text-blue-600 hover:bg-blue-300 hover:text-black px-7 py-5 cursor-pointer text-md font-medium sm:px-4 sm:py-3 w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center p-8">
        <Card className="w-full gap-2 hover:scale-105 transition-transform duration-300 h-50 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="text-blue-600 h-7 w-7" />
            </CardTitle>
            <CardDescription className="text-md">
              Rich Text Editor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300 overflow-hide">
              Express yourself and thoughts with us and write some good
              thoughts.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full gap-2 hover:scale-105 transition-transform duration-300 h-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-blue-600 h-7 w-7" />
            </CardTitle>
            <CardDescription className="text-md">
              Daily Inspiration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300">
              Get inspired by our Daily prompts and get happy all day.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full gap-2 hover:scale-105 transition-transform duration-300 h-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="text-blue-600 h-7 w-7" />
            </CardTitle>
            <CardDescription className="text-md">
              Secure & Private
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300">
              Your thoughts are safe with us. Be secure and write anything you
              want.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Editor Cards */}
      <div className="flex  justify-between mt-20 p-10 w-full sm:flex-col sm:gap-6 lg:flex-row">
        <div className=" bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-6 shadow-sm px-6 sm:w-full lg:w-1/2 ">
          <Notebook className="text-blue-600 bg-blue-200 h-9 w-9 p-1 rounded-full hover:bg-blue-100" />
          <h1 className="text-xl text-blue-700">Rich Text Editor</h1>
          <p className="text-blue-300">
            Express yourself with our powerful editor.
          </p>
          <div>
            <li className="decoration-blue-900">Format text with ease</li>
            <li>Find links</li>
          </div>
        </div>
        <div className="w-200 text-card-foreground flex flex-col gap-5 rounded-xl border py-6 shadow-sm px-6 sm:w-full lg:w-1/2 bg-card">
          <Skeleton className="h-4 bg-blue-100 rounded w-3/4 sm:w-full" />
          <Skeleton className="h-4 bg-blue-100 rounded w-full sm:w-full" />
          <Skeleton className="h-4 bg-blue-100 rounded w-2/4 sm:w-full" />
          <Skeleton className="h-4 bg-blue-100 rounded w-1/4 opacity-5" />
        </div>
      </div>

      {/* Mood Analytics */}
      <div className="flex  justify-between mt-20 p-10 w-full sm:flex-col sm:gap-6 lg:flex-row">
        <div className="w-200 text-card-foreground flex flex-col gap-5 rounded-xl border py-6 shadow-sm px-6 sm:w-full lg:w-1/2 bg-card">
          <Skeleton className="bg-blue-100 rounded h-40 w-full opacity-5" />
          <div className="flex justify-between">
            <Skeleton className="h-4 bg-blue-100 rounded w-1/5 opacity-5" />
            <Skeleton className="h-4 bg-blue-100 rounded w-1/5 opacity-5" />
            <Skeleton className="h-4 bg-blue-100 rounded w-1/5 opacity-5" />
          </div>
        </div>
        <div className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-6 shadow-sm px-6 sm:w-full lg:w-1/2">
          <BarChart2 className="text-blue-600 bg-blue-200 h-9 w-9 p-1 rounded-full hover:bg-blue-100" />
          <h1 className="text-xl text-blue-700">Mood Analytics</h1>
          <p className="text-blue-300">
            Track your emotional journey throughout the year.
          </p>
          <div>
            <li className="decoration-blue-900">Visual mood trends</li>
            <li>Pattern recognition</li>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <TestoMonialCarousal />

      {/* FAQ Section */}
      <div className="flex flex-col mt-16 justify-center items-center sm:p-10">
        <h1 className="text-blue-300 text-3xl text-center mb-10">
          Most Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full sm:w-11/12 lg:w-2/3"
        >
          {journals.map((journal, index) => (
            <AccordionItem
              key={journal.q}
              value={`item-${index}`}
              className="w-full sm:w-full p-3"
            >
              <AccordionTrigger className="text-lg">
                {journal.question}
              </AccordionTrigger>
              <AccordionContent className="text-md">
                {journal.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Call to Action */}
      <Card className="bg-blue-100 text-center p-6 mt-16 gap-6">
        <CardHeader className="text-blue-900 text-3xl font-bold">
          Let's Start Creating Something Unique with Us Today
        </CardHeader>
        <CardContent className="text-md -mt-5 text-black">
          Join thousands of writers who have already joined us and discover many
          unique ideas.
        </CardContent>
        <Link to="/dashboard">
          <Button className="bg-blue-500 text-sm hover:bg-blue-200 animate-bounce mt-5">
            Get Started For Free &gt;
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
