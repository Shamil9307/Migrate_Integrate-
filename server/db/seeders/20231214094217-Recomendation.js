'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Recomendations',
      [
        {
          title: 'Изучите местные обычаи и традиции',
          text: 'Познакомьтесь с основными традициями и обычаями российского общества, чтобы лучше понимать местные нормы поведения.',
          img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild3831-3762-4164-a564-323063396364__960.jpg',
        },
        {
          title: 'Будьте вежливыми и уважительными',
          text: 'Постарайтесь проявлять вежливость и уважение к местным жителям, используйте общепринятые формы обращения и избегайте конфликтов.',
          img: 'https://media.istockphoto.com/id/1151642681/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%B5%D1%80%D0%B4%D0%B8%D1%82%D1%8B%D0%B5-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D1%8C%D1%81%D1%8F.jpg?s=612x612&w=0&k=20&c=jNeSDOJCO3yHz9TuylhlTgXTlk_rrZAcve4jqi5vBSQ=',
        },
        {
          title: 'Обратитесь за помощью, если необходимо',
          text: 'Не стесняйтесь обращаться за помощью, если у вас возникнут трудности. Многие люди готовы помочь новым жителям освоиться в новой среде.',
          img: 'https://im.kommersant.ru/Issues.photo/DAILY/2023/212/KMO_125135_00140_1_t249_211338.webp',
        },
        {
          title: 'Будьте терпеливыми',
          text: 'Миграция может включать в себя адаптацию к новой культуре. Будьте терпеливыми и открытыми к новым опытам.',
          img: 'https://im.kommersant.ru/Issues.photo/CORP/2023/10/12/KSP_017764_00535_1_t249_190519.webp',
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
