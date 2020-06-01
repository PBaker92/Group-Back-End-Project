"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        author: "john_doe_3",
        remark: "This is the Shizz!",
        post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
      {
        author: "kelsey-the-coder",
        remark: "Coding my socks Off!",
        post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
      {
        author: "john_doe_3",
        remark: "We're gonna Sequelize this B",
        post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        date_posted: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};