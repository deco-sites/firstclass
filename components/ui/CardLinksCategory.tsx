import SliderControllerJs from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { tw } from "https://esm.sh/v96/twind@0.16.17/deno/css.js";

export interface Card {
  /** @description icon card*/
  icon: LiveImage;
  /** @description title category*/
  title: string;
  /** @description heigth*/
  alt: string;
  /** @description heigth*/
  height: number;
  /** @description width*/
  width: number;
  /** @description href*/
  href: string;
//   action: {
//     ishover?: boolean;
//     iconhover?: LiveImage;
//   };
}

export interface Props {
  /**@description title*/
  title: string;
  /**@description array from card links */
  cards: Card[];
  /**@description interval */
  interval: number;
}

function ItemCard({ card }: { card: Card }) {
  const {
    icon,
    title,
    alt,
    height,
    width,
    href,
  } = card;

//   const [ishover, setIsHover] = useState(false);
//   const [src, setSrc] = useState(icon);

//   useEffect(() => {
//     console.log("over");
//     if (ishover && action.ishover) {
//       setSrc(action.iconhover || icon);
//     }
//     setSrc(icon);
//   }, [ishover]);

//   function Clicked() {
//     console.log("click");
//   }
  return (
    <div
      class="relative h-auto min-w-[100vw] lg:min-w-full overflow-y-hidden "
    >
      <a
        class="w-full grid grid-cols-1 grid-rows justify-items-center p-3"
        href={href}
      >
        <image
          src={icon}
          alt={alt}
          height={height}
          width={width}
        />
        <p class="text-sm text-default mt-3">{title}</p>
      </a>
    </div>
  );
}

function Dots({ cards, interval }: Props) {
  return (
    <>
      <ol class="flex items-center justify-center col-span-full gap-1 z-10 row-start-5 lg:hidden">
        {cards?.map((_, index) => (
          <li class="h-[20px] w-[20px]">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full rounded focus:outline-none group"
            >
              <div
                class={tw`bg-neutral100 group-disabled:${"bg-black"} w-3 sm:w-3 h-3 rounded-full group-disabled:bg-black`}
              />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

function Controls() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2 lg:hidden">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-default-inverse text-black"
            size={30}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2 lg:hidden">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-default-inverse text-black"
            size={30}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

function CardLinksCategory({ cards, title, interval }: Props) {
  const id = useId();

  return (
    <div class="w-full my-5">
      <h2 class="w-full text-center text-xl">{title}</h2>
      <div
        id={id}
        class=" relative w-full grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px] lg:grid-cols-5"
      >
        <Slider class="col-span-full row-span-full scrollbar-none gap-6 lg:flex lg:justify-center lg:gap-3 lg:px-24">
          {cards.map((card, index) => <ItemCard card={card} />)}
        </Slider>

        <Controls />

        <Dots cards={cards} interval={interval} />

        <SliderControllerJs rootId={id} interval={interval && interval * 1e3}  />
      </div>
    </div>
  );
}

export default CardLinksCategory;
