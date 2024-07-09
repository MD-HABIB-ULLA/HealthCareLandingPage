
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex items-center flex-col min-h-screen'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      
        <Link href="/" className='bg-gray-600/50  px-2 py-1 rounded-lg '>
        <p>Go back to the homepage</p>
        </Link>

    </div>
  );
};

export default NotFound;
