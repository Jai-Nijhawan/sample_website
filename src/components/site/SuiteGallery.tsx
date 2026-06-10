"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";

// Editorial gallery grid for a suite. Varying tile heights, click to enlarge.
export default function SuiteGallery({ images }: { images: string[] }) {
  return (
    <Lightbox images={images}>
      {(open) => (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => open(i)}
              data-cursor="View"
              className="img-frame group relative block w-full overflow-hidden"
              aria-label={`Open image ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                width={1000}
                height={i % 3 === 0 ? 1400 : 750}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
