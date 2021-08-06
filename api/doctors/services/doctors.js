"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  searchCity: async (params) => {
    let results = await strapi
      .query("doctors")
      .find([{ path: "contactDetails", populate: { path: "city" } }]);

    return results;
  },
};
