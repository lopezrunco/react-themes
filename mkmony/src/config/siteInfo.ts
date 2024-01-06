interface siteInfoI {
  credits: string;
  copyright: string;
  corporateVideoSrc: string;
}

interface siteQuoteI {
  title: string;
  quote: string;
  link: string;
  linkText: string;
}

export const siteInfo: siteInfoI = {
  credits: "MKmony Theme by lopezrunco.",
  copyright: "All rights reserved",
  corporateVideoSrc: "./assets/example-video.mp4"
};

export const siteQuote: siteQuoteI = {
  title: "Lorem ipsum dolor sit quis, excepturi.",
  quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur error ad architecto minima amet similique? Corrupti necessitatibus asperiores, recusandae, obcaecati maxime suscipit id impedit deserunt praesentium doloremque magni iste.",
  link: "/contact",
  linkText: "Contact"
};
