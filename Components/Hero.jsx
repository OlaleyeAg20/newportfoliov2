import {Arrow, Linkedin, Github} from "./Icon"
import Image from "next/image"

export default function Hero(){
  return (
    <section>
      <div>
        <h1 className="font2 text-[57px]">
          HI, I AM AYOMIDE OLALEYE
        </h1>
        <p className="leading-[150px]">
          A Nigerian based front-end developer passionate about building accessible and iser friendly websites.
        </p>
        <div>
          <button className="bg-red-700 text-black flex items-center p-[5px] rounded-[100px] gap-[12px]">
            CONTACT ME
            <span className="p-[10px] rounded-full bg-black text-white">
              <Arrow />
            </span>
          </button>
          <a href="/" className="text-primary p-[10px]">
            <Linkedin />
          </a>
          <a href="linkedin.com" className="text-primary p-[10px]" target="_blank">
            <Github />
          </a> 
        </div> 
        <Image 
        src="/assets/avater.png"
        alt="profile image"
        width="150"
        height="150"
      />
      </div>
    </section>
    )
}