import Title from '@/components/Title';
import React from 'react';

const TutorialPage = async ({params}) => {
    
    const {slug} = await params;
    const [technology, topic, page_no, subject] = slug || [];


    return (
        <div>

           <Title>{technology} tutorial</Title>
           <h2>{topic}</h2><hr />
           <h3>Page No: {page_no}</h3>
           <p>
            {subject}
           </p>
        </div>
    );
};

export default TutorialPage;