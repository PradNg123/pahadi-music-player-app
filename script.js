const songsData = {
  Pritam : [
    { name: "Mai Jandu Meri Basanti", link: "https://www.youtube.com/watch?v=bkP4Jk0X6OA&list=RDbkP4Jk0X6OA&index=1" },
    { name: "Camera", link: "https://www.youtube.com/watch?v=Uido828hekQ&list=RDbkP4Jk0X6OA&index=2" },
    { name: "Chal Meri Saruli Kimsadihat Ma", link: "https://www.youtube.com/watch?v=NH2U9rR-WeI" },
    { name: "Jadwan (Chala Samdhini)", link: "https://www.youtube.com/watch?v=T3x9b5BZjPg" },
    { name: "Gaj Mala Pakuli Ko Pasu", link: "https://www.youtube.com/watch?v=acek3V3-oDs" },
    { name: "Hum Kushal Chanwa Ma ji", link: "https://www.youtube.com/watch?v=hGB-XSF2CZo" },
    { name: "Mohana Teri Murali Baaji", link: "https://www.youtube.com/watch?v=Fjg--Hlkoig" }

  ],
  Narendra: [
    { name: "Ni Dekhi Paheli Kabhi", link: "https://www.youtube.com/watch?v=2jLBWpaHmZw" },
    { name: "Syali Ramdeyi", link: "https://www.youtube.com/watch?v=w7J69nOpmEg" }
  ],
  Gajender: [
    { name: " CHORI CHALAYA", link: "https://www.youtube.com/watch?v=mo7SCwMFEsM" },
    { name: "Hey Lachi", link: "https://www.youtube.com/watch?v=gygmvFjsEWM" },
    { name: "Barkha Holi", link: " https://www.youtube.com/watch?v=GMGSqVkaZK8&list=RDbkP4Jk0X6OA&index=2" }
   
  ]
};

function showSongs() {
  const singer = document.getElementById("singers").value;
  const tbody = document.getElementById("songsBody");
  tbody.innerHTML = "";

  if (singer && songsData[singer]) {
    songsData[singer].forEach(song => {
      const row = `<tr>
        <td>${song.name}</td>
        <td><a href="${song.link}" target="_blank">Play </a></td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
}

