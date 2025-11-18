export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <video
          src="/video-inicio.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  )
}
