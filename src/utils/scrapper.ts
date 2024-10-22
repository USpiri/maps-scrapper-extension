import { MapItem } from "../models/item.interface";

export const scrapeData = () => {
  const RATING_CLASS = "MW4etd";
  const REVIEW_COUNT_CLASS = "UY7F9";
  const DATA_CLASS = "W4Efsd";
  const PHONE_CLASS = "UsdlK";
  const FEATURES_CLASS = "qty3Ue";
  const WEBSITE_CLASS = "lcr4fd";

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

    // Title
    const title =
      container.querySelector(".fontHeadlineSmall")?.textContent ?? "";

    // Rating and RatingCount
    const ratingContent = container.querySelector("[role='img']");
    const avgRating =
      ratingContent?.querySelector(`.${RATING_CLASS}`)?.textContent ?? "";

    // RatingCount
    const reviewsCount = ratingContent
      ?.querySelector(`.${REVIEW_COUNT_CLASS}`)
      ?.textContent?.replace(/[{()}]/g, "");

    // Address
    const address =
      dataNodes
        ?.querySelector(`.${DATA_CLASS}:nth-of-type(1) > span:last-child`)
        ?.textContent?.replace("·", "")
        .trim() ?? "";

    // Description
    const description =
      dataNodes
        ?.querySelector(`.${DATA_CLASS}:nth-of-type(2)`)
        ?.textContent?.replace("·", "")
        .trim() ?? "";

    // Accessibility
    const isAccessible =
      dataNodes?.querySelector(
        `.${DATA_CLASS}:nth-of-type(1) > * .google-symbols`,
      ) !== null;

    // Category and Address
    const category =
      dataNodes
        ?.querySelector(`.${DATA_CLASS}:nth-of-type(1) > span:first-child`)
        ?.textContent?.replace("·", "")
        .trim() ?? "";

    // Time
    const time =
      dataNodes?.querySelector(
        `.${DATA_CLASS}:nth-of-type(2) > span:not(:has(.${PHONE_CLASS})):not([aria-hidden])`,
      )?.textContent ?? "";

    // Phone
    const phone =
      dataNodes?.querySelector(
        `.${DATA_CLASS}:nth-of-type(2) > * .${PHONE_CLASS}`,
      )?.textContent ?? "";

    // Latitude
    const latitude =
      link?.getAttribute("href")?.split("!8m2!3d")[1].split("!4d")[0] ?? "";

    // Longitude
    const longitude =
      link?.getAttribute("href")?.split("!4d")[1].split("!16s")[0] ?? "";

    // DataId
    const dataId =
      link?.getAttribute("href")?.split("1s")[1].split("!8m")[0] ?? "";

    // Image
    const image =
      container.querySelector("img")?.getAttribute("src") ?? undefined;

    // Features
    const features = [
      ...(container?.querySelectorAll(
        `.${FEATURES_CLASS} > * span:not([class])`,
      ) ?? []),
    ].map((e) => e.textContent ?? "");

    // Website Link
    const website =
      container?.querySelector(`.${WEBSITE_CLASS}`)?.getAttribute("href") ?? "";

    const data: MapItem = {
      title,
      avgRating: parseFloat(avgRating) || undefined,
      reviewsCount: Number(reviewsCount) || undefined,
      address,
      description,
      category,
      time,
      phone,
      features,
      isAccessible,
      latitude,
      longitude,
      image,
      website,
      mapLink: (link as HTMLAnchorElement).href,
      dataId,
    };
    return data;
  });
};
