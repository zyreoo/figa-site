import Image from "next/image";
import { images } from "@/lib/images";

type Props = {
  name: string;
  alt: string;
  sizes?: string;
  fill?: boolean;
  className?: string;
  preload?: boolean;
  quality?: 75 | 85;
  style?: React.CSSProperties;
};

// Toate pozele trec pe aici, ca sa aiba dimensiuni corecte si srcset responsive.
export default function Photo({ name, alt, sizes = "100vw", fill, className, preload, quality = 75, style }: Props) {
  const src = `/img/${name}.webp`;
  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes} className={className} preload={preload} quality={quality} style={{ objectFit: "cover", ...style }} />;
  }
  const [width, height] = images[name];
  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className={className} preload={preload} quality={quality} style={style} />;
}
