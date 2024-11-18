import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearchChange }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearchChange(value);  // Mengirimkan perubahan nilai pencarian ke ProductPage
  };

  return (
    <nav className='grid grid-cols-3 justify-between px-24 py-4 bg-[#8091FF] items-center'>
      <ul>
        <li className='flex items-center justify-center'>
          <Link to='/' className='text-[#F2F4FF] hover:text-[#565f93] active:text-[#1d2342]'>Home</Link>
        </li>
      </ul>
      <ul className='flex justify-center items-center'>
        <li className='w-full'>
          <input
            type="text"
            className='text-black active:text-black focus:text-black px-4 py-2 w-full'
            value={searchInput}
            onChange={handleSearchChange}  // Mengupdate searchInput dan mengirimkan nilai baru ke ProductPage
            placeholder='Search product...'
          />
        </li>
      </ul>
      {/* Tampilkan login/logout sesuai status */}
    </nav>
  );
}
