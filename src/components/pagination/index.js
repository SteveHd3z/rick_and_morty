import { Pagination,Stack } from "@mui/material";

const PaginationOutlined = () => {

    const stackStyles = {        

        '& .MuiPagination-root': {
            display: "flex",
            justifyContent: "center",
            height: "35px",
            padding: '30px',
            backgroundColor: 'aqua'
        },

      };

  return (
    <Stack spacing={2} sx={stackStyles}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
};

export default PaginationOutlined;




