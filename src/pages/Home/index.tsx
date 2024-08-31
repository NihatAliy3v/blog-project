import { BlogList } from "../../components/home/BlogList";
import { usePostDataGetAllQuery } from "../../services/api/blogPosts/postApi";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
const Home = () => {
  const {data} = usePostDataGetAllQuery("");
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
console.log()
  console.log(page)
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
          count={10}
          variant="outlined"
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          onChange={handleChange}
          
        />
      </div>
    </main>
  );
};

export default Home;
