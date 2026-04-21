import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export function getMdxFile(folder: "playbook" | "documentacao", slug: string) {
  const filePath = path.join(contentRoot, folder, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: data,
    content,
    slug,
  };
}

export function getAllSlugs(folder: "playbook" | "documentacao") {
  const folderPath = path.join(contentRoot, folder);

  return fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}