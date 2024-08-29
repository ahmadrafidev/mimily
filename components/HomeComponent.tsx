'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon, Smile, Zap, CheckIcon } from "lucide-react";

export default function HomeComponent() {

  const images = [
    { src: '/images/smile.png', alt: 'Sample Meme 1' },
    { src: '/images/smile.png', alt: 'Sample Meme 1' },
    { src: '/images/smile.png', alt: 'Sample Meme 1' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-400 to-cyan-600">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Smile className="h-7 w-7 text-yellow-400" />
          <span className="ml-2 text-3xl font-bold text-white dark:text-black">Mimily</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button className="text-cyan-700 bg-white hover:bg-purple-100 rounded-lg">
            Create Meme
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Create hilarious memes in seconds!
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Mimily is a fun and easy-to-use web application that allows you to create custom memes using a variety of popular templates.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="text-cyan-700 bg-white hover:bg-purple-100 rounded-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <CheckIcon className="flex-shrink-0" />
                  <span className="text-lg">No sign-up required</span>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2 text-white">
                    <ImageIcon className="h-5 w-5" />
                    <span>Wide variety of meme templates</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <Zap className="h-5 w-5" />
                    <span>Quick and easy editing</span>
                  </li>
                  <li className="flex items-center gap-2 text-white">
                    <ArrowRight className="h-5 w-5" />
                    <span>Instant sharing to social media</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                  <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={400}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-white">© 2024 Mimily. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="/terms-of-service">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
