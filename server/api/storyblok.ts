import StoryblokAlgoliaIndexer from 'storyblok-algolia-indexer';
import type { IncomingMessage, ServerResponse } from 'http'

export default (_req: IncomingMessage, res: ServerResponse) => {
  new StoryblokAlgoliaIndexer({
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiAdminToken: process.env.ALGOLIA_ADMIN_KEY,
    algoliaIndexName: 'storyblok',
    storyblokContentDeliveryApiToken: process.env.STORYBLOK_ACCESS_TOKEN,
  })

  res.statusCode = 200
  res.end('Algolia indexed with the data from Storyblok!')
}