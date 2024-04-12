import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Rating, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

export const ReviewForm = () => {
    const { user } = useUser();
    const [rating, setRating] = useState(0);

    const router = useRouter();
    const { tour } = router.query;

    const postReview = async (review: string) => {
        const res = await axios.post("https://backenddeploy-so3p.onrender.com/review/create", {
            travelId: tour,
            phoneNumber: rating,
            userId: user?.sid,
            email: user?.email,
            stars: rating,
            comment: review
        })
        if (res.status === 200) {
            console.log("successfully posted")
        }
    }

    const validation = () => {
        let errors: { [key: string]: string } = {};
        if (!user) {
            errors.review = 'Please log in to post a review';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            review: ''
        },
        validate: validation,
        onSubmit: values => {
            console.log(values);
            postReview(values.review);
        },
    });

    return (
        <div className='mt-20'>
            <div className='lg:w-[1100px] p-5 bg-grayColor rounded-3xl'>
                <div className='pl-2 text-2xl'>Write your comment</div>
                <form onSubmit={formik.handleSubmit} className='flex mt-5 lg:flex-row lg:gap-0 gap-5 flex-col'>
                    <div className='flex w-full flex-col gap-5'>
                        <textarea
                            id="review"
                            placeholder='Please type here...'
                            name="review"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.review}
                            className='text-start w-full border-2 shadow-sm rounded-3xl p-3 h-[150px] resize-none'
                        />
                        {formik.touched.review && formik.errors.review ? (
                            <div className='text-red-500'>{formik.errors.review}</div>
                        ) : null}
                    </div>
                    <div className='ml-10 flex flex-col lg:gap-0 gap-5 lg:justify-between'>
                        <div className='flex flex-col gap-2'>
                            <Typography component="legend">Please rate out package</Typography>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    if (newValue !== null) {
                                        setRating(newValue);
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <button type="submit" className='p-3 w-full rounded-xl bg-black text-white'>Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};
