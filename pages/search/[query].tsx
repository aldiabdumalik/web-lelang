import { useRouter } from 'next/router'
import PageLayout from "@/layouts/PageLayout";
import Pagination from "@/components/Pagination";
import Filter from "@/components/SearchResult/Filter";
import FilterOtomotif from "@/components/SearchResult/FilterOtomotif";
import Item from "@/components/SearchResult/Item";
import ItemOtomotif from "@/components/SearchResult/ItemOtomotif";


export default function SearchQuery() {
  const router = useRouter()
  // console.log(router.query.query)
  return (
    <PageLayout>
      <div className="py-6">
        <div className="mx-3 md:mx-6">
          {router.query.query == 'otomotif' && (<FilterOtomotif />)}
          {router.query.query !== 'otomotif' && (<Filter />)}
          {/* <Filter /> */}
        </div>
        <div className="border my-5"></div>
        <div className="mx-3 md:mx-6">
          {router.query.query !== 'otomotif' && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[...Array(10)].fill(undefined).map((_, i) => <Item key={i} title={'AURORA Bukit Rancamaya Residence'} />)}  
            </div>
          )}
          {router.query.query == 'otomotif' && (
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[...Array(12)].fill(undefined).map((_, i) => <ItemOtomotif key={i} title={'Honda Brio 1.2 Satya E'} />)}  
            </div>
          )}
          {/* <div className="grid grid-cols-1 md:grid-cols-2">
            {[...Array(10)].fill(undefined).map((_, i) => <Item key={i} title={'AURORA Bukit Rancamaya Residence'} />)}
          </div> */}
        </div>
        <div className="mx-3 mt-1 md:mx-6 md:mt-11">
          <Pagination pageLength={3} />
        </div>
      </div>
    </PageLayout>
  )
}