import Text from "$store/components/ui/Text.tsx";

import { NewsletterProps } from "./type.ts";

interface Props {
  props?: NewsletterProps
}

function Newsletter({ props } : Props) {
  return (
    <div class="bg-neutral100 px-6 py-8 lg:py-10">
      <div class="flex flex-col items-center gap-6 lg:flex-row lg:gap-11 lg:justify-between xl:max-w-[1320px] xl:m-auto">
        { props?.title || props?.description ?
          <div class="flex flex-col gap-2 lg:max-w-[392px] w-full sm:px-11">
            { props?.title && <Text class="font-montserrat text-black font-light text-center max-w-[300px] sm:m-auto lg:text-heading-3 lg:w-[392px] lg:max-w-none" dangerouslySetInnerHTML={{ __html: props?.title }} /> }

            { props?.description && <Text class="font-light text-black text-caption-sm w-full mt-2 sm:text-center lg:text-justify" dangerouslySetInnerHTML={{ __html: props?.description }} /> }
          </div> : null
        }
        <form class="flex flex-col gap-2 w-full max-w-none font-montserrat sm:px-11 lg:flex-row lg:gap-4"
        >
          <input
            class="p-3 flex-grow bg-white focus:border-black border-1 outline-none transition text- text-button lg:w-full"
            placeholder="Nome"
          />
          <input
            class="p-3 flex-grow bg-white focus:border-black border-1 outline-none transition text-button lg:w-full"
            placeholder="E-mail"
          />
          <button class="btn bg-black text-white text-caption leading-4 py-4 px-8 w-auto w-fit-content self-center min-w-[184px] mt-2 lg:mt-0 lg:p-3 lg-max-w-[184px]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
