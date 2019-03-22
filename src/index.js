/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
{
  // your implementation
  let first_a;
  let second_b;
  let third_c;
  let count = 0;

  for (let z = 0; z<preferences.length; z++)
{

    first_a = preferences[z];
    second_b = preferences[first_a-1];
    third_c = preferences[second_b-1];

        if ((first_a != second_b) &&
            (second_b != third_c) &&
            ((third_c-1) == z))
{
          count++;
}
}
          return (count/3)
};
