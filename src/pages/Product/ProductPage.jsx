import { useState, useEffect } from 'react';
import getAllProducts from '../../services/getAllProducts'; // pastikan ini benar
import CardList from "../../components/CardList/CardList";
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';

export default function ProductPage() {
  const [products, setProducts] = useState([]);  // Untuk menyimpan semua produk
  const [filteredProducts, setFilteredProducts] = useState([]); // Untuk menyimpan produk yang sudah difilter
  const [selectedCategory, setSelectedCategory] = useState('all'); // State untuk kategori yang dipilih
  const [searchTerm, setSearchTerm] = useState('');  // State untuk input pencarian

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);  // Menyimpan semua produk
    setFilteredProducts(allProducts);  // Menampilkan semua produk pada awalnya
  }, []);

  useEffect(() => {
    // Filter produk berdasarkan kategori yang dipilih
    let filtered = products;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (searchTerm) {
      // Filter produk berdasarkan pencarian nama produk
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);  // Menampilkan produk yang sudah difilter
  }, [selectedCategory, searchTerm, products]);  // Setiap kali kategori atau pencarian berubah, filter ulang produk

  const RadioButtonOpts = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Matic\'s Motor',
      value: 'Matic\'s Motor'
    },
    {
      label: 'EV\'s Motor',
      value: 'EV\'s Motor'
    },
  ];

  const handleSearchChange = (term) => {
    setSearchTerm(term);  // Memperbarui state searchTerm saat input berubah
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
        <h3 className='font-medium'>Filter</h3>
        <div className='flex gap-2 flex-wrap'>
          <RadioButton options={RadioButtonOpts} defaultValue={'all'} onChange={setSelectedCategory} />
        </div>
      </div>

      <section className='container px-24 py-4'>
        <main className='grid grid-cols-4 gap-4'>
          <CardList products={filteredProducts} />
        </main>
      </section>
    </>
  );
}
