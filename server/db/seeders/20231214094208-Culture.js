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
        {
          img: 'https://enotnavolge.ru/wp-content/uploads/0/0/e/00efbfe9de54ce60679849349a1fe69d.jpeg',
          title: 'Государственный исторический музей',
          text: 'Государственный исторический музей является крупнейшим национальным музеем в стране, а в его коллекции насчитывается больше 4 миллионов экспонатов. Все экспозиции посвящены истории России, начиная от древних времен и заканчивая XX веком.',
          url: "https://shm.ru/"
        },
        {
          img: 'https://key-ms.ru/wp-content/uploads/d/b/b/dbb22799af63254cef1050ccf8d203bd.jpeg',
          title: 'Новодевичий монастырь',
          text: 'Новодевичий монастырь в 2024 году отметит 500-летний юбилей, что делает его одним из старейших на территории Москвы. До сих пор историки не пришли к единому мнению насчет происхождения названия: одни полагают, что раньше на территории монастыря было поле, откуда юных девушек отправляли в дань Золотой Орде.',
          url: "https://novodev.msk.ru/"
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
