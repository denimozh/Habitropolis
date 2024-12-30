import Navbar from "@/components/Navbar";
import StackedImages from "@/components/main/StackedImages";
import HeroGrid from "@/components/main/Hero/HeroGrid";
import { FaCheck, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
        <Navbar />
        <div className="w-full h-[100%] bg-yellow-50 flex lg:flex-row flex-col lg:px-60 px-5 py-4 lg:py-20 gap-16">
            <div className="w-full lg:w-4/6 h-full">
                <div className="flex flex-col gap-9">
                    <p className="text-4xl text-center lg:text-left lg:text-6xl font-bold lg:leading-[70px]"><span className="text-blue-500">Unlock your Potential</span> through a thriving village</p>
                    <p className="text-md text-center lg:text-left lg:text-xl font-medium text-slate-600">
                        Turn your goals from a dream to a necessity - we boost your productivity allowing you to focus on accomplishing
                    </p>
                    <div className="flex lg:flex-row flex-col gap-2 items-center">
                        <div className='bg-primary w-fit p-5 rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                            Unlock my Potential
                        </div>
                        <div className='text-black cursor-pointer justify-center items-center p-5'>
                            I already have an account
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row gap-2 py-3">
                        <StackedImages />
                        <div className="flex flex-col gap-5 lg:gap-3 justify-center">
                            <div className="flex flex-row text-blue-500 text-xl lg:text-2xl justify-center items-center pt-3">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStarHalfStroke />
                            </div>
                            <p className="text-sm"><span className="font-bold">4.5/5</span> <span className="text-slate-400">from 876 achievers</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full rounded-lg p-5 flex flex-col bg-yellow-50">
                <HeroGrid/>
            </div>      
        </div>
        <div className="pt-16 pb-16 px-5 lg:px-60">
            <p className="text-center text-2xl text-slate-400">Presented From These Platforms</p>
            <Marquee className="pt-10 flex justify-center" autoFill={true} loop={0}>
                <Image src="/images/hacker-news-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/instagram-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/product-hunt-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/tiktok-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/hacker-news-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/instagram-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/product-hunt-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/tiktok-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/hacker-news-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/instagram-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/product-hunt-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
                <Image src="/images/tiktok-logo.webp" height={250} width={250} alt="" className="px-4 grayscale"/>
            </Marquee>
        </div>
        <div className="bg-slate-50 lg:px-60 px-5 py-28">
            <p className="text-2xl lg:text-5xl font-medium text-center px-0 lg:px-20">Achieving your Dreams will always be hard, boring and <span className="text-primary underline">unmotivating</span></p>
            <p className="text-xl text-slate-500 text-center pt-10">70% of all New Year&apos;s resolutions fail within January</p>
            <div className="pt-20">
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box">New Year&apos;s / Birthday Motivation 🎉</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">🎯 Set the Goal / Watch Motivation Videos </div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-start timeline-box">First Week - Highest point of motivation 📈</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">📉 Old Habits return - The first roadblock - The Motivation is Lost</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">☹️ Goal abandoned - Life doesn&apos;t change - <br/> Disappointment left for next year</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </li>
                </ul>
            </div>
        </div>
        <div className="bg-slate-50 lg:px-60 px-5 py-28 flex flex-col gap-5">
            <p className="text-2xl lg:text-5xl font-medium text-center px-0 lg:px-20">Habitropolis helps drive you with <span className="text-primary">Unlimited Motivation</span> into your goals</p>
            <p className="text-xl text-slate-500 text-center pt-10">Never again lack motivation with your goals - no matter how many road bumps you face</p>
            <div className="w-full flex flex-col lg:flex-row px-0 lg:px-32 gap-10 pt-14">
                <div className="w-full lg:w-[40%] bg-red-300">
                    <p>123</p>
                </div>
                <div className="w-full lg:w-[60%] flex flex-col gap-5">
                    <p className="text-primary">Habits Gamification</p>
                    <p className="text-3xl font-bold">Eliminate Procrastination</p>
                    <p className="text-slate-500 font-light">The goals you desire will no longer be dry, mundane chores. 
                        You&apos;ll be excited to work, build consistency and discpline with the upkeep of your village(s). 
                        No motivation / forcing yourself to work when your playing a game!
                    </p>
                    <div className='bg-primary w-fit p-5 rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                        Unlock my Potential
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row px-0 lg:px-32 gap-10 pt-32">
                <div className="w-full lg:w-[60%] flex flex-col gap-5">
                    <p className="text-primary">Track your Progress</p>
                    <p className="text-3xl font-bold">Visualise your Growth</p>
                    <p className="text-slate-500 font-light">
                        See how far you have progressed from your starting point - keep up with your streaks and see the growth 
                        you (and your village) had from the weeks, months or years since you&apos;ve started your goal.
                    </p>
                    <div className='bg-primary w-fit p-5 rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                        Achieve my Goals
                    </div>
                </div>
                <div className="w-full lg:w-[40%] bg-red-300">
                    <p>123</p>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row px-0 lg:px-32 gap-10 pt-32">
                <div className="w-full lg:w-[40%] bg-red-300">
                    <p>123</p>
                </div>
                <div className="w-full lg:w-[60%] flex flex-col gap-5">
                    <p className="text-primary">Flex your Progress</p>
                    <p className="text-3xl font-bold">Show off your streaks</p>
                    <p className="text-slate-500 font-light">
                        Rise on the leaderboards, show off your streaks and progress to your friends, family or online. 
                        Compete against other players on a leaderboard and maxmise your village(s) to the max.
                    </p>
                    <div className='bg-primary w-fit p-5 rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                        Unlock my Potential
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 lg:px-60 px-5 py-28 items-center flex flex-col gap-5 w-full h-fit">
            <div className="w-fit flex flex-col gap-8 justify-center items-center bg-white p-10 shadow-xl">
                <p className="text-4xl font-bold text-center">Get it Everywhere</p>
                <div className="flex flex-col lg:flex-row gap-6">
                    <Image src={"/images/badge-app-store.webp"} width={200} height={200} alt=""/>
                    <Image src={"/images/badge-play-store.webp"} width={200} height={200} alt=""/>
                    <Image src={"/images/badge-web-app.webp"} width={200} height={200} alt=""/>
                </div>
            </div>
        </div>
        <div className="bg-yellow-50 lg:px-60 px-5 py-28 w-full items-center">
            <p className="text-4xl lg:text-5xl font-bold text-center">Change your life starting <span className="text-primary">Today</span></p>
            <div className="flex flex-col lg:flex-row w-full pt-16">
                <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col items-center shadow-lg rounded-[20px] py-8 px-14">
                    <p className="text-4xl text-black pb-5">$4 <span className="text-lg text-slate-500">/month</span></p>
                    <div className='bg-primary p-3 w-full rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                        <p className="text-center">UNLOCK MY POTENTIAL</p>
                    </div>
                    <div className="pt-10 flex flex-col gap-4">
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Unlimited Habits and Easy to Understand Stats</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Update / Track Your Progress anywhere (web, iOS, Android)</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Unlimited Villages to grow with your goals</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Visualisation of your progress</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Play with multiple users</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Keep up with your streaks</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Achieve daily quests and daily rewards for completing habits</p>
                        </div>
                    </div>
                </div>

                <p className="text-3xl px-20 h-full text-center py-10">Or</p>

                <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col items-center shadow-lg rounded-[20px] py-8 px-14">
                    <p className="text-4xl text-black pb-5">$48 <span className="text-lg text-slate-500">/ lifetime deal</span></p>
                    <div className='bg-primary p-3 w-full rounded-lg text-white cursor-pointer hover:bg-blue-700'>
                        <p className="text-center">UNLOCK MY POTENTIAL</p>
                    </div>
                    <div className="pt-10 flex flex-col gap-4">
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Unlimited Habits and Easy to Understand Stats</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Update / Track Your Progress anywhere (web, iOS, Android)</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Unlimited Villages to grow with your goals</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Visualisation of your progress</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Play with multiple users</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Keep up with your streaks</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                            <FaCheck className="text-xl text-slate-500"/>
                            <p className="text-slate-500">Achieve daily quests and daily rewards for completing habits</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 lg:px-60 px-5 pt-28 w-full items-center">
            <p className="text-black text-center text-2xl lg:text-4xl font-bold">Questions And Answers</p>
            <div className="flex flex-col py-5 px-5 lg:px-60">
                <Accordion type="single" collapsible className="w-full pt-10 pb-36">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the difference between the monthly plan and the Lifetime Deal?</AccordionTrigger>
                        <AccordionContent>
                            The Lifetime deal - you get access to the app forever, with the monthly plan you only get access for the month you&apos;ve purchased for.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What happens after my free trial ends?</AccordionTrigger>
                        <AccordionContent>
                            The main features of the app are locked - but you can unlock them anytime by subscribing.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is there an iOS and Android App</AccordionTrigger>
                        <AccordionContent>
                            Yes, there is an iOS and Android port of Habitropolis. You can also sign up here and download the app later!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How many goals can I track?</AccordionTrigger>
                        <AccordionContent>
                            Unlimited with the current plans!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Can I follow other people on the app?</AccordionTrigger>
                        <AccordionContent>
                            Yes you can, you can also make them your accountability partners!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>I want to suggest a new feature!</AccordionTrigger>
                        <AccordionContent>
                            You can send me any requests / suggestions through the email below.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="border-t border-slate-600">
                    <div className="flex flex-row justify-between pt-5">
                        <div className="flex flex-col">
                            <p className="text-lg text-slate-500">Product</p>
                            <p className="text-[14px] pt-5">iOS App</p>
                            <p className="text-[14px] pt-2">Android App</p>
                            <p className="text-[14px] pt-2">Web App</p>
                            <p className="text-[14px] pt-2">Pricing</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-slate-500">Social</p>
                            <FaTwitter className="text-2xl"/>
                            <FaFacebook className="text-2xl"/>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg text-slate-500">Legal</p>
                            <Link href={"/privacy"} className="text-[14px] cursor-pointer">Terms of Use</Link>
                            <Link href={"/tos"} className="text-[14px]">Privacy Policy</Link>
                        </div>
                        <div className="flex flex-col">
                            <p>Built by denimozh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
  );
}
