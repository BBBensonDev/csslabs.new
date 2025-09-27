const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  eleventyConfig.addFilter("parseDate", function(dateValue) {
    try {
      // Handle JavaScript Date objects
      if (dateValue instanceof Date) {
        return DateTime.fromJSDate(dateValue).toLocaleString(DateTime.DATE_FULL);
      }
      
      // Handle string dates
      if (typeof dateValue === 'string') {
        return DateTime.fromFormat(dateValue, "yyyy-MM-dd").toLocaleString(DateTime.DATE_FULL);
      }

      console.warn(`Invalid date value: ${dateValue}`);
      return '';
    } catch (e) {
      console.error(`Error parsing date: ${dateValue}`, e);
      return '';
    }
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "layouts",
      output: "docs"
    },
    templateFormats: ["md", "njk", "html"],
  };
};