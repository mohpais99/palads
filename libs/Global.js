
var
    _mathPow = Math.pow,
    arrPush = function (arr, newItem) {
        arr.push(newItem);
    },
    convertToSlug = function (text) {
        return text
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    },
    convertDate = function (date) {
        var year = date.getFullYear().toString(), 
            month = date.getMonth() + 1, 
            day = date.getDate().toString(), 
            hours = date.getHours().toString()
        if (month <= 9) {
            month = month.toString()
            month = '0' + month
        }
        if (parseInt(day) <= 9) {
            day = '0' + day
        }
        if (parseInt(hours) <= 9) {
            hours = '0' + hours
        }
        return year + '-' + month + '-' + day + ' ' + hours + ':' + '00:00'
    },
    currentDate = function() {
        var bulan = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            now = new Date(),
            year = now.getFullYear().toString(), 
            month = now.getMonth(), 
            day = now.getDate().toString()

        return day + "th" + " " + bulan[month] + ", " + year
    },
    formatRibuan = function (bilangan){
        var	number_string = bilangan.toString(),
            sisa 	= number_string.length % 3,
            rupiah 	= number_string.substr(0, sisa),
            ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
                
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return rupiah
    }

export {
    _mathPow,
    convertToSlug,
    arrPush,
    convertDate,
    currentDate,
    formatRibuan
}