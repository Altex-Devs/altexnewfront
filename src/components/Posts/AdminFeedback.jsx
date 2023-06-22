import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

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
    <div className='bg-[#fff] h-full p-5 text-white bg-[#101C47] scroll-y'>
        <div className='flex justify-between'>

    <Link to={'/admin'} className='text-[#000] h-full mt-10 p-2 border w-max rounded bg-[#6c757d]'>Back Admin</Link>
    <h1 className='font-Montserrat pb-10 text-[50px] text-[#000] '>Feedback Data</h1>
        </div>
    <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-[#000] text-[#fff]">
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
            <tr class="bg-white border-b bg-[#6c757d] text-[#fff]">
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