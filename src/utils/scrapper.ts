import { MapItem } from "../models/item.interface";

export const scrapeData = () => {
  const ACCESSIBILITY_ICON_REGEX = /\uE934/;
  const MIDDLE_DOT_ICON_REGEX = /\u00B7/;

  return [
    ...document.querySelectorAll(
      'a[href^="https://www.google.com/maps/place"]',
    ),
  ].map((link) => {
    const container = link.closest('[jsaction*="mouseover:pane"]');
    if (!container) return null;

    const dataNodes = (
      container.childNodes[2]?.childNodes[3] as HTMLElement
    ).querySelector(".fontBodyMedium");

    // Name
    const name =
      container.querySelector(".fontHeadlineSmall")?.textContent ?? "";

    // Rating and RatingCount
    const ratingContent = container.querySelector("[role='img']");

    const [, rating = "", reviewsCount = ""] =
      (ratingContent as HTMLElement)?.textContent?.match(
        /(\d+,\d)\((\d+\.?\d*)\)/,
      ) || [];

    // Accessibility
    const isAccessible = ACCESSIBILITY_ICON_REGEX.test(
      dataNodes?.childNodes[3]?.textContent ?? "",
    );

    const [categoryContent, contactContent] = [
      ...(dataNodes?.childNodes[3].childNodes ?? []),
    ];

    // Category and Address
    const [category = "", address = ""] = [
      ...((categoryContent as HTMLElement)?.querySelectorAll(":scope > span") ||
        []),
    ].map((span) =>
      span.textContent?.replace(MIDDLE_DOT_ICON_REGEX, "").trim(),
    );

    // Time and Phone
    const [time = "", phone = ""] = [
      ...((contactContent as HTMLElement)?.querySelectorAll(":scope > span") ||
        []),
    ].map((span) =>
      span.textContent?.replace(MIDDLE_DOT_ICON_REGEX, "").trim(),
    );

    // Image
    const image = (container.querySelector("img") as HTMLImageElement)?.src;

    // Features
    const features = [...container.querySelectorAll('span[role="text"]')]
      .map((el) => el.textContent)
      .filter((el) => el !== null);

    // Website Link
    const website =
      (
        [...container.querySelectorAll("a[href]")].filter((a) =>
          (a as HTMLAnchorElement).href.startsWith(
            "https://www.google.com/maps/place/",
          ),
        )[0] as HTMLAnchorElement
      ).href ?? "";

    const data: MapItem = {
      name,
      rating,
      reviewsCount,
      isAccessible,
      category,
      address,
      time,
      phone,
      image,
      features,
      website,
      mapLink: (link as HTMLAnchorElement).href,
    };
    return data;
  });
};
