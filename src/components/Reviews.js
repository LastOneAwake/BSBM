import './reviews.scss';

const reviews = [
    {
        reviewer: 'Blanquita R.',
        review: 'Great service! Lamite provided information about the service, process, and results. Looking forward to final results.',
    },
    {
        reviewer: 'Deborah P.',
        review: 'My experience at bodysculpting by mito was excellent. I look forward to Future services. Loving my results!!!!',
    },
    {
        reviewer: 'Louise L.',
        review: 'Everything was great! Lamite really provides great service. She really follows each step carefully and make sure to explain the process.',
    },
    {
        reviewer: 'Ana L.',
        review: 'Very thorough about informing about the process and expectations. I’m saw results after my first visit, and look forward to seeing more in the near future!'
    },
]


export default function Reviews() {

    return (
        <div id='reviews' className='fullPageSection'>
            <div id='reviewsHeader'>What Our Clients Say About Us</div>
            <div id='reviewsBody'>
                {reviews.map((reviewObj, i) => {
                    return (
                        <div className='reviewDetails'
                            key={reviewObj.reviewer + i}>
                            <div className='reviewerReview'>"{reviewObj.review}"</div>
                            <div className='reviewerName'>-{reviewObj.reviewer}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}