import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'orderpayment',
  title: 'orderpayment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
      options: {
        maxLength: 30,
      },
    }),
    defineField({
      name: 'phone',
      title: 'phone',
      type: 'string',
      options: {
        maxLength: 20,
      },
    }),
    defineField({
      name: 'city',
      title: 'city',
      type: 'string',
      options: {
        maxLength: 40,
      },
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'string',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
        name: 'method',
        title: 'method',
        type: 'number',
        options: {
            maxLength: 96,
          },
      }),
    defineField({
        name: 'total',
        title: 'total',
        type: 'number',
        options: {
            maxLength: 96,
          },
      }),
      defineField({
        name: 'status',
        title: 'status',
        type: 'number',
        options: {
            maxLength: 96,
          },
      }),
  ],
})
