// Objek untuk Pegawai
const pegawai = [
    { id: 1, nama: "John Doe", id_departemen: 1 },
    { id: 2, nama: "Jane Smith", id_departemen: 2 },
    { id: 3, nama: "Bob Johnson", id_departemen: 1 },
  ];
  
  // Objek untuk Departemen
  const departemen = [
    { id: 1, nama: "IT Department" },
    { id: 2, nama: "HR Department" },
  ];
  
  interface objProps {
    id: number;
    nama: string;
    departemen: {
      id: number;
      nama: string;
    };
  }
  
  const obj: objProps[] = [];
  
  pegawai.forEach((peg) => {
    const sortDep = departemen.find((dep) => dep.id === peg.id_departemen);
  
    if (sortDep) {
      let temp: objProps = {
        id: peg.id,
        nama: peg.nama,
        departemen: sortDep,
      };
      obj.push(temp);
    }
  });
  
  console.log(obj);
  