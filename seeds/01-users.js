/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'John Doe',
      date_of_birth: '1990-01-01',
      likes: 'Hiking, Cooking, Reading',
      dislikes: 'Loud noises, Spiders',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date_of_birth: '1985-03-15',
      likes: 'Traveling, Painting, Cycling',
      dislikes: 'Rainy days, Cold weather',
    },
    {
      id: 3,
      name: 'Tom Wilson',
      date_of_birth: '1995-07-20',
      likes: 'Playing guitar, Photography',
      dislikes: 'Long queues, Crowded places',
    },
    {
      id: 4,
      name: 'Sara Johnson',
      date_of_birth: '1988-11-10',
      likes: 'Swimming, Yoga, Meditation',
      dislikes: 'Spicy food, Insects',
    },
    {
      id: 5,
      name: 'Mike Brown',
      date_of_birth: '1992-04-25',
      likes: 'Playing basketball, Watching movies',
      dislikes: 'Getting up early, Public speaking',
    },
  ])
}
