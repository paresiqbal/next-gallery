import { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  // calculation
  const widthHeighRatio = photo.height / photo.width;
  const galleryHeigh = Math.ceil(250 * widthHeighRatio);
  const photoSpans = Math.ceil(galleryHeigh / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      key={photo.id}
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
            className="object-cover group-hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}
