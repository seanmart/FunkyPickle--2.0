// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Event documents */
interface EventDocumentData {
  /**
   * Name field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Location field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  location: prismicT.KeyTextField;
  /**
   * Start Date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: event.start
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  start: prismicT.DateField;
  /**
   * End Date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: event.end
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  end: prismicT.DateField;
  /**
   * Logo field in *Event*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: event.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  logo: prismicT.LinkToMediaField;
  /**
   * Background field in *Event*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: event.background
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  background: prismicT.LinkToMediaField;
  /**
   * Primary Color field in *Event*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: event.primaryColor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  primaryColor: prismicT.ColorField;
  /**
   * Secondary Color field in *Event*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: event.secondaryColor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  secondaryColor: prismicT.ColorField;
  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: event.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<EventDocumentDataSlicesSlice>;
}
/**
 * Slice for *Event → Slice Zone*
 *
 */
type EventDocumentDataSlicesSlice =
  | SectionSlice
  | HeadlineSlice
  | SliderSlice
  | ParagraphSlice
  | MediaSlice;
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = never;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Margins field in *Page*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: page.margins
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  margins: prismicT.BooleanField;
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
  /**
   * Media field in *Page*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: page.media
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  media: prismicT.LinkToMediaField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismicT.ImageField<never>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | SectionSlice
  | HeadlineSlice
  | ParagraphSlice
  | MediaSlice
  | EventsSlice
  | SliderSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes =
  | EventDocument
  | NavigationDocument
  | PageDocument;
/**
 * Primary content in Events → Primary
 *
 */
interface EventsSliceDefaultPrimary {
  /**
   * hide field in *Events → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: events.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
  /**
   * Display field in *Events → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: events.primary.isCarousel
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  isCarousel: prismicT.BooleanField;
}
/**
 * Default variation for Events Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<EventsSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Events*
 *
 */
type EventsSliceVariation = EventsSliceDefault;
/**
 * Events Shared Slice
 *
 * - **API ID**: `events`
 * - **Description**: `Events`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventsSlice = prismicT.SharedSlice<"events", EventsSliceVariation>;
/**
 * Primary content in Headline → Primary
 *
 */
interface HeadlineSliceDefaultPrimary {
  /**
   * hide field in *Headline → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: headline.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
  /**
   * text field in *Headline → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: headline.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for Headline Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadlineSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HeadlineSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Headline*
 *
 */
type HeadlineSliceVariation = HeadlineSliceDefault;
/**
 * Headline Shared Slice
 *
 * - **API ID**: `headline`
 * - **Description**: `Headline`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadlineSlice = prismicT.SharedSlice<
  "headline",
  HeadlineSliceVariation
>;
/**
 * Primary content in Media → Primary
 *
 */
interface MediaSliceDefaultPrimary {
  /**
   * hide field in *Media → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: media.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
  /**
   * Media field in *Media → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media.primary.media
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  media: prismicT.LinkToMediaField;
  /**
   * Height field in *Media → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Large
   * - **API ID Path**: media.primary.height
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  height: prismicT.SelectField<
    "Large" | "Medium" | "Small" | "16/9" | "Square",
    "filled"
  >;
  /**
   * Autoplay field in *Media → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: media.primary.autoplay
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  autoplay: prismicT.BooleanField;
}
/**
 * Default variation for Media Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<MediaSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Media*
 *
 */
type MediaSliceVariation = MediaSliceDefault;
/**
 * Media Shared Slice
 *
 * - **API ID**: `media`
 * - **Description**: `Media`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MediaSlice = prismicT.SharedSlice<"media", MediaSliceVariation>;
/**
 * Primary content in Paragraph → Primary
 *
 */
interface ParagraphSliceDefaultPrimary {
  /**
   * hide field in *Paragraph → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: paragraph.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
  /**
   * Text field in *Paragraph → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Paragraph*
 *
 */
type ParagraphSliceVariation = ParagraphSliceDefault;
/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: `Paragraphs of copy`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ParagraphSlice = prismicT.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;
/**
 * Primary content in Section → Primary
 *
 */
interface SectionSliceDefaultPrimary {
  /**
   * hide field in *Section → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
  /**
   * Label field in *Section → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Type field in *Section → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Large
   * - **API ID Path**: section.primary.type
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  type: prismicT.SelectField<"Large" | "Small" | "Invisible", "filled">;
}
/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<SectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Section*
 *
 */
type SectionSliceVariation = SectionSliceDefault;
/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: `A section of the website with a label for the navbar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionSlice = prismicT.SharedSlice<
  "section",
  SectionSliceVariation
>;
/**
 * Primary content in Slider → Primary
 *
 */
interface SliderSliceDefaultPrimary {
  /**
   * hide field in *Slider → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: slider.primary.hide
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  hide: prismicT.BooleanField;
}
/**
 * Item in Slider → Items
 *
 */
export interface SliderSliceDefaultItem {
  /**
   * Media field in *Slider → Items*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].media
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  media: prismicT.LinkToMediaField;
  /**
   * Header field in *Slider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].header
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  header: prismicT.KeyTextField;
  /**
   * Text field in *Slider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismicT.KeyTextField;
  /**
   * Link field in *Slider → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
  /**
   * Footer field in *Slider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].footer
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  footer: prismicT.KeyTextField;
}
/**
 * Default variation for Slider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<SliderSliceDefaultPrimary>,
  Simplify<SliderSliceDefaultItem>
>;
/**
 * Slice variation for *Slider*
 *
 */
type SliderSliceVariation = SliderSliceDefault;
/**
 * Slider Shared Slice
 *
 * - **API ID**: `slider`
 * - **Description**: `Slider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderSlice = prismicT.SharedSlice<"slider", SliderSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      EventDocumentData,
      EventDocumentDataSlicesSlice,
      EventDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocumentDataSlicesSlice,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      EventsSliceDefaultPrimary,
      EventsSliceDefault,
      EventsSliceVariation,
      EventsSlice,
      HeadlineSliceDefaultPrimary,
      HeadlineSliceDefault,
      HeadlineSliceVariation,
      HeadlineSlice,
      MediaSliceDefaultPrimary,
      MediaSliceDefault,
      MediaSliceVariation,
      MediaSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceDefault,
      ParagraphSliceVariation,
      ParagraphSlice,
      SectionSliceDefaultPrimary,
      SectionSliceDefault,
      SectionSliceVariation,
      SectionSlice,
      SliderSliceDefaultPrimary,
      SliderSliceDefaultItem,
      SliderSliceDefault,
      SliderSliceVariation,
      SliderSlice,
    };
  }
}
