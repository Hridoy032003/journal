import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Don't forget to import axios
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel';
import { Card, CardContent } from './ui/card';

const TestoMonialCarousal = () => {
    const [quotes, setQuotes] = useState([]); // Store quotes in state

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/quotes');
                console.log(response);
                setQuotes(response.data.quotes); 
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };
        fetchQuotes();
    }, []); 

    return (
        <div className='mt-30 flex flex-col '>
            <h1 className='text-blue-500 text-center text-3xl mb-15'>What Our Authors Say</h1>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent >
                   {quotes.map((quote, index) => (
                            <CarouselItem className='md:basis-1/2 lg:basis-1/3 '>
                            <Card className='item-center flex flex-col justify-center p-10 h-50'>

                                        <span className='flex-wrap h-25 text-blue-300 italic text-center text-lg items-start'>"{quote.quote}"</span>
                                        <p className='text-md mt-5 text-blue-100'> {quote.author}</p>
                              
                               
                            </Card>
                            </CarouselItem>
                        ))}
                    
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default TestoMonialCarousal;
