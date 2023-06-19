import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const AdminFeedback = ()=>{
    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const feedbacksCollection = collection(db, 'feedbacks');
            const feedbackQuery = query(feedbacksCollection);
          const unsubscribe = onSnapshot(feedbackQuery, (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => {
              data.push({ id: doc.id, ...doc.data() });
            });
            setFeedbackData(data);
            console.log(data)

          });
          
          return () => unsubscribe();
        };
        fetchData();
      }, []);
    return(
        <>
    <div className='bg-green h-full p-5 text-white bg-[#101C47] scroll-y'>
    <h1 className='font-Montserrat pb-10 text-[50px] text-[#13A9FD] '>Feedback Data</h1>
    <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3  overflow-y-auto h-32">
                    Message
                </th>
                <th scope="col" class="px-6 py-3">
                    Timestamp
                </th>
            </tr>
        </thead>
        <tbody>
            {feedbackData.map((feedback)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {feedback.name}
                </th>
                <td class="px-6 py-4">
                {feedback.phone}
                </td>
                <td class="px-6 py-4">
                {feedback.email}
                </td>
                <td class="px-6 py-4">
                {feedback.title}
                </td>
                <td class="px-6 py-4 relative">
                <div className=' flex items-center justify-start overflow-y-auto h-[200px]'>
                    {feedback.message}
                </div>
                </td>
                <td class="px-6 py-4">
                {feedback.timestamp}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

  </div>
        </>
    )
}



export default AdminFeedback