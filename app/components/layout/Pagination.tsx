import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={handlePageChange}
      showFirstButton
      showLastButton
    />
  );
};

export default Pagination;
