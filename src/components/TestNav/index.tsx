import Link from 'next/link';
import React from 'react';


type Props = {};

const TestNav = (props: Props) => {
  return (
    <nav className="flex justify-center items-center z-10">
        <Link className="text-white mx-2" href="/A">Test A</Link>
        <Link className="text-white mx-2" href="/B">Test B</Link>
        <Link className="text-white mx-2" href="/C">Test C</Link>
        <Link className="text-white mx-2" href="/D">Test D</Link>
        <Link className="text-white mx-2" href="/E">Test E</Link>
    </nav>
  );
};

export default TestNav;
