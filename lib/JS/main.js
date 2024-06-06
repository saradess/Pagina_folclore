import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <SpeedInsights />
    </div>
  );
}

$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});