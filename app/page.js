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
    <div className="w-full ">

      {/* Navbar */}
      <Navbar />


{/* Home section */}
 
 <div className="flex flex-col gap-40px">
 {/* Hero section */}
      <Hero />
     
    {/* Clients section */}
     <Clients />

{/* commnity section */}

 <Community />
 </div>

 
      


{/* Body section */}
<div className="flex flex-col gap-[48px]">
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

 </div>

 {/* footer */}

 <Footer />
     


    </div>
  );
}
