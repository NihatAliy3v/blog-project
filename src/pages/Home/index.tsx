import { BlogList } from "../../components/home/BlogList";
import { usePostDataGetAllQuery } from "../../services/api/blogPosts/postApi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Home = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page")


  const [page, setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);
  
  const { data } = usePostDataGetAllQuery({ page: pageParam, size: 5 });


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0);
    setSearchParams({page:value})
    // setPage(value);
  };
  useEffect(()=>{
    if(!pageParam){
      setSearchParams({page:1})
    }
  },[])

  console.log(pageParam)
  useEffect(()=>{
    setPageCount(data?.pagination?.TotalPages)
  },[data?.pagination])
  useEffect(()=>{
    setPage(pageParam)
  },[pageParam])
  return (
    <main className="py-12">
      <section>
        <div className="container flex justify-end mb-6">
          <Link to="/create-post">
            <Fab size="small" sx={{ boxShadow: "none" }} color="primary">
              <AddOutlinedIcon className="text-white" />
            </Fab>
          </Link>
        </div>
      </section>

      <BlogList blogData={data?.data} />
      <div className="container flex justify-center mt-4 ">
        <Pagination
          count={pageCount}
          variant="outlined"
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={handleChange}
          page={+page}
        />
      </div>
    </main>
  );
};

export default Home;
