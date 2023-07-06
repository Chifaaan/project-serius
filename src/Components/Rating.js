import { Rating } from "@material-tailwind/react";

function eRating() {
  return (
    <div className="flex flex-col gap-4">
      <Rating value={5} readonly ratedColor="amber"/>
    </div>
  )
}
export default eRating;