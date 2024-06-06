export const getTitle = (suffix?: string) => ["Fitness App", "|", suffix].filter(Boolean).join(" ");

export const keywords = ["Fitness App", "Fitness", "Health", "Workout", "Exercise", "Health App"];

export const description =
  "A fitness app that helps you to start your fitness journey today. Wherever you are health is number one.";

export const authors = [{ name: "Samuel", url: "https://github.com/samueldsr99" }];

export const openGraph = {
  title: "Fitness app",
  url: "https://fitness-app-samueldsr99.vercel.app",
  description,
  siteName: "Fitness App",
  type: "website",
  images: [{ url: "https://fitness-app-samueldsr99.vercel.app/images/girl-exercising.png" }],
};

interface GetMetadataParams {
  titleSuffix?: string;
}

export const getMetadata = ({ titleSuffix }: GetMetadataParams) => {
  return {
    title: getTitle(titleSuffix),
    description,
    keywords,
    authors,
    openGraph,
  };
};
