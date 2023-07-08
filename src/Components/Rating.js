import { Rating } from 'flowbite-react';

export default function RatingCount({Skor}) {
  return (
    <Rating>
      <Rating.Star />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {Skor}
      </p>
      
    </Rating>
  )
}