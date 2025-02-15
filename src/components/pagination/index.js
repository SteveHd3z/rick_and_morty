import { colors, Pagination,Stack } from "@mui/material";

const PaginationOutlined = () => {

    const stackStyles = {        

        '& .MuiPagination-root': {
            display: "flex",
            justifyContent: "center",
            height: "35px",
            padding: '30px',
        },
        '& .MuiButtonBase-root': {
            backgroundColor: '#ffffff',
            color: '#000000'
        },
        '& .Mui-selected': {
          backgroundColor: '#88e23b'
        },
        '& .MuiPaginationItem-ellipsis': {
          backgroundColor: 'transparent',
          color: 'white',
          fontSize: '35px',
          fontWeight: '700'
        }

      };

  return (
    <Stack spacing={2} sx={stackStyles}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
};

export default PaginationOutlined;




