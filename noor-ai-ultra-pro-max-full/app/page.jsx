
import Link from "next/link";

export default function Home() {
  return (
    <div style={{padding:20}}>
      <h1>Noor AI Ultra Pro Max</h1>
      <p>Ultimate AI SaaS Platform</p>

      <Link href="/login">Login</Link>
      <br/>
      <Link href="/signup">Signup</Link>
      <br/>
      <Link href="/dashboard">Dashboard</Link>

    </div>
  );
}
