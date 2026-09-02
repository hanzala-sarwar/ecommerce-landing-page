import Achievments from "@/components/Achievments";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Unlock from "@/components/Unlock";
import Calender from "@/components/Calender";
import Customers from "@/components/Customers";
import Communityupdates from "@/components/communityupdates";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="w-full">

      {/* Navbar */}
      <Navbar />


      {/* Hero section */}
      <Hero />
     
    {/* Clients section */}
     <Clients />

{/* commnity section */}

 <Community />

 {/* unlock */}
 <Unlock/>

 {/* Achievements Section */}
 <Achievments />

 {/* Calender Section */}
 <Calender />

 {/* customers section */}
 <Customers />

 {/* community update */}

 <Communityupdates />

 {/* footer */}

 <Footer />
     


    </div>
  );
}
