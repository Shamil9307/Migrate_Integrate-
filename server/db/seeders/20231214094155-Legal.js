'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Legals',
      [
        {
          img: "https://migrantmedia.ru/upload/medialibrary/b02/1-blank-migracionnogo-ucheta-2023-forma-uvedomleniya-opribytii-inostrannogo-grazhdanina-v-mesto-prebyvaniya-prilozhenie-4-k-prikazu-mvd-rf-ot-10.12.2020-n856-v-red-prikaza-mvd%20%E2%80%93rf-ot-16.11.2022.PNG",
          title: "Изменение бланка регистрации иностранных граждан",
          text: `С 1 января 2023 года вводится новый бланк уведомления для постановки иностранцев на миграционный учет.

        Новый бланк уведомления о прибытии иностранного гражданина или лица без гражданства в место пребывания – это Приложение № 4 к приказу МВД России от 10.12.2020 № 856 (в ред. Приказа МВД России от 16.11.2022 № 867).
        
        Подробную информацию об изменении бланка регистрации иностранных граждан вы найдете в этой статье.`,
          url: "https://migrantmedia.ru/novosti-migratsii-2023-izmeneniya-i-novovvedeniya-v-migratsionnom-zakonodatelstve-rf-s-2023-goda/",
        },
        {
          img: "https://cdn-crimea-news.com/img/20230529/2583eb99ec8de00b7d88e50c6dce823b_768x768.jpg",
          title: "Разрешение на временное проживание в РФ на период обучения (РВПО)",
          text: `С 1 января 2023 года иностранные граждане, которые являются студентами очных отделений, смогут без квоты оформить разрешение на временное проживание в России на период обучения (РВПО).

        РВПО позволит иностранным студентам на время обучения приобрести статус временно проживающих в РФ иностранных граждан.
        
        Кроме того, после завершения обучения в течение 3х лет иностранный гражданин с РВПО сможет подать заявление на получение вида на жительство в России, минуя необходимость получать РВП и вне зависимости от цвета диплома.`,
          url: "https://migrantmedia.ru/novosti-migratsii-2023-izmeneniya-i-novovvedeniya-v-migratsionnom-zakonodatelstve-rf-s-2023-goda/",
        },
        {
          img: "https://emcmo.mosreg.ru/upload/files/u/v/uvQifPm3lMqin6PfURrVFIJ8zUdPkWQ369wj58UgmBz8qzs4SiqodmeEJNFL98TYiPTZHmJBDHtZnR5V0I2LIizJw6l10l1B.jpg",
          title: "ОМС для временно пребывающих иностранцев",
          text: `С 1 января 2023 года большинство временно пребывающих в России иностранцев, за исключением ВКС, получили право на медицинскую помощь в рамках ОМС. Для этого работодатели должны платить за них страховые взносы не менее 3 лет.

        При этом таким иностранным гражданам для трудоустройства не нужно оформлять и предоставлять полис ДМС, также, как и договор о предоставлении платных медицинских услуг. Кроме того, таких иностранцев теперь нельзя отстранить от работы или уволить в случае истечения срока действия ДМС или договора на мед. услуги.
        `,
          url: "https://migrantmedia.ru/novosti-migratsii-2023-izmeneniya-i-novovvedeniya-v-migratsionnom-zakonodatelstve-rf-s-2023-goda/",
        },
        {
          img: "https://staff-house.ru/image/data/foto/280100.png",
          title: "Изменение НДФЛ платежа по патенту на работу",
          text: "С 1 января 2023 года изменился размер ежемесячного авансового платежа по патенту на работу для иностранных граждан. Вносить платеж за патент на работу с 1 января нужно по новой ставке.",
          url: "https://migrantmedia.ru/novosti-migratsii-2023-izmeneniya-i-novovvedeniya-v-migratsionnom-zakonodatelstve-rf-s-2023-goda/?__cf_chl_tk=RMotg5DZ2CX3Fkxe7iCLMdQ7PDIQ57zH9AiAJLTu6A0-1702544414-0-gaNycGzNDeU",
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
