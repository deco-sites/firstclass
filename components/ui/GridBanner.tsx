import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Banner {
  desktop: LiveImage;
  mobile: LiveImage;
  alt: string;
  height: number;
  width: number;
  mobileheight: number;
  mobilewidth: number;
  href: string;
}

export interface Banners {
  banners: Banner[];
  lazy: boolean;
}

function GridBanner({ banner }: { banner: Banner }, lcp: boolean) {
  return (
    <div class="grid w-full">
      <a href={banner.href}>
        <Picture>
          <Source
            media="(max-width: 767px)"
            src={banner.mobile}
            width={banner.mobilewidth}
            height={banner.mobileheight}
          />
          <Source
            media="(min-width: 768px)"
            src={banner.desktop}
            width={banner.width}
            height={banner.height}
          />
          <img
            class="object-cover h-full w-full"
            loading={lcp ? "eager" : "lazy"}
            src={banner.mobile}
            alt={banner.alt}
          />
        </Picture>
      </a>
    </div>
  );
}

function ContainerGrid({ banners, lazy }: Banners) {
  return (
    <div class={`w-screen grid grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-5 lg:px-32`}>
      {banners.map((banner, index) => (
        <GridBanner banner={banner} lcp={lazy}></GridBanner>
      ))}
    </div>
  );
}

export default ContainerGrid;
