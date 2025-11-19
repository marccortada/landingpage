export function DashboardPreview() {
  return (
    <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] md:max-w-[1160px] mx-auto">
      <div className="bg-primary-light/50 rounded-2xl p-1.5 sm:p-2 shadow-2xl">
        <video
          src="/video-inicio.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  )
}
