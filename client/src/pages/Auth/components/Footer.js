import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" to="/">
        WeStudy Study Collaboration System.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer({ paragraph, linkName, linkUrl = '#' }) {
  return (
    <div className="mt-14">
      {/* <div className="flex justify-center">
        <img alt="undraw" className="h-20 w-30" src={welcomeSVG} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2> */}
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="font-medium text-blue-600 hover:underline"
        >
          {linkName}
        </Link>
      </p>
      <Copyright sx={{ mt: 1, mb: 0 }} />
    </div>
  );
}
