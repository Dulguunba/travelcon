// import { useState, useEffect } from 'react';

// export const useLoading = (data: any[]) => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         if (data.every(item => item !== undefined)) {
//             setTimeout(() => {
//                 setIsLoading(false);
//             }, 2000)

//         }
//     }, data);

//     return isLoading;
// }