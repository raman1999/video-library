import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Muscle Building",
    img: "https://cdn.shopify.com/s/files/1/0133/8576/0826/files/bodybuilder_80077d46-4946-4c3b-ad28-6f8833d38459.jpg?v=1538589151",
  },
  {
    _id: uuid(),
    categoryName: "Fat Loss",
    img: "https://th.bing.com/th/id/R.e7b9c119c3d49baa25a467ddcd04cde0?rik=V317J9NCIXOcog&riu=http%3a%2f%2fhealingplus.com%2fwp-content%2fuploads%2f2019%2f06%2f1560284929_maxresdefault.jpg&ehk=SeYEJfcDE%2fn98f2CyoDbbjCxBKpTXg3Pzy4xMlpheLs%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    _id: uuid(),
    categoryName: "HIIT WORKOUT",
    img: "https://content.thriveglobal.com/wp-content/uploads/2018/03/Fit36_Studio_8966_28129.jpg",
  },
];
