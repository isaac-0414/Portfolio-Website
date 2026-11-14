import { defineConfig } from "vite";

export default defineConfig({
  // index.html at the project root is the entry point.
  // Files in public/ (images, favicon.ico, resume.pdf) are copied to the
  // build output as-is, so runtime string paths like "images/foo.png" keep working.
  build: {
    outDir: "dist",
    // JS/CSS get content hashes for long-term caching on S3/CloudFront.
    // index.html stays unhashed, so set it to no-cache on upload.
    assetsDir: "assets",
  },
});
