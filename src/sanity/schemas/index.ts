import type { SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { testimonial } from "./testimonial";
import { post } from "./post";

export const schemaTypes: SchemaTypeDefinition[] = [project, testimonial, post];
