"use client";
import Head from "next/head";
//import { useState } from "react";
//import { database } from "./firebaseConfig";
import React from "react";
import { useRouter } from "next/navigation";
import SignUpButton from "./signup/page";

const router = useRouter;

// import {push , ref ,set}  from 'firebase/database';

//for real  time database
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle] = useState("");
//   const handleAddData = () => {
//     try {
//       const usersRef = ref(database, "users");
//       const newDataRef = push(usersRef);
//       set(newDataRef, {
//         title: title,
//         subtitle: subtitle,
//       });
//       setTitle("");
//       setSubTitle("");
//       alert("Data added successfully!");
//     } catch (error) {
//       console.error("firebase error", error);
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center p-12">
//       <h1 className="text-4xl font-bold text-center, my-10">Add Data</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full border p-2"
//         />
//         <input
//           type="text"
//           placeholder="sub Title"
//           value={subtitle}
//           onChange={(e) => setSubTitle(e.target.value)}
//           className="w-full border p-2"
//         />
//       </div>
//       <button
//         onClick={handleAddData}
//         className="bg-blue-500 text-white p-2 rounded"
//       >
//         Add data
//       </button>
//     </main>

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col pt-12">
        <SignUpButton />
      </div>
    </div>
  );
};

export default HomeComponent;
