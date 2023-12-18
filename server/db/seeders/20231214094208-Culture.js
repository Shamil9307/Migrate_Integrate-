'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cultures',
      [
        {
          img: 'https://sportishka.com/uploads/posts/2022-04/1650684129_48-sportishka-com-p-krasnaya-ploshchad-moskva-dostoprimechatel-48.jpg',
          title: 'Красная площадь',
          text: 'Кра́сная пло́щадь — главная площадь Москвы, расположена между Московским Кремлём (к западу) и Китай-городом (на восток).',
          url: "https://www.kreml.ru/"
        },
        {
          img: 'https://kremltour.ru/wp-content/uploads/2023/04/tretyakovskaya-galereya-v-moskve-ekskursii.jpg',
          title: 'Третьяковская галерея',
          text: 'Третьяко́вская галере́я, также Госуда́рственная Третьяко́вская галере́я (сокр. ГТГ), Третьяко́вка — российский государственный художественный музей в Москве, созданный на основе исторических коллекций купцов братьев Павла и Сергея Михайловичей Третьяковых; одно из крупнейших в мире собраний русского изобразительного искусства.',
          url: "https://www.tretyakovgallery.ru/"
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
