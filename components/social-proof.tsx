import Image from "next/image"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-xs sm:text-sm font-medium leading-tight">
        Trusted by fast-growing startups
      </div>
      <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <Image
            key={i}
            src={`/logos/logo0${i + 1}.svg`}
            alt={`Company Logo ${i + 1}`}
            width={400}
            height={120}
            sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 25vw"
            loading="lazy"
            className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px] h-auto object-contain grayscale opacity-70"
          />
        ))}
      </div>
    </section>
  )
}
