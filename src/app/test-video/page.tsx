export default function VideoTest() {
  return (
    <main>
      <h1>Video de prueba</h1>
      <video
        src="/video-main.mp4"
        width="600"
        controls
        autoPlay
        muted
        loop
        poster="/video-poster.jpg"
      >
        Tu navegador no soporta video.
      </video>
    </main>
  );
}
