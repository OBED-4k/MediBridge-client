// import { Link } from "react-router";
// import HomeLayout from "../Layout/LandingLayout";
// import image from "../assets/NavI.svg";
// import Easy from "../assets/Easy.svg";
// import AI from "../assets/AI.svg";
// import Sms from "../assets/Sms.svg";
// import Lock from "../assets/SmallLock.svg";
// import Brain from "../assets/brain.svg";
// import Check from "../assets/square-check-big.svg";
// import Face from "../assets/Face.svg";
// import Message from "../assets/Button.svg";
// import Heart from "../assets/Heart.svg";
// import Baby from "../assets/Baby.svg";
// import Health from "../assets/Health.svg";
// import Tooth from "../assets/Tooth.svg";
// import Bone from "../assets/Bone.svg";
// import BagH from "../assets/BagH.svg";
// import Obgyn from "../assets/OB-GYN.svg";
// import Eye from "../assets/Eye.svg";
// import Left from "../assets/Left.svg";
// import Right from "../assets/Right.svg";
// import NavBar from "../components/NavBar";
// import Star from "../assets/star.svg";
// import Img_1 from "../assets/img_1.svg";
// import Img_2 from "../assets/img_2.svg";
// import Img_3 from "../assets/img_3.svg";
// import Arrow from "../assets/blackArrow.svg";

// export default function LandingPage() {
//   return (
//     <HomeLayout>
//       <div className="bg-[#F5F5F5]">
//         {/* First Session */}
//         <div className="bg-[#28574E] h-140 p-7 w-full md:h-180 md:pt-10 md:px-15 md:w-full lg:h-180 lg:pt-10 lg:px-15 lg:w-full">
//           <NavBar />
//           <div className="flex flex-col items-center text-center justify-center gap-13.5 relative">
//             <div className="flex flex-col items-center justify-center gap-3.5 mt-20">
//               <h1 className="fontLibre text-white font-extrabold text-[33px] lg:text-[58px] md:text-[58px] leading-none tracking-normal">
//                 Healthcare that connects you
//               </h1>
//               <p className=" w-110 mx-auto lg-mx-auto md:mx-auto lg:pt-2 md:pt-2 lg:w-150 md:w-150 text-center  text-white fontOutfit font-light text-[20px] leading-none tracking-normal">
//                 Book appointments, talk with trusted doctors, receive support,
//                 and get instant AI health guidance in one calm experience.
//               </p>
//               <div className="flex pt-8 lg:gap-6.5 lg:pt-8 md:gap-6.5 gap-5 md:pt-8">
//                 <button
//                   className="w-45 h-10 text-[18px] lg:text-[18px] text-nowrap md:w-59 md:h-13.5 lg:w-59 lg:h-13.5 rounded-md text-[#28574E] cursor-pointer bg-white border hover:border-white hover:text-white hover:bg-[#28574E] "
//                   type="submit"
//                 >
//                   Book Appointment
//                 </button>
//                 <button
//                   className="w-45 md:w-64.25 md:h-13.5 lg:w-64.25 lg:h-13.5 rounded-md  text-white border border-white cursor-pointer bg-[#28574E] hover:bg-white hover:text-[#28574E] "
//                   type="submit"
//                 >
//                   Chat With AI Support
//                 </button>
//               </div>
//             </div>
//             <div className="absolute top-75 md:top-75 lg:top-75">
//               <img src={image} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center pt-70 gap-11">
//           <div className="flex flex-col gap-4.5 items-center justify-center">
//             <div className="flex flex-col gap-2.5 w-45.25 h-10.75 rounded-[31px] bg-[#DCF2EE] fontOutfit font-normal text-[18px] leading-[100%] text-[#28574E] items-center justify-center ">
//               <p>Why MediBridge</p>
//             </div>
//             <div className="flex flex-col items-center justify-center gap-3.5">
//               <p className="fontLibre font-extrabold text-[27px] lg:text-[34px] md:text-[34px] leading-none tracking-normal">
//                 A calmer way to care for yourself.
//               </p>
//               <p className="fontOutfit font-light lg:w-120 md:w-120 lg:text-[20px] md:text-[20px] text-[20px] leading-[100%] tracking-normal text-center">
//                 One platform connecting patients with the right care, exactly
//                 when they need it.
//               </p>
//             </div>
//           </div>
//           {/* Cards */}
//           <div className="flex lg:flex-row flex-col gap-15 items-center justify-center lg:gap-14.5 ">
//             {/* 1st Card */}
//             <div className="bg-white rounded-[20px] w-88 h-58.75 ">
//               <div className="flex flex-col p-10 items-center justify-center">
//                 <img className="w-15 h-15" src={Easy} alt="" />
//                 <div className="flex flex-col items-center justify-center">
//                   <p className="fontOutfit font-medium text-24px pt-3">
//                     Easy Booking
//                   </p>
//                   <p className="fontOutfit font-light text-custom-lg tracking-normal text-center">
//                     Find and schedule appointments with verified doctors in
//                     minutes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* 2nd Card */}
//             <div className="bg-white rounded-[20px] w-88 h-58.75 ">
//               <div className="flex flex-col p-10 items-center justify-center">
//                 <img className="w-15 h-15" src={AI} alt="" />
//                 <div className="flex flex-col items-center justify-center">
//                   <p className="fontOutfit font-medium text-24px pt-3">
//                     AI Support
//                   </p>
//                   <p className="fontOutfit font-light text-custom-lg tracking-normal text-center">
//                     Get instant calm responses to your health questions 24/7.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* 3rd Card */}
//             <div className="bg-white rounded-[20px] w-88 h-58.75 ">
//               <div className="flex flex-col p-10 items-center justify-center">
//                 <img className="w-15 h-15" src={Sms} alt="" />
//                 <div className="flex flex-col items-center justify-center">
//                   <p className="fontOutfit font-medium text-24px pt-3">
//                     Message your care team
//                   </p>
//                   <p className="fontOutfit font-light text-custom-lg tracking-normal text-center">
//                     Secure conversations with doctors, with read receipts and
//                     attachments.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Second Session */}
//         <div className="flex lg:flex-row flex-col pt-20 p-12 gap-20.5 w-310">
//           {/* Left Side */}
//           <div className="flex flex-col gap-9 w-1/2 ">
//             <div className="flex flex-col gap-4.5">
//               <div className="flex flex-col gap-2.5 w-33.5 h-10.75 rounded-[31px] bg-[#DCF2EE] fontOutfit font-normal text-[18px] leading-[100%] text-[#28574E] items-center justify-center ">
//                 <p>AI Support</p>
//               </div>
//               <div className="flex flex-col gap-3.5">
//                 <h1 className="fontLibre font-extrabold w-80 text-[30px] lg:text-[34px] md:text-[34px] leading-none tracking-normal lg:w-117.5 md:w-117.5">
//                   Ask anything about your health instantly.
//                 </h1>
//                 <p className="lg:w-115 md:w-115 fontOutfit font-light w-92 text-[20px] lg:text-[20px] md:text-[20px] leading-[100%] tracking-normal">
//                   Get calm, private support from MediBridge AI before you even
//                   sign up. Talk through symptoms, prepare for a visit, or just
//                   think out loud.
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <div className="flex gap-2.5 items-center">
//                 <img src={Lock} alt="" />
//                 <p className="fontOutfit font-normal text-[18px] leading-[100%] tracking-[0%]">
//                   Anonymous — nothing leaves this device.
//                 </p>
//               </div>
//               <div className="flex gap-2.5 items-center">
//                 <img src={Brain} alt="" />
//                 <p className="fontOutfit font-normal text-[18px] leading-[100%] tracking-[0%]">
//                   Gentle and non-judgmental, 24/7
//                 </p>
//               </div>
//               <div className="flex gap-2.5 items-center">
//                 <img src={Check} alt="" />
//                 <p className="fontOutfit font-normal text-[18px] leading-[100%] tracking-[0%]">
//                   Not a replacement for medical care.
//                 </p>
//               </div>
//             </div>
//             <button
//               className="flex items-center justify-center px-8.75 py-3 w-53.75 h-13.5 rounded-md  text-white border border-white cursor-pointer bg-[#28574E] hover:bg-white hover:text-[#28574E] "
//               type="submit"
//             >
//               Start Free AI Chat
//             </button>
//           </div>

//           {/* Right Side */}
//           <div className="flex w-100 lg:w-150 h-140 lg:h-120 md:h-120 bg-white border border-[#FFFFFF] rounded-4xl p-5 ">
//             <div className="flex flex-col gap-6 w-145 h-100">
//               {/* First Chat */}
//               <div className="">
//                 <div className="flex gap-4 ">
//                   <img src={Face} alt="" />
//                   <div className="w-70 lg:w-110 md:w-110 lg:mb-5 md:mb-5">
//                     <p className="bg-[#DCF2EE99] rounded-tr-2xl rounded-br-2xl rounded-Bl-2xl px-3 py-3">
//                       How can I assist you today? I can help with symptom
//                       checking or stress management tips.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="bg-[#28574E] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl p-1.5 lg:p-4 md:p-4 lg:ml-60 md:ml-60 ml-18 lg:w-78 w-65 mt-5 lg:mt-0 md:mt-0 md:w-78 lg:h-14 md:h-14">
//                   <p className="text-white">
//                     I have a headache, what could it mean?
//                   </p>
//                 </div>

//                 {/* Second Chat */}
//                 <div>
//                   <div className="flex gap-4 mt-5">
//                     <img src={Face} alt="" />
//                     <p className="bg-[#DCF2EE99] lg:px-9 md:px-9 px-3 py-4 rounded-tr-2xl rounded-br-2xl rounded-Bl-2xl lg:w-110 md:w-110 w-70 mb-3">
//                       Headaches can be caused by many factors including stress,
//                       dehydration, or eye strain. How long has this been
//                       occurring?
//                     </p>
//                   </div>
//                   <div className="bg-[#28574E] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl lg:p-4 md:p-4 lg:w-50 md:w-50 w-45 lg:h-14 md:h-14 mb-5 lg:ml-87 md:ml-87 ml-38">
//                     <p className="p-2 text-white">How do I reduce stress?</p>
//                   </div>
//                 </div>
//               </div>
//               {/* Chat Box */}
//               <div className="relative">
//                 <input
//                   className="w-120 container mx-auto flex bg-[#F1FFFD] border-2 border-[#F1FFFD] pr-12 py-3.5 pl-4 focus:border-[#28574E] focus:outline-none"
//                   type="text"
//                   placeholder="Type anything...."
//                 />
//                 <img
//                   className="absolute top-1/5 right-3/33"
//                   src={Message}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Third Section */}
//         <div className="bg-[#28574E] w-full py-20">
//           {/* Contents */}
//           <div className="flex flex-col gap-11 pt-20 items-center justify-center">
//             <div className="flex flex-col items-center justify-center gap-4.5">
//               <div className="px-6 py-2.5 w-40.25 rounded-[31px] bg-[#DCF2EE]">
//                 <p className="fontOutfit font-normal text-[18px] leading-[100%] tracking-normal text-[#28574E]">
//                   Specialty care
//                 </p>
//               </div>
//               <p className="fontLibre font-extrabold text-center text-[34px] leading-[100%] tracking-normal text-white">
//                 10+ departments. One unified record.
//               </p>
//             </div>
//             {/* Cards */}
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7 mx-8">
//               {[
//                 { src: Heart, alt: "Heart", label: "Cardiology" },
//                 { src: Baby, alt: "Baby", label: "Pediatrics" },
//                 { src: Health, alt: "Health", label: "Mental Health" },
//                 { src: Tooth, alt: "Tooth", label: "Dentistry" },
//                 { src: Bone, alt: "Bone", label: "Orthopedics" },
//                 { src: BagH, alt: "BagH", label: "General Practice" },
//                 { src: Obgyn, alt: "Obgyn", label: "OB-GYN" },
//                 { src: Eye, alt: "Eye", label: "Ophthalmology" },
//               ].map((card) => (
//                 <div
//                   key={card.label}
//                   className="bg-white rounded-[23.48px] border-[0.73px] flex flex-col items-center justify-center p-6 gap-4 lg:w-73 lg:h-37"
//                 >
//                   <img className="w-15 h-15" src={card.src} alt={card.alt} />
//                   <p className="fontOutfit text-xl font-medium leading-none tracking-normal text-center">
//                     {card.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center justify-center">
//               <button
//                 className="text-white border-white px-10.75 py-3 border-[1.5px] rounded-lg hover:border-[#28574E] hover:text-[#28574E] hover:bg-white fontOutfit text-[18px] font-medium leading-[100%] gap-2.5"
//                 type="submit"
//               >
//                 Explore all Departments
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Fourth Section */}
//         <div className="w-full flex flex-col gap-11 px-6 py-16 lg:p-30">
//           {/* Header */}
//           <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
//             <div className="flex flex-col gap-4.5">
//               <div className="flex gap-2.5 px-6 py-2.5 w-40.75 h-10.75 rounded-[31px] bg-[#DCF2EE]">
//                 <p className="fontOutfit font-normal text-nowrap leading-none text-[18px] text-[#28574E]">
//                   Patient Stories
//                 </p>
//               </div>
//               <h1 className="w-full lg:w-117.5 fontLibre font-extrabold text-[34px] leading-none tracking-normal">
//                 Real people. Real care. Real coordination
//               </h1>
//             </div>
//             <div className="flex gap-8 lg:pt-13">
//               <Link to="#">
//                 <img className="w-10.75 h-10.75" src={Left} alt="Left" />
//               </Link>
//               <Link to="#">
//                 <img className="w-10.75 h-10.75" src={Right} alt="Right" />
//               </Link>
//             </div>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 img: Img_1,
//                 quote: `"I rescheduled my mother's cardiology visit in under a minute. The whole family is on it now."`,
//                 name: "Jordan A.",
//                 role: "Family caregiver",
//               },
//               {
//                 img: Img_2,
//                 quote: `"MediCare isn't just a hospital, it's a partner in my family's health. The pediatrics team is simply the best in the state."`,
//                 name: "Priya S.",
//                 role: "Patient",
//               },
//               {
//                 img: Img_3,
//                 quote: `"I rescheduled my mother's cardiology visit in under a minute. The whole family is on it now."`,
//                 name: "Marcus W.",
//                 role: "Patient",
//               },
//             ].map((item) => (
//               <div
//                 key={item.name}
//                 className="flex flex-col h-full rounded-[10px] border border-[#EEEDED] px-4.5 py-5 gap-5 bg-[#EEEDED]"
//               >
//                 {/* Stars */}
//                 <div className="flex gap-1.25">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <img key={i} src={Star} alt="star" />
//                   ))}
//                 </div>
//                 {/* Quote */}
//                 <p className="flex-1 fontOutfit font-normal text-base leading-snug text-[#403F3F]">
//                   {item.quote}
//                 </p>
//                 {/* Divider */}
//                 <div className="border-t border-[#D2D0D0]" />
//                 {/* Author */}
//                 <div className="flex gap-2.5 items-center">
//                   <img
//                     className="w-12 h-12 rounded-full object-cover"
//                     src={item.img}
//                     alt={item.name}
//                   />
//                   <div className="flex flex-col gap-1.5">
//                     <p className="fontOutfit font-medium text-base leading-none">
//                       {item.name}
//                     </p>
//                     <p className="fontOutfit font-light text-[14px] text-[#656565]">
//                       {item.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* FAQ */}
//         <div className=" flex flex-col gap-4 mx-auto lg:w-3xl md:w-3xl h-100.5 ">
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex gap-2.5 px-6 py-2.5 rounded-[31px] bg-[#DCF2EE]">
//               <p className="w-9 h-5.75 text-[#28574E] fontOutfit font-normal text-[18px] leading-[100%] tracking-normal">
//                 FAQ
//               </p>
//             </div>
//             <p className="fontLibre font-extrabold text-[34px] leading-none tracking-normal">
//               Frequently Asked Questions
//             </p>
//           </div>
//           <div>
//             <div className="flex flex-col gap-4">
//               <div className=" flex lg:w-3xl md:w-3xl h-18.75 rounded-2xl justify-between p-6 bg-white border border-[#DDDDDD]">
//                 <p className="fontOutfit font-medium text-[20px] leading-[100%] tracking-normal text-[#191C1D] align-middle">
//                   Can i use AI assistant for free?
//                 </p>
//                 <img className="w-3 h-[7.4px]" src={Arrow} alt="" />
//               </div>
//               <div className=" flex lg:w-3xl md:w-3xl h-18.75 rounded-2xl justify-between p-6 bg-white border border-[#DDDDDD]">
//                 <p className="fontOutfit font-medium text-[20px] leading-[100%] tracking-normal text-[#191C1D] align-middle">
//                   What is a patient ID and how do i find Mine?
//                 </p>
//                 <img className="w-3 h-[7.4px]" src={Arrow} alt="" />
//               </div>
//               <div className=" flex lg:w-3xl md:w-3xl lg:h-18.75 md:h-18.75 rounded-2xl justify-between p-6 bg-white border border-[#DDDDDD]">
//                 <p className="fontOutfit font-medium text-[20px] leading-[100%] tracking-normal text-[#191C1D] align-middle">
//                   How do I book an appointment?
//                 </p>
//                 <img className="w-3 h-[7.4px]" src={Arrow} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Last Section */}
//         <div className="flex flex-col mx-auto m-10 items-center justify-center bg-[#28574E] lg:rounded-[40px] md:rounded-[40px]  w-full lg:w-6xl md:w-6xl lg:h-72.75 md:h-72.75 p-12">
//           <div className=" flex flex-col gap-12 items-center justify-center ">
//             <div className="flex flex-col gap-1.75 items-center justify-center ">
//               <p className="fontLibre font-extrabold text-[30px] lg:text-[34px] md:text-[34px] leading-none tracking-normal text-white">
//                 Stay informed on your health
//               </p>
//               <p className="fontOutfit font-light text-[#DAD8D8] text-[20px] lg:text-lg md:text-lg leading-none tracking-normal lg:w-173.25 md:w-173.25 text-center ">
//                 Get the latest health tips, medical news, and app updates
//                 delivered to your inbox once a week.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <input
//                 className="fontOutfit border border-[#FFFFFF] text-center lg:px-6 md:px-6 lg:py-4.5  md:py-4.5 rounded-lg text-white font-normal text-base leading-none tracking-normal"
//                 type="email"
//                 name="Email"
//                 id=""
//                 placeholder="Enter your email address"
//               />
//               <button
//                 className="bg-white text-[#28574E] px-12 py-4 rounded-lg font-medium text-lg/none tracking-normal fontOutfit items-center justify-center "
//                 type="submit"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HomeLayout>
//   );
// }
