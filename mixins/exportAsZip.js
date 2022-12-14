import exportHcfa from '~/mixins/exportHcfa'

const JSZip = require('jszip')

export default {
    mixins: [exportHcfa],

    methods: {

        zipDownload(items,date) {

            const todate=`${new Date(date).getDate()}-${new Date(date).getMonth()+1}-${new Date(date).getFullYear()}`
            const zip = new JSZip();
            const zipFiles = zip.folder("hcfa-"+todate)
            items.forEach((_i,index) => {
                const xmlFile = this.createXmlData(_i);
                zipFiles.file(index+new Date().getTime() + '.xml', xmlFile)
            })
            console.log(zipFiles)
            zip.generateAsync({ type: "blob" }).then(function (blob) {

                const filename = 'hcfa-' + todate + '.zip'
                if (window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, filename);
                } else {
                    const a = document.createElement('a');
                    document.body.appendChild(a);
                    const url = window.URL.createObjectURL(blob);
                    a.href = url;
                    a.download = filename;
                    a.click();
                    setTimeout(() => {
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    }, 0)
                }
            })
            
        },


    }

}