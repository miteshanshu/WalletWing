// // Order.js

// import { Badge } from "@mui/material";

// function Order() {
//   const orders = [
//     {
//       orderNumber: 'ORDER001',
//       date: 'April 20, 2024',
//       status: 'Delivered',
//       items: ['Item 1', 'Item 2', 'Item 3'],
//     },
//     {
//       orderNumber: 'ORDER002',
//       date: 'April 18, 2024',
//       status: 'Processing',
//       items: ['Item 4', 'Item 5'],
//     },
//     {
//       orderNumber: 'ORDER003',
//       date: 'April 15, 2024',
//       status: 'Pending',
//       items: ['Item 6'],
//     },
//   ];

//   return (
//     <div className='container mx-auto py-8'>
//       <h1 className='text-3xl font-bold mb-4'>Order Tracking</h1>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//         {orders.map((order, index) => (
//           <div key={index} className='border rounded-lg p-4 bg-white shadow-md'>
//             <h2 className='text-lg font-semibold'>{order.orderNumber}</h2>
//             <p className='text-gray-600'>{order.date}</p>
//             <div className='mt-4'>
//               <h3 className='text-sm font-medium'>Status:</h3>
//               <Badge
//                 className={`${
//                   order.status === 'Delivered'
//                     ? 'bg-green-500'
//                     : order.status === 'Processing'
//                     ? 'bg-blue-500'
//                     : 'bg-yellow-500'
//                 } text-white px-2 py-1 rounded-md mt-1`}
//               >
//                 {order.status}
//               </Badge>
//             </div>
//             <div className='mt-4'>
//               <h3 className='text-sm font-medium'>Items:</h3>
//               <ul className='list-disc list-inside'>
//                 {order.items.map((item, itemIndex) => (
//                   <li key={itemIndex}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Order;

const Order = () => {
  return <div></div>;
};

export default Order;
