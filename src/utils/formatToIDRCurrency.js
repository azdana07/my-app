export default function formatToIDRCurrency(value) {
  if (typeof value !== 'number') {
    return 'Invalid value'; // Tambahkan validasi untuk input yang tidak valid
  }

  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0 // Format tanpa angka desimal
  }).format(value);

  return formattedValue.replace('Rp', 'Rp. '); // Ganti "Rp" dengan "Rp." untuk format sesuai
}
