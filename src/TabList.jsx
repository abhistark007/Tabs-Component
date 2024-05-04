import React, { useState } from 'react'

export default function TabList({tabs}) {
    const [currentTabIndex,setCurrentTabIndex]=useState(0);

  return (
    <div className='flex flex-col'>
        {/* tabs heading */}
        <div className='flex gap-5'>
            {
                tabs.map((item,index)=><div 
                onClick={()=>{setCurrentTabIndex(index)}} 
                className={currentTabIndex===index?`text-3xl bg-purple-600 text-white p-2 rounded-md cursor-pointer`:`text-3xl bg-gray-400 p-2 rounded-md cursor-pointer`} 
                key={index}>
                    {item.label}
                </div>)
            }
        </div>



        {/* tabs content */}
        <div>
            {
                tabs[currentTabIndex] && tabs[currentTabIndex].content
            }
        </div>
    </div>
  )
}
