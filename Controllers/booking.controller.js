const room = {
  Number_of_seats_available: 4,
  Amenities_in_room:
    "A/C or NON AC,Attached bathroom with heater,TV with cable,Dining options",
  Price_per_hour: 500,
};
const bookings = [
  {
    Customer_name: "Sasi",
    Booked_date: "01/09/2023",
    Entry_time: "10A.M",
    Exit_time: "12P.M",
    Room_name: "XYZ hall",
    Room_id: 1,
    Booking_status: "Booked",
  },
  {
    Customer_name: "Krishna",
    Booked_date: "01/09/2023",
    Entry_time: "04P.M",
    Exit_time: "08P.M",
    Room_name: "XYZ hall",
    Room_id: 2,
    Booking_status: "Booked",
  },
  {
    Customer_name: "Kathir",
    Booked_date: "02/09/2023",
    Entry_time: "04P.M",
    Exit_time: "08P.M",
    Room_name: "XYZ hall",
    Room_id: 3,
    Booking_status: "Booked",
  },
  {
    Customer_name: "Swetha",
    Booked_date: "03/09/2023",
    Entry_time: "02P.M",
    Exit_time: "08P.M",
    Room_name: "XYZ hall",
    Room_id: 4,
    Booking_status: "Booked",
  },
  {
    Customer_name: "Sasi",
    Booked_date: "03/09/2023",
    Entry_time: "10A.M",
    Exit_time: "11A.M",
    Room_name: "XYZ hall",
    Room_id: 5,
    Booking_status: "Booked",
  },
];

// viewing room and its details

export const getRoomDetails = async (req, res) => {
  try {
    await res.status(200).json({ RoomDetails: room });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in getting Room-Details" });
  }
};

// Creating new room

export const createRoom = async (req, res) => {
  try {
    const { Number_of_seats_available, Amenities_in_room, Price_per_hour } =
      await req.body;
    res.status(200).json({
      Message: "Room created",
      Number_of_seats_available,
      Amenities_in_room,
      Price_per_hour,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Error in Creating-Room-Details" });
  }
};

// viewing the booked room

export const getBookedRoomDetails = async (req, res) => {
  try {
    await res.status(200).json({ BookingDetails: bookings });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in getting Booked-Room-Details" });
  }
};

// Create new booking

export const createNewBooking = async (req, res) => {
  try {
    const newBooking = await req.body;
    const { Booked_date, Entry_time, Exit_time } = newBooking;
    const count = 0;
    bookings.filter((hall) => {
      if (
        hall.Booked_date === Booked_date &&
        hall.Entry_time === Entry_time &&
        hall.Exit_time === Exit_time
      )
        count++;
    });

    if (count == 0) {
      const newBooking = {
        Customer_name: req.body.Customer_name,
        Booked_date: req.body.Booked_date,
        Entry_time: req.body.Entry_time,
        Exit_time: req.body.Exit_time,
        Room_name: "XYZ hall",
        Room_id: bookings.length + 1,
        Booking_status: "Booked",
      };
      bookings.push(newBooking);
      res
        .status(200)
        .json({ Message: "New Booking details added", bookings: newBooking });
    }
    console.log(newBooking);
    console.log(count);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Sorry!!! The room is already booked" });
  }
};

// viewing all the booked rooms

export const getAllBookingData = (req, res) => {
  try {
    const allBooking = bookings.find();
    res.status(200).json(allBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in get booking" });
  }
};

// List no:of times the customer booked the room

export const getRepeatCustomerBookedRoomDetails = async (req, res) => {
  try {
    const Repeated_Customer_name = await req.params.Customer_name;
    const { Customer_name } = bookings.find(
      (name) => name.Customer_name == Repeated_Customer_name
    );

    let count = 0;
    const Repeated_Customer_Details = [];

    bookings.map((hall) => {
      if (hall.Customer_name == Customer_name) {
        Repeated_Customer_Details.push(hall);
        count++;
      }
    });
    if (count == 1) {
      return res
        .status(200)
        .json({ Customer_name, Message: "Customer Booked Only Once" });
    } else {
      return res.status(200).json({
        Customer_Count: count,
        Repeated_Customer_Details: Repeated_Customer_Details,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      Message: "Customer_name not found",
    });
  }
};
