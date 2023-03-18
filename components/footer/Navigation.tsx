import { NavigationProps } from "./type.ts";

interface Props {
  props?: NavigationProps
}

function Navigation({ props } : Props) {

  return (
    <div class="px-4 py-6 w-full font-montserrat max-w-[1320px] m-auto">
        {/* Desktop */}
        <div class="hidden md:grid grid-cols-4 xl:grid-cols-5 grid-rows-3 py-4 m-auto lg:py-11 px-4 gap-4 gap-y-10">
        {
            props?.cols?.map((col, index) => {
                const pos = 
                        index == 3 && "row-start-2 col-start-1 xl:row-start-1 xl:col-start-4" 
                        ||
                        index == 4 && "row-start-2 col-start-2 xl:row-start-2 xl:col-start-4" 
                        ||
                        index == 5 && "row-start-1 col-start-4 xl:row-start-1 xl:col-start-5"  
                        ||
                        index == 6 && "row-start-2 col-start-4 xl:row-start-2 xl:col-start-5" 
                        ||
                        index == 7 && "row-start-3 col-start-1"
                        ||
                        index == 8 && "row-start-3 col-start-3";

                return (
                    <div class={`flex flex-row ${pos}`}>
                        <div class="flex flex-col">
                            <div class="text-caption-lg mb-4">{col.title}</div>
                            <ul class="flex flex-col gap-3 text-caption">
                            {
                                col.items?.map((item, index) => {
                                    if (item.text) 
                                        return (
                                            <li class="hover:font-semibold transition">
                                                <a href={item.href ? item.href : "#"}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        </div>

        {/* Mobile */}
        <div class="flex flex-col py-4 md:hidden">
        {
            props?.cols?.map((col, index) => {
                return (
                    <div class="group w-full text-caption">
                        <div class="border-b-1 py-2">
                            {col.title}
                        </div>
                        <ul class="hidden group-hover:block">
                            {col.items?.map((item: { text?: string, href?: string, }, index) => {
                                return (
                                    <li class="my-2">
                                        <a href={item.href ? item.href : "#"}>
                                            {item.text}
                                        </a>
                                    </li>
                                );
                            })}
                            
                        </ul>
                    </div>
                )
            })
        }
        </div>
    </div>
  );
}

export default Navigation;