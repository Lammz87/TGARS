function editPost(index) {
  const newTitle = prompt("Enter the new title:");
  const newContent = prompt("Enter the new content:");


  fetch(`/posts/${index}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle, content: newContent }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to edit post");
      }

      location.reload();
    })
    .catch((error) => console.error(error));
}

function deletePost(index) {

  fetch(`/posts/${index}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      location.reload();
    })
    .catch((error) => console.error(error));
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


