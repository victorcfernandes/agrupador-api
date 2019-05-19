exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("groups").insert([
        {
          id: 1,
          name: "Garfo de EJCM 1",
          link: "www",
          lat: 1,
          lng: 2,
          description:
            "Irure elit commodo veniam nisi nisi. Veniam enim aute reprehenderit ullamco quis consectetur nostrud. Qui ea cupidatat officia tempor ut ex ad irure sit exercitation consequat sit. Nostrud irure ex voluptate velit eiusmod"
        },
        {
          id: 2,
          name: "Garfo de EJCM 2",
          link: "www",
          lat: 1,
          lng: 2,
          description:
            "Laboris amet irure ut consectetur et. Commodo proident ipsum anim velit velit id. Fugiat nostrud culpa est minim officia est officia cupidatat eiusmod."
        },
        {
          id: 3,
          name: "Garfo de EJCM 3",
          link: "www",
          lat: 1,
          lng: 2,
          description:
            "Minim cupidatat Lorem minim quis eiusmod dolor aliqua pariatur ipsum. Enim tempor ea dolore proident sint ad aliquip. Consectetur non cupidatat Lorem culpa ut ut reprehenderit tempor ullamco quis."
        }
      ]);
    });
};
