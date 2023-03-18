
export interface Props {
    text?: string;
}

function BackToTop({ text }: Props) {

  return (
    <div class="fixed bottom-6 left-6 z-40">
      <a
        href="#"
        class="bg-primary500 text-black p-2 pt-1 flex flex-col justify-center align-center gap-2 min-w-[37px] min-h-[37px]"
        aria-label="Back to Top"
      >
        <div class="text-heading-5 w-full text-center">↑</div>
        { text && <div class="text-caption-sm text-uppercase hidden lg:inline text-center" dangerouslySetInnerHTML={{ __html: text }}/> }
      </a>
    </div>
  );
}

export default BackToTop;