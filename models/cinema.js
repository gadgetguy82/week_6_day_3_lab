const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listTitles = function () {
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title;
  });
  return result[0];
};

// Cinema.prototype.findByGenre = function (genre) {
//   const result = this.films.filter((film)=> {
//     return film.genre === genre;
//   });
//   return result;
// };

Cinema.prototype.existsByYear = function (year) {
  const result = this.films.filter((film)=> {
    return film.year === year;
  });
  if (result.length === 0) {
    return false;
  } else {
    return true;
  }
};

Cinema.prototype.checkLength = function (time) {
  const result = this.films.every((film) => {
    return film.length > time;
  });
  return result;
};

Cinema.prototype.totalTime = function () {
  const result = this.films.reduce((sum, film)=> {
    return sum + film.length;
  }, 0);
  return result;
};

Cinema.prototype.filmsByProperty = function (propertyName, value) {
  const result = this.films.filter((film) => {
    return film[propertyName] === value
  });
  return result
};


module.exports = Cinema;
