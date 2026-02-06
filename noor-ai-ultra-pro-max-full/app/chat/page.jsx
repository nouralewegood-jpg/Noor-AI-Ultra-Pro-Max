
"use client";
import { useState } from "react";

export default function Chat(){

  const [message,setMessage]=useState("");
  const [messages,setMessages]=useState([]);

  async function send(){

    const userMsg={role:"user",content:message};
    setMessages([...messages,userMsg]);

    const res=await fetch("/api/chat",{
      method:"POST",
      body:JSON.stringify({message})
    });

    const data=await res.json();

    setMessages(prev=>[
      ...prev,
      {role:"assistant",content:data.reply}
    ]);

    setMessage("");
  }

  return(
    <div style={{padding:20}}>

      <h1>Noor AI Chat</h1>

      {messages.map((m,i)=>(
        <div key={i}>
          <b>{m.role}</b>: {m.content}
        </div>
      ))}

      <input
      value={message}
      onChange={e=>setMessage(e.target.value)}
      />

      <button onClick={send}>
        Send
      </button>

    </div>
  );
}
