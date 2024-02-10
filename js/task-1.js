function slugify(title) {
  const lowerCaseTitle = title.toLowerCase().split(' ');
  const slug = lowerCaseTitle.join('-');
  return slug;
}
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
///////////////////////////////////////////////////////////
// function slugify(title) {
//   const array = title.split(' ');
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     array[i] = element.toLowerCase();
//   }
//   const slug = array.join('-');
//   return slug;
// }
