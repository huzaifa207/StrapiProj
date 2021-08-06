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

    console.log(strapi.services.doctors.find);
    entities = await strapi.services.doctors.find();

    let filtered_entities = await entities.filter(
      (entity) => entity.contactDetails && entity.contactDetails.city === city
    );

    return filtered_entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.doctors })
    );
  },
};
