import { CopyrightProps } from "./type.ts";

interface Props {
  props?: CopyrightProps
}

function Copyright({ props } : Props) {
  return (
    <div class="px-2 py-8 lg:py-10 w-full">
        { props?.text && <p class="font-light text-neutral500 text-caption-sm m-auto mt-2 text-center max-w-[520px] md:max-w-none" dangerouslySetInnerHTML={{ __html: props?.text }} />}
    </div>
  );
}

export default Copyright;