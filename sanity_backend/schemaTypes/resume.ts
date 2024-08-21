import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the resume',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      media: 'resumeFile',
    },
    prepare({media}) {
      return {
        media: media ? media : null,
      }
    },
  },
})
