import { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden"
      key={photo.id}
    >
      <Image
        src={photo.src.large}
        alt={photo.alt}
        width={250}
        height={250}
        className="object-cover"
      />
    </div>
  );
}
