
"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function signup(){
    const {error}=await supabase.auth.signUp({
      email,password
    });

    if(!error) alert("Account created");
  }

  return(
    <div style={{padding:20}}>
      <h1>Signup</h1>

      <input placeholder="Email"
      onChange={e=>setEmail(e.target.value)}/>

      <br/>

      <input placeholder="Password" type="password"
      onChange={e=>setPassword(e.target.value)}/>

      <br/>

      <button onClick={signup}>Signup</button>

    </div>
  );
}
