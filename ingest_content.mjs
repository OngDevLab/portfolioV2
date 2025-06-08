import fs from 'fs/promises';
import path from 'path';

const DOCS_DIR = 'src/content/docs/';
const OUTPUT_FILE = 'src/assets/website_content.json';

async function getMdxFiles(dir) {
  let files = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getMdxFiles(fullPath));
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Directory not found: ${dir}. Skipping.`);
    } else {
      console.error(`Error reading directory ${dir}:`, error);
    }
  }
  return files;
}

function stripFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\s*[\s\S]*?---\s*/);
  if (frontmatterMatch) {
    return content.substring(frontmatterMatch[0].length);
  }
  return content;
}

function stripTags(content) {
  return content.replace(/<[^>]*>/g, '');
}

async function main() {
  const contentMap = {};
  let filesProcessed = 0;

  try {
    console.log(`Starting content ingestion from ${DOCS_DIR}...`);
    const mdxFiles = await getMdxFiles(DOCS_DIR);

    if (mdxFiles.length === 0) {
      console.log(`No .mdx files found in ${DOCS_DIR}.`);
    }

    for (const filePath of mdxFiles) {
      try {
        const rawContent = await fs.readFile(filePath, 'utf-8');
        const contentWithoutFrontmatter = stripFrontmatter(rawContent);
        const textContent = stripTags(contentWithoutFrontmatter).replace(/\s+/g, ' ').trim();

        // Use relative path from DOCS_DIR as key
        const relativePath = path.relative(DOCS_DIR, filePath);
        contentMap[relativePath] = textContent;
        filesProcessed++;
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
      }
    }

    // Ensure output directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    try {
      await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
      // It's okay if the directory already exists
      if (error.code !== 'EEXIST') {
        throw error; // Rethrow if it's another error
      }
    }

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(contentMap, null, 2));
    console.log(`Successfully processed ${filesProcessed} files.`);
    console.log(`Website content saved to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error during content ingestion process:', error);
    process.exitCode = 1; // Indicate an error
  }
}

main();
