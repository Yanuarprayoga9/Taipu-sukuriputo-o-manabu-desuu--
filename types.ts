interface User {
    nama: string;
    umur: number;
    nikah: boolean;
  }
  
  const users: User[] = [
    {
      nama: "yanuar",
      umur: 20,
      nikah: false,
    },
    {
      nama: "dimas",
      umur: 20,
      nikah: false,
    },
    {
      nama: "akbar",
      umur: 20,
      nikah: false,
    },
  ];
  
  function getUser(): void {
    users.forEach((user) => {
      console.log(`Nama: ${user.nama}`);
      console.log(`Umur: ${user.umur}`);
      console.log(`Status Pernikahan: ${user.nikah ? "Sudah Menikah" : "Belum Menikah"}`);
      console.log("-----");
    });
  }
  
  getUser();
  