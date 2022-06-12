import { Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { BsViewList } from 'react-icons/bs';
import { BiAtom } from 'react-icons/bi';
import { VscLaw } from 'react-icons/vsc';
import { FaSlackHash } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { TbMessageLanguage } from 'react-icons/tb';

import { kPrimaryColorMain } from '../../services/constants/colors';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    // marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
      cursor: 'pointer',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '&:hover': {
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: kPrimaryColorMain,
        color: 'white',
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
      },
    },
  },
  icon: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  text: {
    marginRight: theme.spacing(5),
    fontWeight: 500,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function LeftBar() {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState('All');

  const leftBarItems = [
    {
      name: 'All',
      to: '/questions',
      iconComponent: <BsViewList className={classes.icon} />,
    },
    ,
    {
      name: 'Tags',
      to: '/tags',
      iconComponent: <FaSlackHash className={classes.icon} />,
    },
    {
      name: 'Natural Science',
      to: 'questions/nat',
      iconComponent: <BiAtom className={classes.icon} />,
    },
    {
      name: 'Social Science',
      to: 'questions/soc',
      iconComponent: <VscLaw className={classes.icon} />,
    },
    {
      name: 'Others',
      to: 'questions/others',
      iconComponent: <TbMessageLanguage className={classes.icon} />,
    },
    {
      name: 'Users',
      to: '/users',
      iconComponent: <RiUserSearchLine className={classes.icon} />,
    },
  ];

  return (
    <Container className={classes.container}>
      {/* <div
        className={classes.items}
        style={{
          backgroundColor: '#fff',
          color: '#115293',
          borderRadius: 8,
          padding: 3,
        }}
      >
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div> */}

      {leftBarItems.map((item, index) => (
        <div
          style={{
            borderRadius: '5px',
            color: item.name === currentTab ? `#fff` : '',
            backgroundColor:
              item.name === currentTab ? `${kPrimaryColorMain}` : '',
          }}
        >
          <Link to={item.to}>
            <div
              className={classes.items}
              style={{ padding: '10px 0px' }}
              key={index}
            >
              <div>{item.iconComponent}</div>
              <Typography className={classes.text}>{item.name}</Typography>
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
}

export default LeftBar;

// import { AiOutlineClose } from 'react-icons/ai';

// const LeftBar = () => {
//   const parts = [
//     { name: 'Home', to: '/', others: [] },
//     {
//       name: 'Resources',
//       to: '/',
//       others: [
//         { name: '1', to: '/' },
//         { name: '2', to: '/' },
//         { name: '3', to: '/' },
//       ],
//     },
//     { name: 'Help', to: '/', others: [] },
//   ];

//   return (
//     <div
//       className="fixed w-24 bg-slate-400"
//       style={{ height: '100vh', top: 0 }}
//     >
//       <div className="absolute inset-y-0 left-0 w-16">
//         <aside className="w-56" aria-label="Sidebar">
//           <div
//             className="overflow-y-auto py-4 px-3 bg-blue-500 rounded dark:bg-gray-800"
//             style={{ height: '100vh' }}
//           >
//             {/* <div className="flex justify-end text-white text-xl">
//               <AiOutlineClose style={{}} />
//             </div> */}

//             <ul className="space-y-2">
//               {parts.map((part) => (
//                 <li key={part.name}>
//                   <button
//                     type="button"
//                     className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-blue-500  dark:text-white dark:hover:bg-gray-700"
//                   >
//                     <span
//                       className="flex-1 ml-3 text-left whitespace-nowrap"
//                       sidebar-toggle-item=""
//                     >
//                       {part.name}
//                     </span>
//                     {/* <svg
//                       sidebar-toggle-item=""
//                       className="w-6 h-6"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg> */}
//                   </button>
//                   <ul id="dropdown-example" className="py-2 space-y-2">
//                     {part.others.map((other) => (
//                       <li key={other.name}>
//                         <a
//                           href="#"
//                           className="flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-blue-500 dark:text-white dark:hover:bg-gray-700"
//                         >
//                           {other.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default LeftBar;
