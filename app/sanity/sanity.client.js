import { createClient } from "@sanity/client"

const config = {
  projectId: "jlhiwk2w",
  dataset: "production",
  apiVersion: "2023-11-01",
  useCdn: false,
}

const client = createClient(config)

export default client