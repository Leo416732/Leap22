let queueLine = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Бальбийгомбо",
  "Баатар",
  "Сүхээ",
];
queueLine.splice(8, 0, "Цэцгээ");
queueLine.splice(9, 0, "Нэргүй");

console.log(queueLine.slice(0, 10));
