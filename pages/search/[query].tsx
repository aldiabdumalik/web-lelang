import PageLayout from "@/layouts/PageLayout";
import Pagination from "@/components/Pagination";
import Filter from "@/components/SearchResult/Filter";
import Item from "@/components/SearchResult/Item";

export default function SearchQuery() {
  return (
    <PageLayout>
      <div className="py-6">
        <div className="mx-3 md:mx-6">
          <Filter />
        </div>
        <div className="border my-5"></div>
        <div className="mx-3 md:mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[...Array(10)].fill(undefined).map((_, i) => <Item key={i} title={'AURORA Bukit Rancamaya Residence'} />)}
          </div>
        </div>
        <div className="mx-3 mt-1 md:mx-6 md:mt-11">
          <Pagination pageLength={3} />
        </div>
      </div>
    </PageLayout>
  )
}