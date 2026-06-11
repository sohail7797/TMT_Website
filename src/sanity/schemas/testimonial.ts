import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5),
    }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "company", media: "avatar" } },
});
