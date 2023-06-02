let genres = prompt(`Введите Ваши любимые жанры через запятую`).toLowerCase;
if (genres === "" || genres == null) {
  console.log("Вы ввели некорректные данные");
  i--;
} else {
  personalMovieDB.genres = genres.split(`, `);
  personalMovieDB.genres.sort();
}
