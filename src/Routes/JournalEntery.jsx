import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EditorState, convertToRaw } from "draft-js";  // Import necessary functions from Draft.js
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "../components/ui/button";
import { useUser } from "@clerk/clerk-react";

const JournalEntry = () => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());  // Initialize with empty editor state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please log in to save your journal entries.");
      return;
    }

    // Convert the editor state to raw content
    const rawContent = convertToRaw(content.getCurrentContent());

    const journalData = {
      userId: user.id,
      title,
      mood,
      content: rawContent, 
      date: new Date().toISOString(),
    };

    let userJournalEntries = JSON.parse(localStorage.getItem(`journalEntries_${user.id}`)) || [];
    userJournalEntries.push(journalData);

   
    localStorage.setItem(`journalEntries_${user.id}`, JSON.stringify(userJournalEntries));

    alert("Your journal entry has been saved!");
    setTitle("");
    setMood("");
    setContent(EditorState.createEmpty()); 
  };

  return (
    <>
      <div className="p-10">
        <Link to="/dashboard" className="flex gap-3 mb-5 text-lg items-center text-blue-300">
          <ArrowLeft /> Back to Dashboard
        </Link>
        <h1 className="text-5xl md:6xl gradient-title">What's On Your Mind?</h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col h-20 gap-2">
            <label className="text-lg">Title</label>
            <Input
              placeholder="Enter Your Title here..."
              className="p-5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col h-20 gap-2 mt-5">
            <label className="text-lg">Mood</label>
            <Select value={mood} onValueChange={setMood}>
              <SelectTrigger className="w-full p-5">
                <SelectValue placeholder="Select Mood" className="text-lg" />
              </SelectTrigger>
              <SelectContent className="text-xl">
                <SelectItem value="light">😁 - Happy</SelectItem>
                <SelectItem value="dark">😭 - Sad</SelectItem>
                <SelectItem value="angry">😡 - Angry</SelectItem>
                <SelectItem value="bored">😒 - Bored</SelectItem>
                <SelectItem value="confused">😕 - Confused</SelectItem>
                <SelectItem value="love">❤️ - Love</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-100 w-full mt-5 gap-5">
            <h1 className="text-lg">Write Down Below What You're Thinking</h1>
            <Card className="mt-5 text-md h-80 overscroll-none">
              <Editor
                editorState={content}
                onEditorStateChange={setContent}
                placeholder="Write your thoughts here..."
              />
            </Card>
          </div>
          <Button type="submit" className="bg-blue-600 px-10 py-5 text-md hover:bg-blue-400 cursor-pointer">
            Publish...
          </Button>
        </form>
      </div>
    </>
  );
};

export default JournalEntry;
  