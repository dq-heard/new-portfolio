import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client: SanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-10",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source).url() || "";
