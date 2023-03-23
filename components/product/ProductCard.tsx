import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller, installments } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group border-1 border-default p-1 hover:shadow-xl hover:border-yellow-300" 
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={300}
            height={300}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={300}
            height={300}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Sizes {...product} />
            </div>
          )}
        </div>

        <div class="flex flex-col justify-center gap-1 py-2">
          <Text
            class=" text-center overflow-hidden overflow-ellipsis whitespace-nowrap"
            variant="caption"
          >
            {name}
          </Text>
          <div class="flex items-center flex-col gap-1">
            <Text
              class="line-through text-xs"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
            <Text class="font-bold text-sm" variant="caption" tone="price">A partir de 
              {" " + formatPrice(price, offers!.priceCurrency!)}
            </Text>
            <Text class="text-default text-sm" variant="caption" tone="price">{installments}</Text>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
