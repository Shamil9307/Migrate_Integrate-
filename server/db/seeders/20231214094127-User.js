'use strict';
const { hashSync } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Admin',
          hashpass: hashSync('1', 10),
          email: '1@1',
          status: false,
          info: 'admin',
          img: 'https://sun9-1.userapi.com/impf/c638831/v638831863/10431/h2X8B4-qUNY.jpg?size=520x0&quality=95&sign=462349b2580f58b79db0899029a144a6',
          userId: null,
        },
        {
          name: 'Александрова Ирина Васильевна',
          hashpass: hashSync('1', 10),
          email: '2@2',
          status: false,
          info: `Возраст: 28 лет
          Профессия: Инженер-программист
          Хобби: Фотография, путешествия`,
          img: 'https://www.sostav.ru/images/news/2019/04/11/ym1qcllo.jpg',
          userId: null,
        },
        {
          name: 'Никитин Сергей Александрович',
          hashpass: hashSync('1', 10),
          email: '3@3',
          status: false,
          info: `Возраст: 35 лет
          Профессия: Финансовый аналитик
          Хобби: Теннис, чтение книг`,
          img: 'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-in-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
          userId: null,
        },
        {
          name: 'Петрова Елена Игоревна',
          hashpass: hashSync('1', 10),
          email: '4@4',
          status: false,
          info: `Возраст: 24 года
          Профессия: Студентка медицинского университета
          Хобби: Йога, изучение иностранных языков`,
          img: 'https://s16.stc.yc.kpcdn.net/share/i/12/12779372/wr-960.webp',
          userId: null,
        },
        {
          name: 'Козлов Иван Дмитриевич',
          hashpass: hashSync('1', 10),
          email: '5@5',
          status: false,
          info: `Возраст: 40 лет
          Профессия: Руководитель отдела продаж
          Хобби: Гольф, кулинария`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBlARNmfW_t6Skqd_EhTUROr3LGPLOjBcNw&usqp=CAU',
          userId: null,
        },
        {
          name: 'Смирнова Анна Алексеевна',
          hashpass: hashSync('1', 10),
          email: '6@6',
          status: false,
          info: `Возраст: 31 год
          Профессия: Журналист
          Хобби: Фотография, театр`,
          img: 'https://im.kommersant.ru/Issues.photo/OGONIOK/2019/020/KMO_109149_00001_1_t218_235015.jpg',
          userId: null,
        },
        {
          name: 'Кузнецов Дмитрий Павлович',
          hashpass: hashSync('1', 10),
          email: '7@7',
          status: false,
          info: `Возраст: 45 лет
          Профессия: Врач-терапевт
          Хобби: Горный туризм, кино`,
          img: 'https://kubnews.ru/upload/resize_cache/webp/iblock/b67/800_533_2/5tepgjj0e0pz4k4ys2riw5oj3nj6fyod.webp',
          userId: null,
        },
        {
          name: 'Лебедева Наталья Александровна',
          hashpass: hashSync('1', 10),
          email: '8@8',
          status: false,
          info: `Возраст: 27 лет
          Профессия: Дизайнер
          Хобби: Рисование, музыка`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22EYVqBBt_SFTAwmeSQ9zSUwtwqDQdERqjg&usqp=CAU',
          userId: null,
        },
        {
          name: 'Михайлов Андрей Сергеевич',
          hashpass: hashSync('1', 10),
          email: '9@9',
          status: false,
          info: `Возраст: 33 года
          Профессия: Инженер-строитель
          Хобби: Велоспорт, литература`,
          img: 'https://img07.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/4/26/4261befbcd7549f6ce1066f697b89731.png',
          userId: null,
        },
        {
          name: 'Абдуллаев Алишер Рустамович',
          hashpass: hashSync('1', 10),
          email: '10@10',
          status: false,
          info: `Возраст: 29 лет
          Профессия: Менеджер по маркетингу
          Хобби: Фитнес, кулинария`,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fzi_bPSae12I2AM9MGUAP0yG3OXdlKoC5Q&usqp=CAU',
          userId: null,
        },
        {
          name: 'Ахмедова Нигора Баходировна',
          hashpass: hashSync('1', 10),
          email: '11@11',
          status: false,
          info: `Возраст: 24 года
          Профессия: Студентка медицинского университета
          Хобби: Йога, изучение иностранных языков`,
          img: 'https://dekatop.com/wp-content/uploads/2019/01/people_03.jpg',
          userId: null,
        },
        {
          name: 'Исматуллаев Баходир Султанович',
          hashpass: hashSync('1', 10),
          email: '12@12',
          status: false,
          info: `Возраст: 38 лет
          Профессия: Адвокат
          Хобби: Гитара, история`,
          img: 'https://img01.rl0.ru/afisha/e780x-i/daily.afisha.ru/uploads/images/b/29/b290b5250ea1ab2d592b14aad6dc9f77.png',
          userId: null,
        },
        {
          name: 'Назарова Дилноза Самандаровна',
          hashpass: hashSync('1', 10),
          email: '13@13',
          status: false,
          info: `Возраст: 32 года
          Профессия: Учитель физики
          Хобби: Путешествия, фотография`,
          img: 'https://dekatop.com/wp-content/uploads/2019/01/people_02.jpg',
          userId: null,
        },
        {
          name: 'Усманов Шерзод Тимурович',
          hashpass: hashSync('1', 10),
          email: '14@14',
          status: false,
          info: `Возраст: 26 лет
          Профессия: Маркетолог
          Хобби: Йога, рисование`,
          img: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/8b1/b4d/b75f57559d9d23cbebe56aa4df.jpg',
          userId: null,
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
