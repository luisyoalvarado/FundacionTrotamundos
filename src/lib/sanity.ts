import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "516m33ah", // Tu ID
  dataset: "production",
  apiVersion: "2024-05-08", // Usa la fecha de hoy
  useCdn: false, 
});