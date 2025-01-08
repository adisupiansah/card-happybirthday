"use client";
import React, { useState, useEffect, useRef } from "react";

const TextCinta = () => {
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(null);
  const text = `happy birthday mas
semoga di umur yang ke 24 tahun ini mas di limpahkan banyak kebahagiaan ya. mungkin di tahun lalu begitu banyak badai yang mas tempuh dan mas lalui sendiri.
aca bangga dengan mas udah bertahan sejauh ini.
mas sadar ga kalo mas hebat banget tau. bangettt bangettt!!!.
mass…
semoga mas di murahkan rezekinya dan raga mas disehatkan ya.
selalu tebar kebaikan dimana pun ya mas. aca tau mas memang sebaik itu. dan aca yakin, Allah pasti juga akan mempertemukan mas dengan orang baik yang ada di sekitar mas.
tetap kuat ya mass, mungkin tahun ini, tahun pertama mas ngerayain ulang tahun tanpa sosok mama. 
aca selalu doakan mas agar dapat pasangan yang bisa menggantikan sosok mama. yang tak pernah kurang memberikan mas kasih sayang, cinta, perhatian dan ruang maaf yang tidak ada habis habis nya.
aamiin.
jangan lupa untuk doakan mama ya mas, 
karna di tanggal ini, mama mas sedang bertaruh nyawa untuk melahirkan mas.
mama mas hebat, mama mas baik, baikk bangettttt. 
mas beruntung lahir dari rahim wanita yang baik, dan sayang banget sama mas.
jangan pernah tinggalkan solat ya mas, sesibuk apapun mas. 
ga bosan aca ucapin maaf dan makasih untuk mas.
maafin aca ya mas selama kita kenal, kalo aca ga baik, aca minta maaf.
dan makasih mas udah pernah hadir di hidup aca, mas baik banget, aca bersyukur kenal mas. terimakasih ya mas.
sekali lagi happy birthday muhammad muammar🤍`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Hentikan interval lebih awal jika indeks di luar batas
      if (index >= text.length) {
        clearInterval(interval);
        return;
      }

      // Pastikan hanya karakter valid yang ditambahkan
      const nextChar = text[index] ?? ""; // Gunakan fallback string kosong jika undefined
      setDisplayedText((prev) => prev + nextChar);

      index++;

      // Scrol otomatis ke bawah setiap karakter baru ditambahkan
      if (textRef.current) {
        textRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50); // Kecepatan mengetik (ms)

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="container text-cinta">
      <p className="text-justify">{displayedText}</p>
      <div className='display-text' ref={textRef}></div>
    </div>
  );
};

export default TextCinta;
