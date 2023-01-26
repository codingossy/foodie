// to connect the sanity and next js
import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'



export const client = sanityClient({
    projectId: 'ratq3w3q',
    dataset: 'production',
    // current data
    apiVersion: '2022-01-24',
    useCdn: true,
    token:  'skkggUYdTSUBcpR7T0haH4JYLuHviajGs1xc5BQXsphjPoz2PBe7ImIFsCBnU790vlgJ7GYLmKymjl6tLNR6FtltQsEW3xCRdhSMp1nasosrGDcxwmc7T4xCkTP8ud6CbyOfMJMu9VtNxbmVHBpXlDhF9AUMKQxnlnqc1fXRQldEApSJkjGx'
})

const builder = ImageUrlBuilder(client)


export const urlFor = (source) => builder.image(source)