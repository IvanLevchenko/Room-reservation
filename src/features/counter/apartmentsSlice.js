import { createSlice } from '@reduxjs/toolkit';

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState: {
    apartmentsData: [
      {
        id: 1, title: 'Monotel Maidan MonoCapsule', rating: 4.7, city: 'Kyiv', costPerDay: 16,
        address: 'Street of joy 21D', 
        images: [
          'https://a0.muscache.com/im/pictures/miso/Hosting-43645834/original/a1f5c049-aca3-4199-a587-74ea97ecb83d.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/a0393238-4a70-4e9d-907c-634f85acf403.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/miso/Hosting-43645834/original/055c312b-e3fe-4b7b-90d0-adb521006414.jpeg?im_w=720',
          'https://a0.muscache.com/im/pictures/miso/Hosting-43645834/original/7b88f620-a272-44ec-a730-1ae26ce8b893.jpeg?im_w=720'
        ],
        contacts: {
          mobilePhone: '+380192402291',
          email: 'john@gmail.com'
        },
        main: {
          rules: ['No smoking', 'No pets', 'No parties or events'],
          numOfPeople: 1, 
          numOfBedrooms: 1,  
        }
      },
      {
        id: 2, title: 'MaidanRooms-7', rating: 5, city: 'Kyiv', costPerDay: 40,
        address: 'Baker street 221B',
        images: [
          'https://a0.muscache.com/im/pictures/cb20e2a9-b7c7-43f2-9d0e-d9f0cc1734b8.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/55293361-dddf-431f-8aa0-873a123b490e.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/7f0d0af1-189e-45b8-a732-b64482cbc8d6.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/34357624-9393-4283-8c9a-bf52692e9f59.jpg?im_w=720',
        ],
        contacts: {
          mobilePhone: '+380142444491',
          email: 'john@gmail.com'
        },
        main: {
          rules: ['No smoking', 'No parties or events'],
          numOfPeople: 2, 
          numOfBedrooms: 1,  
        }
      },
      {
        id: 3, title: 'Luxury apartment in the city center', rating: 4.9, city: 'Lviv', costPerDay: 121,
        address: 'Gerald\'s square 3',
        images: [
          'https://a0.muscache.com/im/pictures/8d15ee6e-c896-46f9-9b98-874f2ea10968.jpg?im_w=1200',
          'https://a0.muscache.com/im/pictures/8d649949-7fae-44eb-8a20-2f7a3bb47374.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/dbf66ec6-dd14-488e-b2da-501b97ad35d5.jpg?im_w=720',
          'https://a0.muscache.com/im/pictures/ff088472-fb24-49bb-94f9-a9469e616229.jpg?im_w=720'
        ],
        contacts: {
          mobilePhone: '+380111135691',
          email: 'john@gmail.com'
        },
        main: {
          rules: ['No smoking', 'No pets', 'No parties or events'],
          numOfPeople: 4, 
          numOfBedrooms: 2,  
        }
      }
    ],
  },
  reducers: {

  }
});

export const {  } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;

