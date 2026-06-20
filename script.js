const translations = {
    sq: {
        navHome: "Kryefaqja",
        navAbout: "Rreth Nesh",
        navMenu: "Menu",
        navReserve: "Rezervo",
        heroTitle: "Bar & Piceri",
        heroText: "Aty ku picat e shijshme me furrë druri, koktejet freskuese dhe momentet e paharrueshme bashkohen në një atmosferë moderne dhe elegante.",
        viewMenu: "Shiko Menunë",
        reserveNow: "Rezervo Tani",
        aboutWord: "Rreth",
        usWord: "Nesh",
        welcomeTitle: "Mirë se vini në Green Park",
        aboutText: "Green Park Bar & Piceri është një destinacion premium ku familjet dhe miqtë shijojnë pica artizanale, ushqim të shijshëm, kokteje speciale dhe një atmosferë të ngrohtë. Dizajni ynë modern dhe shërbimi i shkëlqyer krijojnë eksperienca të paharrueshme çdo ditë.",
        ourWord: "Specialitetet",
        specialtiesWord: "Tona",
        pizzaTitle: "Pica me Furrë Druri",
        pizzaText: "Përbërës të freskët dhe shije autentike italiane.",
        cocktailTitle: "Pijet",
        cocktailText: "Pije freskuese të përgatitura nga banakierë profesionistë.",
        gardenTitle: "Ëmbëlsira",
        gardenText: "Ëmbëlsira të përgatitura me kujdes dhe përdorim të mirë të përbërësve.",
        reserveA: "Rezervo një",
        tableWord: "Tavolinë",
        namePlaceholder: "Emri Mbiemri",
        phonePlaceholder: "Numri i Telefonit",
        peoplePlaceholder: "Numri i Personave",
        footerPhone: "+355 68 222 7000",
        footerLocation: "Lokacioni ne Google Maps",
        footerText: "© 2026 Green Park Bar & Piceri. Të gjitha të drejtat e rezervuara.",
        whatsappTitle: "Rezervim Green Park",
        whatsappName: "Emri",
        whatsappPhone: "Telefoni",
        whatsappPeople: "Persona",
        whatsappDate: "Data",
        whatsappTime: "Ora"
    
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navMenu: "Menu",
        navReserve: "Reserve",
        heroTitle: "Bar & Pizzeria",
        heroText: "Where delicious wood-fired pizzas, refreshing cocktails, and unforgettable moments come together in a modern, elegant atmosphere.",
        viewMenu: "View Menu",
        reserveNow: "Reserve Now",
        aboutWord: "About",
        usWord: "Us",
        welcomeTitle: "Welcome to Green Park",
        aboutText: "Green Park Bar & Pizzeria is a premium dining destination where families and friends enjoy handcrafted pizzas, delicious food, signature cocktails and a warm atmosphere. Our modern design and exceptional service create unforgettable experiences every day.",
        ourWord: "Our",
        specialtiesWord: "Specialties",
        pizzaTitle: "Wood-Fired Pizza",
        pizzaText: "Fresh ingredients and authentic Italian flavors.",
        cocktailTitle: "Drinks",
        cocktailText: "Refreshing drinks made by expert bartenders.",
        gardenTitle: "Desserts",
        gardenText: "Carefully crafted desserts made with quality ingredients.",
        reserveA: "Reserve a",
        tableWord: "Table",
        namePlaceholder: "Full Name",
        phonePlaceholder: "Phone Number",
        peoplePlaceholder: "Number of People",
        footerPhone: "+355 68 222 7000",
        footerLocation: "Location on Google Maps",
        footerText: "© 2026 Green Park Bar & Pizzeria. All Rights Reserved.",
        whatsappTitle: "Green Park Reservation",
        whatsappName: "Name",
        whatsappPhone: "Phone",
        whatsappPeople: "People",
        whatsappDate: "Date",
        whatsappTime: "Time"

    }

};

let currentLanguage = localStorage.getItem("greenParkLanguage") || "sq";

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

function applyLanguage(language){
    const selected = translations[language];
    const flag = document.getElementById("languageFlag");

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = selected[key];
    });

    document.querySelectorAll("[data-placeholder]").forEach((element) => {
        const key = element.dataset.placeholder;
        element.placeholder = selected[key];
    });

    if(language === "en"){
        flag.src = "https://flagcdn.com/w40/al.png";
        flag.alt = "Shqip";
    }else{
        flag.src = "https://flagcdn.com/w40/gb.png";
        flag.alt = "English";
    }

    localStorage.setItem("greenParkLanguage", language);
}

function toggleLanguage(){
    currentLanguage = currentLanguage === "sq" ? "en" : "sq";
    applyLanguage(currentLanguage);
}

function sendWhatsApp(){
    const selected = translations[currentLanguage];
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let people = document.getElementById("people").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let message =
`*${selected.whatsappTitle}*
${selected.whatsappName}: ${name}
${selected.whatsappPhone}: ${phone}
${selected.whatsappPeople}: ${people}
${selected.whatsappDate}: ${date}
${selected.whatsappTime}: ${time}`;

    let url = `https://wa.me/3550682227000?text=${encodeURIComponent(message)}`;

    window.location.href = url;
}

applyLanguage(currentLanguage);