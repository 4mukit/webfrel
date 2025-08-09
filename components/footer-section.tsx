"use client"

import { Twitter, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4 cursor-pointer group">
            <span className="group-hover:animated-wave-text transition-all duration-300">webfrel</span>
          </div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Websites for CMS & Businesses</p>
        <div className="flex justify-start items-start gap-3">
          <a
            href="#"
            aria-label="Twitter"
            className="w-4 h-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Twitter className="w-full h-full text-muted-foreground hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="w-4 h-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Github className="w-full h-full text-muted-foreground hover:text-primary transition-colors duration-300" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-4 h-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="w-full h-full text-muted-foreground hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>
      {/* Right Section: Product, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Product</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Features
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Pricing
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Integrations
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Real-time Previews
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Multi-Agent Coding
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Company</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              About us
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Our team
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Careers
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Brand
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Terms of use
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              API Reference
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Documentation
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Community
            </a>
            <a
              href="/#"
              className="text-foreground text-sm font-normal leading-5 hover:underline hover:text-primary transition-all duration-300 hover:translate-x-1"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
