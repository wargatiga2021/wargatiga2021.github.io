---
title: Website Major Update
date: "2020-12-17"
slug: "website-major-update"
thumbnail: "/thumbnails/address-book.png"
published: true
tags: website, intermezzo
---
## Pengembangan

Setelah kurang lebih 2 bulan masa pengembangan situs web untuk Warga Tiga 2021, akhirnya pada tanggal 17 Desember 2020, persentase pengembangan website telah mencapai hampir 100%, terutama untuk keseluruhan layout dan sistem yang berjalan di website ini.

![Gambar perencanaan pengembangan website menggunakan buku tulis.](https://2021.wargati.ga/images/website-major-update/buku.jpg)

Sisanya tinggal mengisi konten untuk website ini. So, untuk kamu yang tertarik menjadi content creator — terutama untuk kamu yang suka menulis. Atau yang ingin mengisi waktu luangnya, boleh banget kontak kami lewat [Instagram](http://instagram.com/wargatiga21 "Instagram"), [Twitter](http://twitter.com/wargatiga21 "Twitter"), atau email ke [warga32021@gmail.com](mailto:warga32021@gmail.com "warga32021@gmail.com")! Dan kalau kalian punya kritik dan saran boleh juga kok. Santai aja, kami tunggu okeii.

Tampilan website saat pertama kali dipublikasikan ke angkatan sebenarnya masih belum selesai sepenuhnya, meskipun website masih dapat diakses dengan baik, baik dari segi tampilan maupun fungsinya.

Mari kita simak pembaruan dari website versi lama ke versi terbaru.

### Header

Banyak sekali pembaruan untuk versi terbaru website yang sedang kamu akses saat ini. Pada bagian *header* saja, banyak yang berubah. Berikut perbandingannya:

------------


##### Tampilan Lama
![Gambar header pada website versi lama.](https://2021.wargati.ga/images/website-major-update/header-before.png)
##### Tampilan Terbaru
![Gambar header pada website versi terbaru.](https://2021.wargati.ga/images/website-major-update/header-after.png)

------------


Tulisan "Warga Tiga 2021" mengalami perubahan font serta ditambahkan gambar/logo angkatan yang dapat berubah saat kita berganti mode terang/gelap. Selain itu terdapat badge dengan tulisan "2021".

Di ujung kanan, sebelum tombol untuk mengganti mode ditambahkan sebuah tombol "Map". Jika ditekan, maka akan keluar *modal* yang akan menampilkan peta SMA Negeri 3 Bandung di Google Map. Sebenarnya pada awalnya ini merupakan fitur eksperimental dan eksplorasi dari Chakra UI. Akan diupdate (diganti ataupun ditambahkan) dengan fitur yang lebih baik, mungkin.

![Gambar modal map.](https://2021.wargati.ga/images/website-major-update/map.png)

### Halaman Utama
Pada awalnya, di halaman utama hanya menampilkan *section* "Projects and Events" saja. Sekarang sudah ditambahlan section blog yang berisikan berita dan informasi yang berguna untuk angkatan.

Selain itu, terdapat perubahan pada *icon* dari kegiatan dan 4 kegiatan utama ditampilkan di halaman muka/utama yakni Booklet, Turbud, RBL, dan Gayapatri.

![Section projects and events pada website terbaru.](https://2021.wargati.ga/images/website-major-update/events.png)

### Booklet
Pengembangan halaman Booklet ini menjadi kunci dari pengembangan halaman serupa ke depannya. Karena jika dilihat dari tampilan awal, tampilan versi terbaru mengalami peningkatan yang signifikan. Halaman menjadi lebih *organized* atau teratur dengan memanfaatkan fitur *accordion* atau *dropdown*. Berikut perbandingannya:

------------


##### Tampilan Lama
![Gambar layout halaman booklet pada website versi lama.](https://2021.wargati.ga/images/website-major-update/booklet-before.png)
##### Tampilan Terbaru
![Gambar layout halaman booklet pada website versi terbaru.](https://2021.wargati.ga/images/website-major-update/booklet-after.png)

------------


Selain itu, pada bagian termin menjadi lebih tertata, rapi, dan enak dipandang dengan memanfaatkan *stats* pada Chakra UI.

------------


##### Tampilan Lama
![Gambar layout termin pada website versi lama.](https://2021.wargati.ga/images/website-major-update/termin-before.png)
##### Tampilan Terbaru
![Gambar layout termin pada website versi terbaru.](https://2021.wargati.ga/images/website-major-update/termin-after.png)

------------


Berikut contoh penggunaan stat untuk termin:
```
    import {
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
        Heading,
        Stat,
        StatLabel,
        StatNumber,
        StatHelpText,
        StatArrow,
        StatGroup,
        useColorModeValue,
        useColorMode,
        Icon
    } from "@chakra-ui/react";
    
    import { CheckCircleIcon } from "@chakra-ui/icons";
    
    const CircleIcon = (props) => (
        <Icon viewBox="0 0 200 200" {...props}>
            <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
        </Icon>
    )
    
    const Termin = () => {
    
        const { colorMode } = useColorMode();
        const terminGreen = useColorModeValue("Green", "#00CC00")
      
        return (
          <>
            <Accordion>
                <AccordionItem>
                 <AccordionButton>
                   <Heading flex="1" textAlign="left" size="lg" my="2">
                   💵&nbsp;&nbsp;Termin Pembayaran 
                   </Heading>
                   <AccordionIcon />
                 </AccordionButton>
                 <AccordionPanel pb={4}>
                  <StatGroup>
                    <Stat borderTop="2px" borderColor={terminGreen} paddingTop="2">
                      <StatLabel>
                        <CheckCircleIcon color={terminGreen}/> Termin 1
                      </StatLabel>
                      <StatNumber>Rp100.000,00</StatNumber>
                      <StatHelpText>
                        November
                      </StatHelpText>
                    </Stat>
                    
                    <Stat borderTop="2px" borderColor="#CDCDCD" paddingTop="2">
                      <StatLabel>
                        <CircleIcon color="#CDCDCD"/> Termin 2
                      </StatLabel>
                      <StatNumber>Rp100.000,00</StatNumber>
                      <StatHelpText>
                        Desember
                      </StatHelpText>
                    </Stat>
                    
                    <Stat borderTop="2px" borderColor="#CDCDCD" paddingTop="2">
                      <StatLabel>
                        <CircleIcon color="#CDCDCD"/> Termin 3
                      </StatLabel>
                      <StatNumber>Rp110.000,00</StatNumber>
                      <StatHelpText>
                        Januari
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                 </AccordionPanel>
               </AccordionItem>
            </Accordion>
        </>
      );
    };
    
    export default Termin;
```

### Halaman Khusus
Pada versi lama, navigasi di bawah dipakai untuk mengunjungi halaman utama, booklet, turbud, dan *about*.

![Gambar navigasi pada website versi lama.](https://2021.wargati.ga/images/website-major-update/old-tab-bar.png)

Pada versi terbaru, lebih difokuskan untuk dipakai ke halaman yang lebih *general* seperti halaman project dan juga blog.

![Gambar navigasi pada website versi terbaru.](https://2021.wargati.ga/images/website-major-update/new-tab-bar.png)

------------


##### Halaman Projects and Events
![Gambar halaman khusus project.](https://2021.wargati.ga/images/website-major-update/projects-events.png)
##### Halaman News and Information (Blog)
![Gambar halaman khusus project.](https://2021.wargati.ga/images/website-major-update/blog-post.png)

### About
Yang terakhir yakni pembaruan di halaman *about*. Tidak signifikan, tapi lebih baik. Terletak pada bagian daftar sosial media. Langsung aja cekidot:

##### Tampilan Lama
![Gambar layout sosmed pada website versi lama.](https://2021.wargati.ga/images/website-major-update/sosmed-before.png)
##### Tampilan Terbaru
![Gambar layout sosmed pada website versi terbaru.](https://2021.wargati.ga/images/website-major-update/sosmed-after.png)

### Akhir Kata
Terima kasih buat yang udah baca sampe sini wkwk. Semoga bisa menambah insight (hmm apa ya). Terima kasih juga buat Freepik atas ilustrasi-ilustrasi gratisnya yang kami jadikan icon.

Dadah!