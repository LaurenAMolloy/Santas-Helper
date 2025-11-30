import { useFetchGiftsQuery } from "../store"
import GiftListItem from '../components/GiftListItem'
import Skeleton from '../components/Skeleton'
import Totals from "./Totals";

export default function GiftList() {
  const { data, isLoading, error } = useFetchGiftsQuery();
  console.log(data);

  let content
  if(isLoading) {
    content = <Skeleton className="h-10" times={1} />
  } else if(data) {
    content = data.map((gift) => <GiftListItem key={gift.id} gift={gift} />
  )};

  return (
    <div className="w-full flex flex-col justify-center items-center py-3 pt-3">
      <h2>Gift List</h2>
      <div className="flex flex-col gap-2">
        {content}
      </div>
      <Totals />
    </div>
  )
}


