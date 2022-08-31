import fetch from "node-fetch";

export default async function getData(number) {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users/" + number)
  ).json();

  const postUsers = await (
    await fetch("https://jsonplaceholder.typicode.com/posts?id=" + number)
  ).json();

  var myArray = {
    posts: postUsers,
  };

  const merge = {
    ...users,
    ...myArray,
  };
  console.log(merge)
  return merge;
}
getData(1)