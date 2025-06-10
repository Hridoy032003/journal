import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const JournalEntery = () => {
  return (
    <>
      <div className="p-10 ">
        <Link
          to="/dashboard"
          className="flex gap-3 mb-5 text-lg items-center text-blue-300"
        >
          {" "}
          <ArrowLeft /> Back to Dahboard
        </Link>
        <h1 className="text-5xl md:6xl grediaint-title">
          What's In Your Mind?
        </h1>
        <form action="" className="mt-5">
          <div className="flex flex-col h-20 gap-2">
            <label className="text-lg">Title</label>
           <Input placeholder="Enter Your Title here..."className='p-5'/>
          </div>
        </form>
      </div>
    </>
  );
};

export default JournalEntery;
