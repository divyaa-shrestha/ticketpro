const bookTicket = (req, res) => {
    const { eventId, userName, quantity } = req.body;
  
    if (!eventId || !userName || !quantity) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }
  
    // Simulate booking logic
    const bookingConfirmation = {
      bookingId: Math.floor(Math.random() * 1000000),
      eventId,
      userName,
      quantity,
      status: 'confirmed',
    };
  
    res.status(201).json(bookingConfirmation);
  };
  
  module.exports = { bookTicket };