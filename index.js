class Table {
    constructor(init) {
      this.init = init;
    }
  
    headerTabel(dataHeader) {
      let tagbukaHeader = "<thead><tr>";
      let tagtutuphader = "</tr></thead>";
      dataHeader.forEach((data) => {
        tagbukaHeader += `<th>${data}</th>`;
      });
        return (tagbukaHeader + tagtutuphader);
    }
  
    bodyTabel(dataBody) {
      let tagbukaBody = "<tbody class='table-group-divider'>";
      let tagtutupBody = "</tbody>";
      dataBody.forEach((tes) => {
        tagbukaBody += `
          <tr>
            <td>${tes[0]}</td>
            <td>${tes[1]}</td>
            <td>${tes[2]}</td>
          </tr>
        `;
      });
      return (tagbukaBody + tagtutupBody);
    }
    gabung(element) {
      let akhirtable =
        "<table class='table table-bordered table-hover'>" +
        this.headerTabel(this.init.columns) +
        this.bodyTabel(this.init.data) +
        "</table>";
      element.innerHTML = akhirtable;
    }
  }
  
  const tabelData = new Table({
    columns: ["No","Nama Produk", "Harga"],
    data: [
      ["1","Bantal", "Rp. 1.500.000"],
      ["2","Busa", "Rp. 2.000.000"],
      ["3","Lemari", "Rp. 4.000.000"]
    ]
  });
  const jalankan = document.getElementById("hasil");
  tabelData.gabung(jalankan);
  