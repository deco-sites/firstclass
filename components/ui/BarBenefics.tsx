import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SliderControllerJs from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface Card {
  /** @description icone image */
  title: string;
  /** @description icone image */
  icon: LiveImage;
  /** @description alt image */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
  };
}

export interface Props {
  cards?: Card[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay in mobile
   */
  interval?: number;
}

function BarBenefics({ card }: { card: Card }) {
  const {
    alt,
    title,
    icon,
    action,
  } = card;

  return (
      <a
        class="relative h-auto min-w-[100vw] justify-center overflow-y-hidden grid grid-cols-[48px_250px] md:grid-cols-[48px_230px] items-center gap-2 px-3 py-8 md:min-w-min"
        href={action?.href} 
      >
        <div class="bg-[#ffcc00] w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <image src={icon} alt={alt} width="30" height="30" />
        </div>
        <h3 class="text-base uppercase text-center md:text-left">{title}</h3>
      </a>
  );
}

function Slide({ cards, interval }: Props) {
  const id = useId();
  return (
    <>
      <div
        id={id}
        class="w-full grid grid-cols-[1fr] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px] md:grid-cols-3"
      >
        <Slider class="col-span-full row-span-full scrollbar-none gap-6 md:flex md:justify-evenly">
          {cards?.map((card, index) => <BarBenefics card={card} />)}
        </Slider>

        <SliderControllerJs rootId={id} interval={interval && interval * 1e3} />
      </div>
    </>
  );
}

export default Slide;
