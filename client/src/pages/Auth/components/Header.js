import { Link } from 'react-router-dom';

export default function Header({ heading, imgSrc }) {
  return (
    <div className="mb-5">
      <div className="flex justify-center">
        <img alt="undraw" className="h-20 w-30" src={imgSrc} />
      </div>
      <h3 className="mt-6 text-center text-3xl font-medium text-gray-900">
        {heading}
      </h3>
      {/* <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p> */}
    </div>
  );
}
