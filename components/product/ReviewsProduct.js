/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import LoadMore from '../LoadMore';
import RatingDetails from '../RatingDetails';
import CustomReviews from './CustomReviews';
import ReviewPost from './ReviewPost';
// import { useQuery } from 'react-query';

function ReviewsProduct({ id, average_rating, rating_count ,review}) {
    const [listReviews, setListReviews] = useState([]);
    // const {
    //     isLoading,
    //     data = { data: [], headers: '' },
    //     error,
    //     refetch,
    // } = useQuery(['reviews', id], () => fetchApiReviewProduct(id), {
    //     enabled: Boolean(id),
    // });

    // const totalItems = data.headers['x-wp-total'] || 0;
    // useEffect(() => {
    //     totalItems > 5
    //         ? fetchApiReviewProduct(id, totalItems).then((res) =>
    //               setListReviews(res.data)
    //           )
    //         : setListReviews(data.data);
    // }, [id, totalItems]);

    return (
        <div className="tab-pane fade" id="review">
            <div className="row g-4">
                <CustomReviews
                    listReviews={listReviews}
                    average_rating={average_rating}
                    rating_count={rating_count}
                />

                <ReviewPost
                    id={id}
                    listReviews={listReviews}
                    setListReviews={setListReviews}
                />

                <div className="col-12 mt-4">
                    <div className="customer-review-box">
                        <h4>Customer Reviews</h4>
                        {/* {!data.data[0] && ( */}
                        {!review[0] && (
                            <p className="alert alert-warning mt-3 w-100 text-center">
                                There are no review in this product
                            </p>
                        )}
                        {/* <LoadMore 
                        // totalItems={totalItems}
                        totalItems={[]}
                         id={id}>
                        </LoadMore> */}
                            {review.map(
                                (
                                    {
                                        // date_created,
                                        // reviewer_avatar_urls,
                                        review,
                                        rating,
                                        reviewer,
                                    },
                                    index
                                ) => (
                                    <div
                                        key={index}
                                        className="customer-section "
                                    >
                                        <div className="customer-profile">
                                            <img
                                                // src={reviewer_avatar_urls['96']}
                                                className="img-fluid lazyload"
                                                alt=""
                                            />
                                        </div>
                                        <div className="customer-details">
                                            <h5>{reviewer}</h5>
                                            <RatingDetails
                                                average_rating={rating}
                                            />
                                            <p
                                                className="font-light"
                                                dangerouslySetInnerHTML={{
                                                    __html: review,
                                                }}
                                            ></p>
                                            <p className="date-custo font-light">
                                                -{' '}
                                                {/* {moment(date_created).format(
                                                    'LL'
                                                )} */}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewsProduct;
