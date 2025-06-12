import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import Barchart from "../components/Barchart.jsx";
import { NotebookPen } from "lucide-react";
import { Button } from "../components/ui/button.js";
import { useUser } from "@clerk/clerk-react"; // To get user information

const Dashboard = () => {
    const { user } = useUser();  // Get the logged-in user
    const [journalEntries, setJournalEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        const fetchJournalEntries = async () => {
            if (user) {
                try {
                    const response = await fetch(`/api/journalEntries?userId=${user.id}`);
                    const data = await response.json();
                    setJournalEntries(data);
                    console.log(journalEntries)
                } catch (err) {
                    setError("Failed to fetch journal entries.");
                } 
            }
        };

        fetchJournalEntries();
    }, [user]);



    

    console.log(user); // Log user data to check

    return (
        <div className="p-10">
            <div className="flex justify-between items-center sm:flex-col md:flex-row sm:gap-3 md:juas ">
                <h1 className="text-3xl gradient-title ml-10 sm:ml-0">Dashboard</h1>
                <div>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="7-day Ago" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">7-day Ago</SelectItem>
                            <SelectItem value="dark">15-day Ago</SelectItem>
                            <SelectItem value="system">30-day Ago</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mt-10 flex justify-between p-5 sm:flex-col md:flex-row sm:gap-5">
                <Card className="w-140 h-33 bg-blue-100">
                    <div className="flex flex-col ml-5">
                        <CardHeader className="font-bold text-md text-black">
                            Total Entries
                        </CardHeader>
                        <CardContent className="text-3xl font-bold text-black">{journalEntries.length}</CardContent>
                        <CardFooter className="text-sm text-gray text-gray-400">~min per day</CardFooter>
                    </div>
                </Card>
                <Card className="w-140 h-33 bg-blue-100">
                    <div className="flex flex-col ml-5">
                        <CardHeader className="font-bold text-md text-black">
                            Average Mood
                        </CardHeader>
                        <CardContent className="text-3xl font-bold text-black">7.5/10</CardContent>
                        <CardFooter className="text-sm text-gray text-gray-400">Overall mood source</CardFooter>
                    </div>
                </Card>
                <Card className="w-140 h-33 bg-blue-100">
                    <div className="flex flex-col ml-5 gap-2">
                        <CardHeader className="font-bold text-md text-black">
                            Mood Summary
                        </CardHeader>
                        <CardContent className="text-2xl font-bold text-black">
                            😒 You are too lazy
                        </CardContent>
                    </div>
                </Card>
            </div>

            <div className="bg-blue-100 h-130 p-10 w-full rounded-lg mt-10 md:">
                <h1 className="text-xl mb-3">Mood TimeLine</h1>
                <Barchart />
            </div>

            <div className="h-150 mt-30 p-5">
                <div className="flex gap-3 items-center mb-10">
                    <NotebookPen className="text-blue-500 h-8 w-8" />
                    <h1 className="text-2xl">Your Journals :-</h1>
                </div>

                {loading ? (
                    <p>Loading journal entries...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : journalEntries.length === 0 ? (
                    <p>No journal entries found.</p>
                ) : (
                    journalEntries.map((data, index) => (
                        <Card key={index} className="h-60 w-110">
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xl text-blue-300">{data.title}</h1>
                                    <div className="flex gap-2">
                                        <Button className="p-4 bg-blue-500 text-md hover:bg-blue-300 cursor-pointer">Edit</Button>
                                        <Button
                                            className="p-4 bg-red-500 text-md hover:bg-red-300 cursor-pointer"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                                <div className="h-full mt-5 gap-5">
                                    <p className="text-lg">Status: {data.mood}</p>
                                    <p className="text-xl tracking-tight mt-4">"{data.content}"</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
