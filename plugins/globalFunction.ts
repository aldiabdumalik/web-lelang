interface FormatIDR {
  angka: string | number;
  prefix: string
}

export const formatIDR = ({angka, prefix}: FormatIDR) => {
  console.log(angka, prefix);
  return angka;
  // let number = angka.replace(/[^,\d]/g, '').toString();
	// let split = number.split(',');
	// let sisa = split[0].length % 3;
	// let rupiah = split[0].substr(0, sisa);
	// let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	// if (ribuan) {
	// 	let separator = sisa ? '.' : '';
	// 	rupiah += separator + ribuan.join('.');
	// }

	// rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	// return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
}