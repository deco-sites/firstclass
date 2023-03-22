import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SliderControllerJs from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface InfosSlides {
  /** @description Icon ilustration*/
  icon: LiveImage;
  /** @description text insformation*/
  text: string;
  /** @description alt from icon*/
  alt: string;
  /** @description alt from icon*/
  textBold?:{
    /**@description is text bold optional */
    isBold?: boolean;
    /**@description text bold optional */
    text?: string;
  }
}

export interface Props {
  infos: InfosSlides[];

  interval: number;

  action?: {
    /** href */
    href?: string;
  };
}

function ItemSlide({ info }: { info: InfosSlides }) {
  const {
    icon,
    text,
    alt,
    textBold
  } = info;

  return (
    <div class="relative h-auto min-w-[100vw] flex items-center justify-center overflow-y-hidden py-2">
      <image class="mx-3" src={icon} alt={alt} width={20} height={20} />
      <span>{text + ""}</span>
      {textBold?.isBold ? <span class="font-bold">{" " + textBold?.text}</span> : ""}
    </div>
  );
}

function SlidePosHeader({ infos, interval, action }: Props) {
    const id = useId();
  return (
    <a href={action?.href} id={id} class="fixed bg-yellow-custom flex items-center justify-center col-span-full gap-1 z-20 row-start-4">
      <Slider class="col-span-full row-span-full scrollbar-none gap-6 ">
        {infos.map((info, index) => <ItemSlide info={info} />)}
      </Slider>

      <SliderControllerJs rootId={id} interval={interval && interval * 1e3} />
    </a>
  );
}

export default SlidePosHeader;
