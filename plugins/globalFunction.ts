export const formatIDR = (angka: string | number, prefix: string) => {
  let number = angka.toString().replace(/[^,\d]/g, '');
	let split = number.split(',');
	let rest = split[0].length % 3;
	let rupiah = split[0].substr(0, rest);
	let thousand = split[0].substr(rest).match(/\d{3}/gi);

	if (thousand) {
		let separator = rest ? '.' : '';
		rupiah += separator + thousand.join('.');
	}

	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
}