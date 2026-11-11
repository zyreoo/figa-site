export const PHONE = { label: "0743 092 226", href: "tel:+40743092226" };
export const PHONE2 = { label: "0759 021 090", href: "tel:+40759021090" };
export const MAP = "https://www.google.com/maps?q=47.164053,24.207428";
export const SITE_URL = "https://cazarebailefiga.com";
// Adresa la care raspunde acum site-ul. Linkurile trimise pe WhatsApp sau Facebook isi iau poza de aici.
// Vercel o seteaza singur si devine domeniul real dupa ce e conectat.
export const PUBLIC_URL = process.env.PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE_URL);

export type Slug = "hotel-select" | "cabane-panoramic" | "casute-sebastian";

export type Stay = {
  slug: Slug;
  name: string;
  short: string;
  title: string;
  description: string;
  sub: string;
  price: string;
  priceNote: string;
  hero: string;
  heroAlt: string;
  card: { image: string; alt: string };
  stack: { value: string; note: string }[];
  ext: string;
  extAlt: string;
  origin: string;
  int: string;
  intAlt: string;
  enterText: string;
  lead: string;
  prose: string;
  numbers: { value: string; note: string }[];
  amenities: string[];
  gallery: { size: "g4" | "g5" | "g6" | "g7" | "g8"; image: string; alt: string }[];
  compare: { capacity: string; bestFor: string; where: string };
};

export const STAYS: Stay[] = [
  {
    slug: "hotel-select",
    name: "Hotel Select",
    short: "Hotel",
    title: "Hotel Select Băile Figa | Camere la 300 lei pe noapte",
    description: "Hotel Select la Băile Figa: 8 camere pe 3 niveluri, la 300 lei pe noapte, aproape de Centrul Legacy. Vouchere de vacanță acceptate. Rezervări la 0743 092 226.",
    sub: "8 camere pentru cupluri și familii la Băile Figa, aproape de Centrul Legacy.",
    price: "300 lei",
    priceNote: "pe noapte",
    hero: "hotel-hero",
    heroAlt: "Hotel Select seara, cu fațadă de lemn luminată",
    card: { image: "hotel-front", alt: "Hotel Select seara" },
    stack: [
      { value: "300 lei", note: "pe noapte" },
      { value: "8 camere", note: "pe 3 niveluri" },
      { value: "Pentru doi", note: "sau cu copiii" },
    ],
    ext: "hotel-front",
    extAlt: "Fațada Hotelului Select seara",
    origin: "50% 72%",
    int: "hotel-room-1",
    intAlt: "Cameră de hotel la mansardă, cu grinzi de lemn",
    enterText: "Camere la mansardă, cu grinzi de lemn.",
    lead: "Camere moderne, gândite pentru o escapadă în doi sau pentru o vacanță cu copiii.",
    prose: "Hotelul are camere spațioase, baie proprie, frigider, centrală proprie și e deschis tot anul. E potrivit pentru vacanțe, întruniri de familie sau alte evenimente.",
    numbers: [
      { value: "300 lei", note: "pe noapte" },
      { value: "8", note: "camere, 3 cu pat suplimentar" },
      { value: "3", note: "niveluri" },
      { value: "20", note: "persoane, capacitate maximă" },
    ],
    amenities: ["Pat king-size", "Pat suplimentar", "Baie cu duș", "Baie cu hidromasaj", "Televizor LED", "Internet", "Filtru de cafea", "Frigider", "Terasă proprie", "Foișor și grătar", "Loc de joacă", "Spațiu verde", "Piscină", "Parcare privată"],
    gallery: [
      { size: "g7", image: "hotel-sus", alt: "Dormitor cu pereți de lemn" },
      { size: "g5", image: "hotel-terasa", alt: "Terasă cu două fotolii" },
      { size: "g5", image: "hotel-baie", alt: "Baie cu cadă" },
      { size: "g7", image: "hotel-room-2", alt: "Cameră cu tapet de plante" },
    ],
    compare: { capacity: "8 camere, până la 20 de persoane", bestFor: "Cupluri și familii", where: "Aproape de Centrul Legacy" },
  },
  {
    slug: "cabane-panoramic",
    name: "Cabane Panoramic",
    short: "Cabane",
    title: "Cabane Panoramic VIP Băile Figa | 12 persoane, 750 lei pe noapte",
    description: "Cabane Panoramic VIP la Băile Figa: 750 lei pe noapte, până la 12 persoane, cu bucătărie, living și foișor. Vouchere de vacanță acceptate. Rezervări la 0743 092 226.",
    sub: "Două cabane pe 3 niveluri la Băile Figa, la 10 m de intrarea în stațiune.",
    price: "750 lei",
    priceNote: "pe noapte, cabana întreagă",
    hero: "pan-hero",
    heroAlt: "Cabane Panoramic VIP la apus, cu un palmier în ghiveci",
    card: { image: "pan-zi", alt: "Cabane Panoramic VIP ziua" },
    stack: [
      { value: "750 lei", note: "pe noapte, cabana întreagă" },
      { value: "12 persoane", note: "8 adulți și 4 copii" },
      { value: "3 niveluri", note: "cu bucătărie și living" },
    ],
    ext: "pan-zi",
    extAlt: "Cabane Panoramic VIP ziua",
    origin: "62% 62%",
    int: "pan-open",
    intAlt: "Living și bucătărie deschisă, cu masă lungă",
    enterText: "Living și bucătărie, la demisol.",
    lead: "O cabană întreagă pentru vacanțe în familie, aniversări sau reuniuni.",
    prose: "Ambele cabane au centrală proprie și încălzire în pardoseală, deci sunt deschise tot anul. În curte ai foișor, grătar, spațiu verde și loc de joacă.",
    numbers: [
      { value: "750 lei", note: "pe noapte, cabana întreagă" },
      { value: "12", note: "persoane: 8 adulți și 4 copii" },
      { value: "≈ 63 lei", note: "de persoană, la 12 persoane" },
      { value: "2", note: "cabane, până la 24 de persoane" },
    ],
    amenities: ["Încălzire în pardoseală", "Centrală proprie", "Bucătărie utilată", "Living cu sală de mese", "Internet", "Sistem de muzică", "TV în living", "Remi, table și altele", "Pătuț pentru copii", "Foișor în curte", "Grătar și plită", "Loc de joacă", "Spațiu verde", "Parcare privată"],
    gallery: [
      { size: "g5", image: "pan-foisor", alt: "Foișor din lemn cu flori" },
      { size: "g7", image: "pan-foc", alt: "Foc aprins în vatra de lângă foișor" },
      { size: "g7", image: "pan-masa", alt: "Masă lungă cu scaune albe" },
      { size: "g5", image: "pan-dorm", alt: "Dormitor cu pereți de lemn" },
    ],
    compare: { capacity: "12 persoane de cabană", bestFor: "Familii mari și grupuri", where: "La 10 m de intrare" },
  },
  {
    slug: "casute-sebastian",
    name: "Căsuțe Sebastian",
    short: "Căsuțe",
    title: "Căsuțele Sebastian Băile Figa | Căsuțe la 250 lei pe noapte",
    description: "Căsuțele Sebastian la Băile Figa: 250 lei pe noapte, pat king-size, baie proprie și terasă, la 20 m de complex. Vouchere de vacanță acceptate. Rezervări la 0743 092 226.",
    sub: "Căsuțe din lemn la Băile Figa, cu baie proprie și terasă, la 20 m de complex.",
    price: "250 lei",
    priceNote: "pe noapte",
    hero: "cas-hero",
    heroAlt: "Căsuțele Sebastian din lemn, în soare, cu un palmier în față",
    card: { image: "cas-ext", alt: "Două căsuțe de lemn, cu flori la ferestre" },
    stack: [
      { value: "250 lei", note: "pe noapte" },
      { value: "Pat king-size", note: "saltea copil la cerere" },
      { value: "20 m", note: "până la complex" },
    ],
    ext: "cas-ext",
    extAlt: "Două căsuțe de lemn, cu flori la ferestre",
    origin: "42% 62%",
    int: "cas-pat",
    intAlt: "Pat mare cu perne, într-o căsuță de lemn",
    enterText: "Pat king-size și baie proprie.",
    lead: "Căsuțe de lemn pentru două persoane, aproape de bazine.",
    prose: "Fiecare căsuță are baie proprie cu duș, TV LED cu grilă Focus, frigider, ventilator, filtru de cafea, masă și terasă.",
    numbers: [
      { value: "250 lei", note: "pe noapte" },
      { value: "King-size", note: "pat mare, saltea copil la cerere" },
      { value: "20 m", note: "până la complex" },
      { value: "Terasă", note: "proprie, la fiecare căsuță" },
    ],
    amenities: ["Pat king-size", "Baie proprie cu duș", "Saltea pentru copil, la cerere", "Televizor LED", "Filtru de cafea", "Frigider", "Ventilator", "Terasă proprie", "Foișor", "Grătar", "Bucătărie de vară", "Catering la livrare"],
    gallery: [
      { size: "g7", image: "cas-camera", alt: "Interiorul unei căsuțe, cu televizor, frigider și cuptor cu microunde" },
      { size: "g5", image: "cas-hamac", alt: "Hamac albastru pe terasa unei căsuțe" },
      { size: "g5", image: "cas-baie2", alt: "Baie cu duș, într-o căsuță" },
      { size: "g7", image: "cas-receptie", alt: "Recepția căsuțelor, cu flori în față" },
      { size: "g7", image: "cas-sah", alt: "Două căsuțe de lemn, cu o tablă de șah pe masă" },
      { size: "g5", image: "det-sah", alt: "Două persoane joacă șah pe terasă" },
    ],
    compare: { capacity: "2 persoane, saltea copil la cerere", bestFor: "Cupluri", where: "La 20 m de complex" },
  },
];

export const ROOMS = [
  { image: "cam-deluxe", name: "Cameră Dublă Deluxe" },
  { image: "cam-eleganta", name: "Cameră Dublă Elegantă și Confort" },
  { image: "cam-natura", name: "Cameră Dublă Natura Deluxe" },
  { image: "cam-suita", name: "Suită Romantică" },
  { image: "cam-confort", name: "Cameră Dublă Confort" },
  { image: "cam-familie-c", name: "Cameră de Familie Confort" },
  { image: "cam-familii", name: "Cameră pentru familii" },
  { image: "cam-premium", name: "Cameră Premium" },
];

export const GALLERY: { id: string; label: string; images: string[] }[] = [
  { id: "hotel", label: "Hotel Select", images: ["hotel-hero", "hotel-room-1", "hotel-sus", "cam-suita", "hotel-terasa", "cam-deluxe", "hotel-baie", "cam-natura", "hotel-room-2", "cam-premium", "hotel-front", "cam-familii", "cam-familie-c", "cam-confort", "cam-eleganta"] },
  { id: "panoramic", label: "Cabane Panoramic", images: ["pan-hero", "pan-open", "pan-foc", "pan-dron", "pan-masa", "pan-zi", "pan-dorm", "pan-foisor", "pan-scari", "pan-dorm2", "pan-foisor2", "det-grinda", "det-ceaun", "om-familie"] },
  { id: "casute", label: "Căsuțe Sebastian", images: ["cas-hero", "cas-pat", "det-gazda", "cas-camera", "cas-ext", "cas-hamac", "det-semn", "cas-baie2", "cas-sah", "cas-poarta", "det-sah", "cas-mese", "cas-receptie", "cas-rand"] },
  { id: "terapii", label: "Terapii saline", images: ["ts-ext", "ts-sare", "ts-bazin", "ts-tratament", "ts-terasa", "ts-sare2", "ts-sezlong", "ts-sauna", "ts-jacuzzi", "ts-bazin-p", "ts-cada", "ts-cabinet", "ts-sauna-p", "ts-hol", "ts-apus", "ts-panou", "ts-strada"] },
  { id: "statiune", label: "Stațiunea", images: ["st-panorama", "st-sus", "st-carusel", "aq-tobogane", "leg-sus", "aq-spirala", "leg-piscina", "aq-piscina", "leg-rotund", "aq-rau", "leg-ext", "aq-oameni", "leg-tobogan", "parc", "balnear", "sport", "parc-sus", "aq-stropi", "aq-sezlong", "leg-receptie", "leg-mozaic", "namol", "turn", "aer", "dron-apus"] },
];

export const FAQ = [
  { q: "Cum fac o rezervare?", a: "Rezervările se fac doar la telefon, la 0743 092 226 sau 0759 021 090. Spune-ne perioada și numărul de persoane, iar noi îți comunicăm disponibilitatea." },
  { q: "Cât costă cazarea la Băile Figa?", a: "O cameră la Hotel Select costă 300 lei pe noapte, o căsuță Sebastian 250 lei pe noapte, iar o cabană Panoramic VIP 750 lei pe noapte, pentru toată cabana." },
  { q: "La ce oră este check-in și check-out?", a: "Check-in la ora 12:00 și check-out la ora 10:00." },
  { q: "Accesul la piscine și Aqualand este inclus în cazare?", a: "Nu. Accesul în Parcul balnear și în Centrul Legacy nu este inclus în cazare și se plătește separat." },
  { q: "Acceptați vouchere de vacanță?", a: "Da, acceptăm vouchere de vacanță la toate variantele de cazare. Poți plăti și cash, prin virament bancar sau cu cardul de vacanță." },
  { q: "Câte persoane încap într-o cabană Panoramic?", a: "Fiecare cabană primește până la 12 persoane, adică 8 adulți și 4 copii. Sunt două cabane, deci până la 24 de persoane în total." },
  { q: "Ce terapii saline există la Băile Figa?", a: "Complexul are aerosoli salini, cameră de sare, băi și plutire în apă sărată, împachetări cu nămol sapropelic și saune. Detalii găsești pe pagina Terapii saline." },
  { q: "Unde se află Băile Figa?", a: "Stațiunea este în județul Bistrița-Năsăud, la mai puțin de 3 km de Beclean." },
];

// Descrierea fiecarei poze, pentru Google Images si cititoare de ecran.
export const ALT: Record<string, string> = {
  "ts-ext": "Clădirea Terapii Saline de la Băile Figa", "ts-sare": "Camera de sare de la Băile Figa", "ts-bazin": "Bazinul interior cu apă sărată, Terapii Saline", "ts-tratament": "Sală de tratament cu căzi, Terapii Saline", "ts-terasa": "Terasa cu șezlonguri și jacuzzi, Terapii Saline", "ts-sare2": "Pereți din blocuri de sare", "ts-sezlong": "Șezlonguri lângă bazinul cu apă sărată", "ts-sauna": "Saună și zonă de relaxare, Terapii Saline", "ts-jacuzzi": "Jacuzzi cu priveliște spre dealuri, Terapii Saline", "ts-bazin-p": "Bazinul interior cu apă sărată", "ts-cada": "Cadă pentru proceduri, Terapii Saline", "ts-cabinet": "Cabinet de tratament, Terapii Saline", "ts-sauna-p": "Saună cu fotolii de odihnă", "ts-hol": "Sala de așteptare, Terapii Saline", "ts-apus": "Terasa la apus, Terapii Saline", "ts-panou": "Panou perforat cu motiv tradițional pe clădirea Terapii Saline", "ts-strada": "Clădirea Terapii Saline văzută din stradă", "st-panorama": "Panoramă asupra stațiunii Băile Figa", "st-sus": "Stațiunea Băile Figa și dealurile împădurite", "st-carusel": "Carusel luminat seara, Băile Figa",
  "hotel-hero": "Hotel Select Băile Figa seara, fațadă de lemn luminată", "hotel-room-1": "Cameră la mansardă cu grinzi de lemn, Hotel Select", "hotel-sus": "Dormitor cu pereți de lemn, Hotel Select", "cam-suita": "Suită Romantică cu lebede din prosoape și petale de trandafir", "hotel-terasa": "Terasă cu două fotolii, Hotel Select", "cam-deluxe": "Cameră Dublă Deluxe, Hotel Select", "hotel-baie": "Baie cu cadă, Hotel Select", "cam-natura": "Cameră Dublă Natura Deluxe, Hotel Select", "hotel-room-2": "Cameră cu tapet de plante, Hotel Select", "cam-premium": "Cameră Premium, Hotel Select", "hotel-front": "Fațada Hotelului Select seara", "cam-familii": "Cameră pentru familii, Hotel Select", "cam-familie-c": "Cameră de Familie Confort, Hotel Select", "cam-confort": "Cameră Dublă Confort, Hotel Select", "cam-eleganta": "Cameră Dublă Elegantă și Confort, Hotel Select",
  "pan-hero": "Cabane Panoramic VIP la apus, Băile Figa", "pan-open": "Living și bucătărie deschisă, cabană Panoramic VIP", "pan-foc": "Vatră de foc lângă foișorul cabanelor Panoramic", "pan-dron": "Cabanele Panoramic VIP și foișorul, văzute de sus", "pan-masa": "Masă lungă cu scaune albe, cabană Panoramic VIP", "pan-zi": "Cabane Panoramic VIP ziua, cu foișor și gazon", "pan-dorm": "Dormitor cu pereți de lemn, cabană Panoramic VIP", "pan-foisor": "Foișor de lemn cu flori, cabane Panoramic", "pan-scari": "Scară de lemn în interiorul unei cabane Panoramic", "pan-dorm2": "Dormitor la mansardă, cabană Panoramic VIP", "pan-foisor2": "Foișor de lemn cu masă lungă", "det-grinda": "Grindă de lemn cioplită la foișor", "det-ceaun": "Ceaun de fontă într-un cuptor de cărămidă", "om-familie": "Familie în curtea cabanelor Panoramic",
  "cas-hero": "Căsuțele Sebastian din lemn, în soare, Băile Figa", "cas-pat": "Pat mare cu perne într-o căsuță Sebastian", "det-gazda": "Recepția Căsuțelor Sebastian, cu flori", "cas-camera": "Interior de căsuță Sebastian, cu televizor și frigider", "cas-ext": "Două Căsuțe Sebastian cu flori la ferestre", "cas-hamac": "Hamac albastru pe terasa unei căsuțe", "det-semn": "Firma de lemn Căsuțe Sebastian, cu numărul de telefon", "cas-baie2": "Baie cu duș într-o căsuță Sebastian", "cas-sah": "Căsuțe de lemn, cu o tablă de șah pe masă", "cas-poarta": "Poarta satului de vacanță, acoperită cu stuf", "det-sah": "Două persoane joacă șah pe terasă", "cas-mese": "Mese de lemn sub acoperiș, lângă căsuțe", "cas-receptie": "Recepția Căsuțelor Sebastian", "cas-rand": "Șir de căsuțe de lemn, Băile Figa",
  "aq-tobogane": "Tobogane colorate și piscină la Aqualand Băile Figa", "leg-sus": "Bazin interior cu colace galbene, Centrul Legacy", "aq-spirala": "Tobogan alb în spirală, Băile Figa", "leg-piscina": "Piscină interioară cu mozaic, Centrul Legacy", "aq-piscina": "Piscina exterioară de la Băile Figa", "leg-rotund": "Bazin rotund cu mozaic, Centrul Legacy", "aq-rau": "Lazy River printre spații verzi, Băile Figa", "leg-ext": "Clădirea Centrului Legacy, Băile Figa", "aq-oameni": "Tineri care sar în piscină, Băile Figa", "leg-tobogan": "Tobogan alb interior, Centrul Legacy", "parc": "Parcul stațiunii Băile Figa, cu alei și umbrele de stuf", "balnear": "Oameni în bazinul cu apă sărată, Băile Figa", "sport": "Terenuri de sport, Băile Figa", "parc-sus": "Stațiunea Băile Figa văzută de sus", "aq-stropi": "Sosire de pe tobogan, cu stropi, Băile Figa", "aq-sezlong": "Șezlonguri și umbrele lângă tobogane", "leg-receptie": "Recepția Centrului Legacy", "leg-mozaic": "Bazin cu mozaic și jacuzzi, Centrul Legacy", "namol": "Oameni în bazinul rustic cu nămol, Băile Figa", "turn": "Turn circular de aerosoli salini, Băile Figa", "aer": "Galerie de aerosoli salini, Băile Figa", "dron-apus": "Stațiunea Băile Figa din dronă, la apus",
};
