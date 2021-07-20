import './reviews.scss';

const reviews = [
    {
        reviewer: 'Cj',
        review: 'She was awesome. Took her time and was friendly, sociable, informative and made it a great day. I can\'t wait to go back.',
        details: 'Ultherapy Treatment for Face and Neck '
    },
    {
        reviewer: 'Alison',
        review: 'Mito is very caring and thorough. She does not rush you and answers all questions. She has a variety of machines to tackle different areas and issues. Her studio is clean and comfortable.',
        details: 'SculpSure Treatment on Lower Abdomen '
    },
    {
        reviewer: 'Lisa',
        review: 'Great session. Can’t wait to see the final results since it takes time for the collagen to produce, but my chin and neck area already look better.',
        details: 'Ultherapy Treatment for Neck'
    },
    {
        reviewer: 'Mary',
        review: 'Mito took her time and didn\'t rush. She was very thorough and explained things well. She also checked often on my comfort level. It was a very pleasant session.',
        details: 'Ultherapy Treatment for Neck'
    },
    {
        reviewer: 'Lisa',
        review: 'Great session. Can’t wait to see the final results since it takes time for the collagen to produce, but my chin and neck area already look better.',
        details: 'Ultherapy Treatment for Neck'
    },
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
    {
        reviewer: 'Guest',
        review: 'She is so sweet and good... She makes You feel comfortable I enjoyed my visits and I will be going back again for more treatments',
        details: 'BREAST/BUTT Lifts '
    },
    {
        reviewer: 'Guest',
        review: 'She is an amazing professional with the best experience. Highly recommend her services!',
        details: 'Non-Surgical Vacuum Breast Lift'
    },
]


export default function Reviews() {

    return (
        <div id='reviews' className='fullPageSection sectionFadeIn'>
            <div id='reviewsHeader' className='pageHeader'>What Our Clients Say About Us</div>
            <div id='reviewsBody'>
                {reviews.map((reviewObj, i) => {
                    return (
                        <div className='reviewDetails'
                            key={reviewObj.reviewer + i}>
                            <div className='reviewerReview'>"{reviewObj.review}"</div>
                            <div className='reviewerName'>- {reviewObj.reviewer}</div>
                            <div className='reviewServiceDetails'>{reviewObj.details}</div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}