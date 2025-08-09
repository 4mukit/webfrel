import Image from "next/image"

export function LargeTestimonial() {
  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-2 sm:px-4 py-10 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-3 sm:px-4 py-6 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-11 transition-all duration-500 hover:scale-105 group">
              <div className="w-full max-w-[1024px] text-center leading-7 md:leading-10 lg:leading-[64px] font-medium text-xl md:text-3xl lg:text-6xl transition-all duration-300 relative group cursor-pointer">
                <span className="text-foreground group-hover:animated-wave-text transition-all duration-300">
                  webfrel's real-time previews cut our debugging time in half and made coding collaboratively actually
                  enjoyable.
                </span>
              </div>
              <div className="flex justify-start items-center gap-5 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/images/guillermo-rauch.png"
                  alt="Abdul Mukit avatar"
                  width={48}
                  height={48}
                  sizes="48px"
                  loading="lazy"
                  className="w-12 h-12 relative rounded-full"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-foreground text-base font-medium leading-6">Abdul Mukit</div>
                  <div className="text-muted-foreground text-sm font-normal leading-6">{"CEO, webfrel"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
