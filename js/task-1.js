
function slugify(title) {
  let newtitle = title.toLowerCase().split(" ");
  /* перетворив рядок на маленький регістр та перетворив на масив*/
  return newtitle.join('-');
  /*потім викликаю масив із дефісом*/
}



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
