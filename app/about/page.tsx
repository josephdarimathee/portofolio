import React from "react";
import Aboute from "@/components/sub/aboute";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
}

const Service = () => {
    return (
        <div className="relative flex flex-col h-full w-full z-20" id="about-me">

            <Aboute />
        </div>
    );
};

export default Service