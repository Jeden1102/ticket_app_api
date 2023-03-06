'use strict';

/**
 * ticket-pool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticket-pool.ticket-pool');
