const getEvents = (req, res) => {
    const events = [
      {
        id: 1,
        name: 'Taylor Swift Concert',
        date: '2025-06-15',
        location: 'Wembley Stadium',
        price: 129,
      },
      {
        id: 2,
        name: 'NBA: Lakers vs Warriors',
        date: '2025-03-15',
        location: 'Crypto.com Arena',
        price: 89,
      },
    ];
  
    res.json(events);
  };
  
  module.exports = { getEvents };
  