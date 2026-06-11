import { defineType, defineField } from "sanity";

/** Blog / insights post — ready for future content marketing & SEO. */
export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
