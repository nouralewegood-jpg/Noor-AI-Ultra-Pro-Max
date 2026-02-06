
"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Login(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function login(){
    const {error}=await supabase.auth.signInWithPassword({
      email,password
    });

    if(!error) alert("Logged in");
  }

  return(
    <div style={{padding:20}}>
      <h1>Login</h1>

      <input placeholder="Email"
      onChange={e=>setEmail(e.target.value)}/>

      <br/>

      <input placeholder="Password" type="password"
      onChange={e=>setPassword(e.target.value)}/>

      <br/>

      <button onClick={login}>Login</button>

    </div>
  );
}
