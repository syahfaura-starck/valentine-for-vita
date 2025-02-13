const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const noMessages = [
    "Ayo dong",
    "Ayo mau ya",
    "Jangan bikin aku sedih :(",
    "Kamu benar-benar bikin aku sedih",
    "Ayo lah honey",
    "Klik tombol Yes sayang",
    "Gaboleh pencet yang ini Vitaaa :)",
    "Klik yang tombol Yes tuh",
    "Honey.. no no no bukan tombol yang ini",
    "Vitaa sayang, pencet tombolnya yang Yes",
    "Eits tombol ini itu gaakan selesai Vitaa",
    "Pencet yang tulisan Yes honey",
    "Pencet tombol Yes honey😌",
    "Jangan pencet yang ini yaa Vitaa sayang kuu gaakan selesai😁",
    "Pencet tombol yang samping ini sayang",
    "Ayo honey kamu pasti bisa",
    "Honey gaboleh pencet yang iniii"
];

let noClickCount = 0;
let yesSize = 20;

noButton.addEventListener("click", () => {
    noButton.textContent = noMessages[noClickCount % noMessages.length];
    noClickCount++;
    yesSize += 5;
    yesButton.style.fontSize = `${yesSize}px`;
});

yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Selamat Hari Valentine Vitaaa cintaku ❤️</h1>
            <p>Haloooo honeeeyy happy valentine dayy..</p>
            <p>Sayanggggg akuuu mauu bilangg sesuatuuu buattt kamuu hehee...</p>
            <p>Makasiii yaa udaaa hadirr di hiduppp akuuu...</p>
            <p>Semenjakkk adaaa kamuu hiduppp akuuu lebihh bewarnaaa, lebihh terarahhh...</p>
            <p>I'm very lucky to have you...</p>
            <p>Akuu gatauuu gimanaa akuu nantiii kalauu kamu pergiii darii hidupp akuu...</p>
            <p>Mungkin hidupp akuu bakall hampaa lagii, gaaa bewarnaaa...</p>
            <p>Karenaaa cumaa kamuuu yangg masyaaallaahh lucuuu bangettt, gemesss bangett, cantiiikk bangettt...</p>
            <p>Manisss bangett, kamuuu sempurnaaaa bangettt, gaadaa yangg sesempurna kamuuu honeyyyy...</p>
            <p>Akuuu ga pernahh ngerasainnn sesayangg iniii samaaaa seseorangg...</p>
            <p>Jangannn pernahh ninggalinn akuuu yaa? Loveee youuuu semestaakuuuu ❤️❤️❤️</p>
        </div>
    `;
});

