import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'food',
  title: 'food',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      // category: 'category',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'price',
        title: 'price',
        type: 'array',
        of : [ { type: 'number'} ]
      }),
      defineField({
        name: 'details',
        title: 'details',
        type: 'string',
      }),
      defineField({
        name: 'more_details',
        title: 'more_details',
        type: 'string',
      }),
      defineField({
        name: 'category',
        title: 'category',
        type: 'string',
      }),
  ],
})
