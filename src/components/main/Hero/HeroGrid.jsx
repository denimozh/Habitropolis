"use client"

import React, { useState, useEffect } from 'react'
import HeroGridSection from "./HeroGridSection";
import { HiOutlineArrowLeft } from 'react-icons/hi';

const HeroGrid = () => {

  const [streak, setStreak] = useState(8);
  const [villager, setVillager] = useState(14);
  const [consistency, setConsistency] = useState(86);
  const [icon, setIcon] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setStreak(streak + 1);
      setVillager(villager + 1);
      setConsistency(consistency + 1);
      setIcon("🛖");
      setIsChecked(true);
    }
  };

  return (
    <div className='flex flex-col w-full h-full'>
      <div className="w-full gap-4 flex flex-col lg:flex-row">
        <div className="flex flex-col bg-slate-50 w-fit p-3 rounded-xl shadow-lg">
          <p className={`text-xl font-light`}>
            The Hero Section Habit Village
          </p>
          <div className="flex flex-row pt-2 items-center">
            <label className={`text-2xl font-medium pr-4 ${isChecked ? "line-through" : ""}`} htmlFor="terms">
              View our hero section
            </label>
            <input
              type="checkbox"
              id="terms"
              className="w-7 h-7"
              checked={isChecked}
              onChange={handleCheckboxChange}
              disabled={isChecked}
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 bg-slate-50 py-2 px-2 items-center justify-center rounded-xl shadow-lg">
          <div className="flex flex-col w-fit items-center">
            <p className="text-3xl font-bold">{streak}</p>
            <p className="text-slate-500 text-lg text-center">🔥 Streak</p>
          </div>
          <div className="flex flex-col w-fit items-center">
            <p className="text-3xl font-bold">{villager}</p>
            <p className="text-slate-500 text-lg text-center">🏠 Villagers</p>
          </div>
          <div className="flex flex-col w-fit items-center">
            <p className="text-3xl font-bold">{consistency}%</p>
            <p className="text-slate-500 text-lg text-center">🏋️ Consistency</p>
          </div>
        </div>
      </div>

      <div className="pt-10 none lg:flex flex-row">
        <div className="w-fit h-full grid grid-cols-5 p-4 grid-rows-5 items-center bg-white shadow-xl rounded-lg cursor-pointer">
          <HeroGridSection content={"🛖"}/>
          <HeroGridSection content={"🏡"}/>
          <HeroGridSection content={"🏠"}/>
          <HeroGridSection />
          <HeroGridSection content={"🗻"}/>
          <HeroGridSection />
          <HeroGridSection />
          <HeroGridSection content={"🏠"} />
          <HeroGridSection />
          <HeroGridSection content={"🛖"}/>
          <HeroGridSection />
          <HeroGridSection content={"🏚️"}/>
          <HeroGridSection />
          <HeroGridSection />
          <HeroGridSection content={"🏢"}/>
          <HeroGridSection />
          <HeroGridSection content={icon} />
          <HeroGridSection />
          <HeroGridSection />
          <HeroGridSection content={"🌳"} />
          <HeroGridSection />
          <HeroGridSection />
          <HeroGridSection />
          <HeroGridSection content={"🌳"}/>
          <HeroGridSection content={"🌳"}/>
        </div>
        <div className='flex flex-col gap-10 pt-10 lg:pt-0 pl-6'>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-4xl'><HiOutlineArrowLeft /></p>
            <p>Decorate your village with greenary</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-4xl'><HiOutlineArrowLeft /></p>
            <p>Tick your habits to grow your village</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-4xl'><HiOutlineArrowLeft /></p>
            <p>Upgrade your life with your village</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;