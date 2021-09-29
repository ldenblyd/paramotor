import slugify from "slugify";

export const slug = (str) => {
  return slugify(str, { remove: /[^a-zA-Z\d\s:]/g });
};
