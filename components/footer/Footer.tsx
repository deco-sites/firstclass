import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import Copyright from "./Copyright.tsx";
import Navigation from "./Navigation.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`${_class}`}>{children}</div>;
}

import { 
  NewsletterProps,
  CopyrightProps,
  NavigationProps
} from "./type.ts";

export interface Props {
  sections?: Section[];
  newsletter: NewsletterProps;
  copyright: CopyrightProps;
  navigation: NavigationProps;
}

function Footer({ 
  sections = [],
  newsletter,
  copyright,
  navigation
}: Props) {

  return (
    <footer class="w-full bg-white flex flex-col">
      <Container class="w-full flex flex-col max-w-none">
      { newsletter?.display &&
          <FooterContainer>
            <Newsletter props={newsletter}/>
          </FooterContainer>
      }
      </Container>

      <Navigation props={navigation} />

      {
        copyright.display == "true" &&
          <Container class="w-full">
            <FooterContainer>
              <Copyright props={copyright}/>
            </FooterContainer>
          </Container>
      }
    </footer>
  );
}

export default Footer;
