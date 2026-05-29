import Image from "next/image";

const aspectMap = {
  portrait:  "aspect-[2/3]",
  landscape: "aspect-[4/3]",
  square:    "aspect-square",
};

export default function ImageFrame({ src, alt = "", className = "", aspectRatio = "portrait" }) {
  return (
    <div className={`relative overflow-hidden shadow-frame ${aspectMap[aspectRatio]} ${className}`}>
      {/* ornamental inner border */}
      <div className="absolute inset-[6px] border border-gold-600/30 pointer-events-none z-10" />

      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ filter: "sepia(60%) contrast(0.95) brightness(0.95)" }}
        />
      ) : (
        <div className="absolute inset-0 bg-parchment-300" />
      )}
    </div>
  );
}
