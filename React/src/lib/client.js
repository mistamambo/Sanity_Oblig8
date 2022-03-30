import sanityClient from '@sanity/client'

const options = {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:  process.env.REACT_APP_SANITY_DATASET_NAME,
    apiVersion: '2022-03-29',
  }

const client = sanityClient ({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client

