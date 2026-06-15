import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StoryCard = ({story}) => {
    return (
        <div 
              key={story.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden "
            >
              {/* Header: Profile Image & Name/Designation */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-100">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px] leading-tight hover:underline cursor-pointer">
                      {story.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {story.designation} at <span className="text-blue-600 hover:underline cursor-pointer font-semibold">{story.company}</span>
                    </p>
                  </div>
                </div>
                
                {/* Years of Experience Badge */}
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                  {story.experience} Yrs Exp
                </span>
              </div>

              {/* Story Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-800 text-[14px] leading-relaxed whitespace-pre-line">
                  {story.story}
                </p>
              </div>

              {/* Skills Tags (Interactions/Interests Area) */}
              <div className="px-4 pb-4 flex flex-wrap gap-1.5 border-b border-gray-100">
                {story.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              {/* Facebook Style Action Bar */}
              <div className="flex items-center justify-between px-2 py-1 text-gray-600 font-medium text-[14px]">
                
                <Link href={`/stories/${story.id}`} className=' bg-amber-500 text-amber-700 p-4 rounded-2xl cursor-pointer'>
                Explore More
                  
                    
                </Link>
              </div>

            </div>
    );
};

export default StoryCard;