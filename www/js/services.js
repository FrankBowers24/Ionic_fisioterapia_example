angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Diccionario', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var diccionarios = [
    { id: 0, name: 'Scruff McGruff', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex eaque officia ipsa est, facere, necessitatibus consequuntur. Non deserunt quas cupiditate distinctio earum id in, atque ut at iure repudiandae.' },
    { id: 1, name: 'G.I. Joe', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores impedit ab facilis quo fuga ducimus doloremque, possimus soluta consequatur, amet corporis quis deleniti. Optio dolore, perspiciatis quibusdam amet incidunt.' },
    { id: 2, name: 'Miss Frizzle', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum magni dolore suscipit sit tenetur, voluptate ratione rerum error iusto quod debitis rem numquam amet asperiores sapiente nam dolor at.' },
    { id: 3, name: 'Ash Ketchum', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reiciendis quos sint id optio delectus eum cumque, vel, sunt tempore fuga, sed perferendis saepe vitae voluptas magni, nobis sapiente sit?' },
    { id: 4, name: 'Scruff McGruff', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex eaque officia ipsa est, facere, necessitatibus consequuntur. Non deserunt quas cupiditate distinctio earum id in, atque ut at iure repudiandae.' },
    { id: 5, name: 'G.I. Joe', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores impedit ab facilis quo fuga ducimus doloremque, possimus soluta consequatur, amet corporis quis deleniti. Optio dolore, perspiciatis quibusdam amet incidunt.' },
    { id: 6, name: 'Miss Frizzle', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum magni dolore suscipit sit tenetur, voluptate ratione rerum error iusto quod debitis rem numquam amet asperiores sapiente nam dolor at.' },
    { id: 7, name: 'Ash Ketchum', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reiciendis quos sint id optio delectus eum cumque, vel, sunt tempore fuga, sed perferendis saepe vitae voluptas magni, nobis sapiente sit?' },
    { id: 8, name: 'Scruff McGruff', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex eaque officia ipsa est, facere, necessitatibus consequuntur. Non deserunt quas cupiditate distinctio earum id in, atque ut at iure repudiandae.' },
    { id: 9, name: 'G.I. Joe', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores impedit ab facilis quo fuga ducimus doloremque, possimus soluta consequatur, amet corporis quis deleniti. Optio dolore, perspiciatis quibusdam amet incidunt.' },
    { id: 10, name: 'Miss Frizzle', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum magni dolore suscipit sit tenetur, voluptate ratione rerum error iusto quod debitis rem numquam amet asperiores sapiente nam dolor at.' },
    { id: 11, name: 'Ash Ketchum', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reiciendis quos sint id optio delectus eum cumque, vel, sunt tempore fuga, sed perferendis saepe vitae voluptas magni, nobis sapiente sit?' },
    { id: 12, name: 'Scruff McGruff', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex eaque officia ipsa est, facere, necessitatibus consequuntur. Non deserunt quas cupiditate distinctio earum id in, atque ut at iure repudiandae.' },
    { id: 13, name: 'G.I. Joe', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores impedit ab facilis quo fuga ducimus doloremque, possimus soluta consequatur, amet corporis quis deleniti. Optio dolore, perspiciatis quibusdam amet incidunt.' },
    { id: 14, name: 'Miss Frizzle', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum magni dolore suscipit sit tenetur, voluptate ratione rerum error iusto quod debitis rem numquam amet asperiores sapiente nam dolor at.' },
    { id: 15, name: 'Ash Ketchum', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reiciendis quos sint id optio delectus eum cumque, vel, sunt tempore fuga, sed perferendis saepe vitae voluptas magni, nobis sapiente sit?' },
    { id: 16, name: 'Scruff McGruff', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex eaque officia ipsa est, facere, necessitatibus consequuntur. Non deserunt quas cupiditate distinctio earum id in, atque ut at iure repudiandae.' },
    { id: 17, name: 'G.I. Joe', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolores impedit ab facilis quo fuga ducimus doloremque, possimus soluta consequatur, amet corporis quis deleniti. Optio dolore, perspiciatis quibusdam amet incidunt.' },
    { id: 18, name: 'Miss Frizzle', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum magni dolore suscipit sit tenetur, voluptate ratione rerum error iusto quod debitis rem numquam amet asperiores sapiente nam dolor at.' },
    { id: 19, name: 'Ash Ketchum', meaning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reiciendis quos sint id optio delectus eum cumque, vel, sunt tempore fuga, sed perferendis saepe vitae voluptas magni, nobis sapiente sit?' }
  ];

  return {
    all: function() {
      return diccionarios;
    },
    get: function(diccionarioId) {
      // Simple index lookup
      return diccionarios[diccionarioId];
    }
  }
});
