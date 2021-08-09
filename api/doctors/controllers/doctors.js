"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByCity: async (ctx) => {
    let entities = [];
    let { city } = ctx.params;

    entities = await strapi.services.doctors.find({ city: city });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.doctors })
    );
  },

  create: async (ctx) => {},
};
