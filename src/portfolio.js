/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Emre Yavuz",
  title: "Merhaba, Ben Emre Yavuz",
  subTitle: 
  "Mobil, web ve backend tarafında projeler geliştirdim; yapay zeka, görüntü işleme ve gerçek zamanlı sistemler üzerine çalışmalar yaptım. Son dönemde ağırlıklı olarak gömülü sistemler, C programlama ve mikrodenetleyici tabanlı düşük seviye yazılımla ilgileniyorum.",
	
  resumeLink: "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rlueer",
  linkedin: "https://www.linkedin.com/in/emre-yavuz-4b849a18b",
  gmail: "emreyavuzz2001@gmail.com",
  instagram:  "https://www.instagram.com/mr_yvz01/",
  letterboxd: "http://boxd.it/ewOy9",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Neler yapıyorum",
	subTitle:
	  "Donanım ve yazılımı birlikte kullanarak farklı alanlarda projeler geliştiren, çok yönlü bir mühendislik yaklaşımına sahibim.",
	skills: [
	  emoji("⚡ FPGA tabanlı dijital tasarım, VHDL/Verilog ile modelleme ve doğrulama"),
	  emoji("⚡ Gömülü sistem geliştirme: düşük seviye programlama, gerçek zamanlı çalışma mantığı ve donanım entegrasyonu"),
	  emoji("⚡ Mobil uygulama geliştirme ve cihazlarla veri alışverişi yapılan uygulama mimarileri"),
	  emoji("⚡ Sunucu tarafı uygulamalar geliştirme ve temel backend mimarileri oluşturma"),
	  emoji("⚡ Python ile veri işleme, temel görüntü işleme ve makine öğrenimi projeleri"),
	  emoji("⚡ Farklı teknolojileri bir araya getirerek uçtan uca çalışan proje çözümleri üretme")
	],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "C",
    fontAwesomeClassname: "fas fa-copyright" // C sembolü için en yakın ikon
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Dart / Flutter",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "VHDL / Verilog",
    fontAwesomeClassname: "fas fa-microchip"
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "CI/CD",
    fontAwesomeClassname: "fas fa-sync-alt"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-database"
  },

],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Gebze Teknik Üniversitesi",
      logo: require("./assets/images/gtulogo.png"),
      subHeader: "Bilgisayar Mühendisliği (İngilizce)",
      duration: "Eylül 2020 - Eylül 2025",
      desc:
		  "GTÜ’de İngilizce bilgisayar mühendisliği eğitimi alarak algoritmalar, yazılım geliştirme prensipleri ve donanım temelli derslerde güçlü bir temel oluşturdum.",
		descBullets: [
		  "C, C++, Java ve Python ile projeler,uygulamalar geliştirdim",
		  "Mobil, web ve backend alanlarında proje deneyimleri edindim",
		  "Yapay zeka ve bilgisayarla görme, gömülü sistemlerle ilgili çalışmalar yaptım"
		]
    },
    {
      schoolName: "Esenyurt Anadolu lisesi",
      logo: require("./assets/images/eal.png"),
      subHeader: "",
      duration: "Eylül 2015 - Haziran 2019",
      desc: "YKS 2020 Sayısal Sıralaması: 8.438.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
	{
      Stack: "İngilizce",
      progressPercentage: "80%"
    },
    {
      Stack: "Programlama / Algoritma",
      progressPercentage: "90%"
    },
    {
      Stack: "İletişim ve Ekip Çalışması",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "FPGA Tasarım Stajyeri",
      company: "TÜBİTAK BİLGEM",
      companylogo: require("./assets/images/tubitaklogo.png"),
      date: "Temmuz 2025 – Ağustos 2025",
      desc: "VHDL kullanarak DO-254 uyumlu UART IP çekirdeği tasarladım, doğruladım ve MicroBlaze tabanlı gömülü sisteme entegre ettim.",
      descBullets: [
        "VHDL kullanarak UART tabanlı bir dijital modül tasarladım ve FSM yapısını ModelSim’de testbench ile doğruladım",
		"Modülü Vivado’da geliştirdim; oversampling ve senkronizatör ekleyerek daha kararlı ve güvenilir çalışmasını sağladım.",
		"Daha sonra tasarımı AXI4-Lite arayüzüyle paketleyip MicroBlaze işlemcili sisteme entegre ettim.",
		"SDK’da C ile kontrol yazılımı yazıp loopback testlerini tamamlayarak sistemi FPGA üzerinde çalışır hale getirdim.",
      ]
    },
    {
      role: "Mobil Uygulama / Haberleşme Stajyeri",
      company: "ORTEM Electronics",
      companylogo: require("./assets/images/ortemlogo.png"),
      date: "Ocak 2025 – Şubat 2025",
      desc: "Flutter tabanlı mobil uygulama üzerinden seri haberleşme (UART/CAN) verilerini işleyen bir araç durum simülasyon sistemi geliştirdim.",
      descBullets: [
        "usb_serial kütüphanesi ile Android cihazlarda gerçek zamanlı bağlantı ve yeniden bağlanma mekanizmaları geliştirdim.",
        "CAN frame parsing, veri tamponlama ve paket bütünlüğü kontrol algoritmaları tasarladım.",
        "Gösterge paneli UI bileşenlerini (hız, odometre, vites, farlar) CAN mesajlarıyla senkronize ettim.",
        "Kesinti, paket kaybı ve veri bütünlüğü problemleri için hata toleranslı özel algoritmalar geliştirdim.",
        "Uygulamayı Flutter Clean Architecture prensipleriyle modüler ve ölçeklenebilir hale getirdim."
      ]
	  
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projeler",
  subtitle: "Gerçekleştirdiğim teknik projelerden bazıları",
  projects: [
    {
	  //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Akıllı Çevresel İzleme ve Kontrol Sistemi (Verilog, C)",
      projectDesc:
        "FPGA–MCU arasında çoklu sensör verilerini gerçek zamanlı işleyen ve çift yönlü haberleşmeyle kontrol sağlayan bir izleme sistemi tasarladım. Görsel ve işitsel uyarı mekanizmalarıyla gerçek zamanlı durum takibi sağlandı.",
      footerLink: [
        { name: "Github", url: "https://github.com/EmreeYavuzz/FPGA-bitirme" },
        { name: "Report", url: "https://github.com/EmreeYavuzz/FPGA-bitirme/blob/main/Emre_Yavuz_Grad.pdf" }
      ],
	  
    },
	{
      projectName: "LLM Tabanlı Siber Güvenlik Olgunluk Değerlendirme Aracı",
      projectDesc:
        "Kuruluşların siber güvenlik olgunluğunu ölçen yapay zekâ destekli bir değerlendirme aracı geliştirdim. Sistem, kullanıcıya dinamik sorular yönelterek cevapları analiz ediyor, sonraki adımları otomatik belirliyor ve sürecin sonunda görev listesi ile kapsamlı bir rapor üretiyor.",
      footerLink: [
        { name: "Github", url: "https://github.com/EmreeYavuzz/CyberSecurity-LLM" },
		{ name: "Youtube", url: "https://www.youtube.com/watch?v=Ou_M2Ii47uU" },
		{ name: "Website", url: "https://emreeyavuzz.github.io/CyberSecurity-LLM/" },
      ]
    },
	{
      projectName: "Öğrenci Yönetim Sistemi",
      projectDesc:
        "Öğrenci, ders ve sınav bilgilerinin yönetildiği; çok kriterli arama, sınav ekleme, ortalama hesaplama ve tamamlanan derslerin gösterimini sağlayan full-stack bir öğrenci yönetim sistemi geliştirdim.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/EmreeYavuzz/iqb-poc" },
		{ name: "Website", url: "https://bulut.enesakar.com.tr/" }
      ]
    },
	{
      projectName: "Pide Dükkanı Simülasyonu (C, Multi-Threading)",
      projectDesc:
        "Gerçek zamanlı sipariş akışını yöneten bir restoran simülasyonu geliştirdim. Aşçı ve kuryelerin çoklu thread yapısıyla çalıştığı sistemde fırın ve teslimat gibi paylaşılan kaynakları mutex ve condition variable ile yönettim. Sipariş iptallerinde hazırlama–fırın–teslimat aşamalarını geri alarak sistemi tamamen tutarlı halde çalıştırdım.",
      footerLink: [
      ]
    },
	
    {
      projectName: "İşletim Sistemi ve CPU Simülatörü (Assembly, Python)",
      projectDesc:
        "Custom bir komut seti üzerinde çalışan bir CPU simülatörü ve temel bir işletim sistemi çekirdeği geliştirdim. CPU tarafında bellek yönetimi, kullanıcı/çekirdek modları ve syscall yapısını oluşturdum; OS tarafında thread kontrol blokları, round-robin scheduler ve context switching mekanizmalarını tasarlayarak çoklu thread çalıştırmayı sağladım.",
      footerLink: [
        { name: "Github", url: "https://github.com/EmreeYavuzz/os-proje" },
        { name: "Report", url: "https://github.com/EmreeYavuzz/os-proje/blob/main/200104004003_os_project.pdf" }
      ]
    },
	
    {
      projectName: "Yapay Zekâ Destekli Özgeçmiş Platformu OzBuild",
      projectDesc:
        "Kullanıcıların gerçek zamanlı olarak özgeçmiş oluşturmasını sağlayan yapay zekâ destekli bir platform geliştirdim. Sistem, dinamik içerik üretimi ve anlık güncellemeyle kullanıcı deneyimini önemli ölçüde kolaylaştırıyor.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/EmreeYavuzz/OzBuild" },
		{ name: "Youtube", url: "https://www.youtube.com/watch?v=0q4iHy1aO0A" },
		{ name: "Website", url: "https://ozbuild-app.vercel.app/" },
      ]
    },
    {
      projectName: "Pseudo Etiketli Anahtar Nokta Tespiti & Feature Extraction (ML)",
      projectDesc:
        "Görüntülerde anahtar noktaları otomatik tespit edip anlamlı özellikler çıkaran bir yapay zekâ modeli geliştirdim. Sistem, görüntü eşleştirme ve sahne analizinde kullanılmak üzere optimize edildi.",
      footerLink: [
        { name: "Github", url: "https://github.com/EmreeYavuzz/Computer-Vision-Semester-Project" },
		{ name: "Youtube", url: "https://www.youtube.com/watch?v=P2EKmou9_Rk" },
      ]
    },
	{
      projectName: "Gebze – Çok Oyunculu 3D Hayatta Kalma Oyunu",
      projectDesc:
        "Takım çalışmasıyla geliştirilen bir 3D hayatta kalma oyununda, dövüş mekanikleri, düşman yapay zekâsı (hareket, saldırı davranışları, karar ağacı) ve bölüm tasarımlarının oluşturulmasında görev aldım. Blueprint sistemiyle oyun içi etkileşimleri ve temel oynanış akışını geliştirdim.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/EmreeYavuzz/OlumMakineleri" },
		{ name: "Youtube", url: "https://www.youtube.com/watch?v=n9C2cLsDyY4" },
		{ name: "Website", url: "https://splendid-tulumba-47b4ea.netlify.app/" },
      ]
    },
    {
      projectName: "OPIUM – Sosyal Medya / Etkinlik Uygulaması",
      projectDesc:
        "Kullanıcıların etkinlik oluşturup katılabildiği, gönderi paylaşabildiği ve gerçek zamanlı sohbet edebildiği çok platformlu bir sosyal medya uygulaması geliştirdim. Uygulama, akıcı bir kullanıcı deneyimi sağlayacak şekilde gerçek zamanlı veri akışıyla çalışıyor.",
      footerLink: [
        { name: "Drive", url: "https://drive.google.com/drive/folders/1eSJ5nVL5uqzpAtlkm8wDFMwFxvfsLCHy" },
		{ name: "Youtube", url: "https://www.youtube.com/watch?v=eeqyQrKjxt0" },
      ]
    },

  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]	
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("İletişim"),
  subtitle:
  "Proje, iş fırsatı veya herhangi bir konuda iletişime geçebilirsiniz.",
  number: "",
  email_address: "emreyavuzz2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
