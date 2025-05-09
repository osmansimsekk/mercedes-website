const footerData = [
  {
    key: "about", // Hakkımızda
    title: "Hakkımızda",
    texts: ["Vizyon", "Misyon", "Hedefler", "Değerler"],
  },
  {
    key: "contact", // İletişim
    title: "İletişim",
    texts: ["Adres", "Telefon", "E-posta", "Çalışma Saatleri"],
  },
  {
    key: "services", // Hizmetler
    title: "Hizmetler",
    texts: ["Geliştirme", "Tasarım", "Danışmanlık", "Entegrasyon"],
  },
  {
    key: "support", // Destek
    title: "Destek",
    texts: ["SSS", "Yardım", "Kullanıcı Kılavuzu", "Topluluk"],
  },
];

const Footer = () => {
  return (
    <footer className="w-screen mx-auto bg-black text-white font-gidole py-10 max-sm:h-[60vh] sm:h-[50vh] md:h-[40vh] px-4">
      <div className="flex gap-10 justify-around items-strecth py-10 bg-black max-sm:px-2">
        {footerData.map((content) => (
          <ul className="flex flex-col space-y-8">
            <>
              <p className="border-b-1 md:text-xl text-md max-sm:text-xs">
                {content.title}
              </p>
              <div className="space-y-1 md:text-sm text-xs text-gray-200">
                {content.texts.map((text, i) => (
                  <li key={i} className="max-sm:text-[0.6rem]">
                    {text}
                  </li>
                ))}
              </div>
            </>
          </ul>
        ))}
      </div>
      <div className="text-white flex justify-center items-center md:gap-10 gap-5 font-tinos font-light bg-black pb-10">
        <img src="images/logo.png" className="md:size-12 size-6" />
        <p className="text-xl border-l-1 px-8">Mercedes-Benz.</p>
      </div>
    </footer>
  );
};

export default Footer;
