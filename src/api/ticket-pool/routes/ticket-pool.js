'use strict';

/**
 * ticket-pool router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ticket-pool.ticket-pool');
