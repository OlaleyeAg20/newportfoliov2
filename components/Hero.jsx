import {Arrow, Linkedin, Github} from "./Icon"
import Image from "next/image"

export default function Hero(){
  return (
    <section className="p-8 flex-wrap flex gap-8 items-center justify-center">
      <div className="flex flex-col gap-4 ">
        <h1 className="font2 text-[57px]">
          HI, I AM AYOMIDE OLALEYE
        </h1>
        <p className="leading-[160%]">
          A Nigeria based front-end developer <br /> passionate about building accessible and iser friendly websites.
        </p>
        <div className="flex gap-4 items-center">
          <button className="bg-primary text-black flex items-center pl-4 p-[5px] rounded-[100px] gap-[12px]">
            CONTACT ME
            <span className="p-[10px] rounded-full bg-black text-white">
              <Arrow />
            </span>
          </button>
          <a href="/" className="text-primary p-[10px] bg-foreground rounded-full">
            <Linkedin />
          </a>
          <a href="linkedin.com" className="text-primary p-[10px] bg-foreground rounded-full" target="_blank">
            <Github />
          </a> 
        </div> 
      </div>
        <Image 
        src="/assets/avater.png"
        alt="profile image"
        width="300"
        height="300"
        className="rounded"
      />
    </section>
    )
}
