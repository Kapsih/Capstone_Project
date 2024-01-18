import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Skyline Estates
      </h1>
      <p className="mb-4 text-slate-700">
        Skyline Estates is a project that I (Anish Kuber) created as my capstone project for the Full Stack Developer Pro
        course at Imarticus Hyderabad. I have used my skills in MERN stack to develop this website. It has been
        a wonderful process to develop this website and to hone my skills and understanding of building web applications. 
        I'm thankful to my faculty and mentors at Imarticus and Sahand(@reactproject) at Youtube for their guidance. I look forward
        learning and developing. Cheers!   
      </p>
      <p className="mb-4 text-slate-700">
        This website helps people to find their new homes; whether they are looking to rent or buy, they can find 
        the properties they are looking for here. The website allows Property Owners to list and manage their properties. 
        Built on React the website delivers a better UI experience and ensures faster loading everytime. 
      </p>
      <p className="mb-4 text-slate-700">
       If you like this project you can reach out to me on:
      </p>
      <br/>
      <div className="flex flex-col ">
      <a className="text-blue-800 items-center"href="https://www.linkedin.com/in/anish-kuber-492433187/">My LinkedIn</a>
      or
      
      <a className="text-blue-800 items-center" href=" mailto: anish.kuber@gmail.com">My Email</a>
      </div>
     
    </div>
  );
}
