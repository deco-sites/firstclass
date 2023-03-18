import { InstagramProps } from "./type.ts";

export interface Props {
    instagram: InstagramProps;
}

function InstagramCTA({
    instagram
}: Props) {
    return (
        <section class="flex justify-center bg-white py-6">
            <div class={`m-auto py-4 flex flex-col text-center text-heading-3 sm:flex-row md:py-6 lg:py-8 xl:py-10`}>
                { instagram.message }
                <a 
                    href={instagram.url ? instagram.url : "#"}
                    target={instagram.url ? "_blank" : ""}
                    class="ml-1 font-semibold"
                >
                    { instagram.accountName }
                </a>
            </div>
        </section>
    )
}

export default InstagramCTA;