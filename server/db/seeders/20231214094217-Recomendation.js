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
          img: 'https://im.kommersant.ru/Issues.photo/DAILY/2023/212/KMO_125135_00140_1_t249_211338.webp',
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
