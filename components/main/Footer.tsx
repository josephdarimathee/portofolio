import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a href="https://www.youtube.com/@votre_chaine" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#ff0000] transition-colors">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#7042f8] transition-colors">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a href="https://discord.com/invite/votre_invite" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#5865f2] transition-colors">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a href="https://instagram.com/votre_instagram" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#e1306c] transition-colors">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a href="https://twitter.com/votre_twitter" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#1da1f2] transition-colors">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </a>
                        <a href="https://linkedin.com/in/votre_linkedin" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#0077b5] transition-colors">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; WebChain Dev 2025 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
