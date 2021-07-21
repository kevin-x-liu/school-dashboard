export default async function DeleteEvent(id) {
  let data = {};
  data.id = id;
  return fetch("http://localhost:8000/admin/edit-calendar/delete-event", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
