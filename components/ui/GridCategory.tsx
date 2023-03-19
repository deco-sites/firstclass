import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Card {
  isTitle?: boolean;
  /** @description title*/
  title: string;
  /** @description img desktop*/
  desktop: LiveImage;
  /** @description img mobile*/
  mobile: LiveImage;
  /** @description alt*/
  alt: string;
  isButton?: boolean;
  /** @description title CTA*/
  titleCta: string;
  action?: {
    /**@description href */
    href: string;
  };
}

export interface Props {
  cards: Card[];
}

function GridCategory({ card }: { card: Card }) {
  const {
    isTitle,
    title,
    desktop,
    mobile,
    alt,
    isButton,
    titleCta,
    action,
  } = card;
  console.log;
  return (
    <a
      class="w-full h-[100vw] lg:h-screen lg:max-h-[700px] relative lg:p-0 grid grid-rows-[6rem_1fr_10rem] lg:grid-rows-[9rem_1fr_10rem] justify-center items-center"
      href={action?.href}
    >
      {isTitle
        ? (
          <span class="z-10 text-center text-xl font-semibold text-gray-50 lg:text-2xl">
            {title}
          </span>
        )
        : <div></div>}
      <div class="w-full h-full"></div>
      <div class="h-full w-full absolute">
        <Picture>
          <Source
            media="(max-width: 767px)"
            src={mobile}
            width={355}
            height={399}
          >
          </Source>
          <Source
            media="(min-width: 768px)"
            src={desktop}
            width={618}
            height={694}
          >
          </Source>
          <img
            class="object-cover w-full :h-full lg:max-h-[700px]"
            src={desktop}
            alt={alt}
          >
          </img>
        </Picture>
      </div>
      {isButton
        ? (
          <button class="z-10 w-full p-2 h-[50px] text-lg border-2 border-gray-50 text-blue-50 hover:bg-blue-50 hover:text-subdued hover:font-semibold uppercase">
            {titleCta}
          </button>
        )
        : <div></div>}
    </a>
  );
}

function Grid({ cards }: Props) {
  return (
    <div class="w-full px-2 lg:px-0 grid grid-cols-1 grid-rows-3 lg:grid-rows-1 gap-5 lg:grid-cols-3 my-3">
      {cards?.map((card, index) => <GridCategory card={card} />)}
    </div>
  );
}

export default Grid;
