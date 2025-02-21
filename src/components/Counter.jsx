import { useState } from "preact/hooks";

export  function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col text-white gap-2 mb-6'>
            <span class='text-xl'>Count: {count}</span>
            <button className='bg-gray-700 text-lg rounded opacity-70 cursor-pointer' onClick={() => {setCount(counter => counter + 1)}}>Increment</button>
            <button className='bg-gray-700 text-lg rounded opacity-70 cursor-pointer' onClick={() => {setCount(counter => counter - 1)}}>decrement</button>
        </div>
    )
}