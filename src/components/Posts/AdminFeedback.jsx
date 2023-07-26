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
    <div className='bg-[#fff] h-full p-5 text-white scroll-y'>
        <div className='flex justify-between'>
    <div className=' flex items-center bg-[#006cff] text-white rounded-3xl h-full mt-10 p-2 border w-max'>
        <div className='m-1'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 20" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-345.000000, -6679.000000)" fill="#fff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231" id="arrow_left-[#335]">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
        </div>
        <Link to={'/admin'} className='mr-3'>Back</Link>
    </div>
    <h1 className='font-Montserrat pb-10 text-[50px] text-[#000]'>Feedback Data</h1>
        </div>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-[#006cff] text-[#fff]">
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
            <tr class="bg-white border-b text-[#000]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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