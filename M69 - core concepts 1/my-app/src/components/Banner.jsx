"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {

    const router = useRouter();


    const handleButton = () =>{
        const password = prompt("Enter your password: ")

        if(password === "1234"){
            router.push("/dashboard")
        }
    }

    return (
        <div className='flex  flex-col justify-center items-center '>
           <h1 className='text-5xl'>Welcome to Dev Stories</h1>
           <button onClick={handleButton} className='px-4 py-2 bg-sky-200 text-black rounded-2xl mt-6 cursor-pointer '>Share Story</button>
        </div>
    );
};

export default Banner;