import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] sm:w-[calc(100vw-80px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={1160}
          height={700}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1160px"
          priority
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
