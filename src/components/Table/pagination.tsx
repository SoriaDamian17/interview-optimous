// import { IconButton } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import { ChangeEvent } from 'react';
// import { PaginationController } from './styles';

// interface ITablePaginationActions {
//     count: number,
//     onChangePage: (event:ChangeEvent<HTMLButtonElement>, numero: number) => void,
//     page: number,
//     rowsPerPage: number,
// }

// const TablePaginationActions:React.FC<ITablePaginationActions> = ({
//     count,
//     onChangePage,
//     page,
//     rowsPerPage,
// }):JSX.Element => {
//     const theme = useTheme();

//     const handleFirstPageButtonClick = (event:ChangeEvent<HTMLButtonElement>):void => {
//       onChangePage(event, 0);
//     };

//     const handleBackButtonClick = (event:ChangeEvent<HTMLButtonElement>):void => {
//       onChangePage(event, page - 1);
//     };

//     const handleNextButtonClick = (event:ChangeEvent<HTMLButtonElement>):void => {
//       onChangePage(event, page + 1);
//     };

//     const handleLastPageButtonClick = (event:ChangeEvent<HTMLButtonElement>) => {
//       onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//     };

//     return (
//       <PaginationController key="pagination-controller">
//         <IconButton
//           onClick={handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="first page"
//         >
//           {theme.direction === 'rtl'
//           ? <LastPageIcon />
//           : <FirstPageIcon />}
//         </IconButton>
//         <IconButton
//           onClick={handleBackButtonClick}
//           disabled={page === 0}
//           aria-label="previous page"
//         >
//           {theme.direction === 'rtl'
//             ? <KeyboardArrowRight />
//             : <KeyboardArrowLeft />}
//         </IconButton>
//         <IconButton
//           onClick={handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="next page"
//         >
//           {theme.direction === 'rtl'
//           ? <KeyboardArrowLeft />
//           : <KeyboardArrowRight />}
//         </IconButton>
//         <IconButton
//           onClick={handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="last page"
//         >
//           {theme.direction === 'rtl'
//           ? <FirstPageIcon />
//           : <LastPageIcon />}
//         </IconButton>
//       </PaginationController>
//     );
//   };

// export default TablePaginationActions;

const pagination = () => <div />;
export default pagination;
