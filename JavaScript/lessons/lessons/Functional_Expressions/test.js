
const firstPost = {
  id: 1,
  author: 'Sergey',
}

/* const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})

console.log(newPost(firstPost)) */

const postNew = (post, addedTime = Date()) => {
  const newPost = {...post, addedTime}
  return newPost
}

console.log(postNew(firstPost))