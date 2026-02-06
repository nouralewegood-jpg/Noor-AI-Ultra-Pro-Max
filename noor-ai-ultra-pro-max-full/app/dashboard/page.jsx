
import Link from "next/link";

export default function Dashboard(){
  return(
    <div style={{padding:20}}>
      <h1>Dashboard</h1>

      <Link href="/chat">Open AI Chat</Link>

    </div>
  );
}
