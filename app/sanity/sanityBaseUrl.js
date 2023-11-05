const sanityBaseUrl =
  `https://cdn.sanity.io/images/` +
  `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""}/` +
  `${process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""}`;
export default sanityBaseUrl