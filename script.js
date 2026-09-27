const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

const navAnchors = document.querySelectorAll('.nav-links a');
navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('open');
        }
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

const translations = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navServices: 'Services',
        navProjects: 'Projects',
        navExperience: 'Experience',
        navContact: 'Let’s Talk',
        portfolioBadge: 'Portfolio 2026',
        heroTitle: 'I build digital <span>experiences</span> that move ideas forward.',
        heroSubtitle: 'I’m a multidisciplinary developer turning strategy, design, and code into websites, products, and user journeys that feel fast, polished, and memorable.',
        viewWork: 'View Work',
        hireMe: 'Hire Me',
        yearsExperience: 'Years Experience',
        projectsDelivered: 'Projects Delivered',
        clientSatisfaction: 'Client Satisfaction',
        availableWork: 'Available for work',
        freelanceProjects: 'Freelance Projects',
        currentFocus: 'Current Focus',
        uiSystems: 'UI Systems',
        aboutMe: 'About Me',
        aboutTitle: 'Designing, building, and launching web platforms.',
        aboutText: 'I blend strong fundamentals with a detail-driven creative process, helping founders and teams bring clear, responsive, and conversion-focused digital products to market.',
        aboutSubtitle: 'Building better online experiences.',
        aboutText1: 'I specialize in high-performance front-end implementations, UX strategy, and clean technical execution. My work connects business goals with thoughtful user needs.',
        aboutText2: 'Whether you need a portfolio, marketing website, or a product interface, I help shape a focused experience that communicates value and encourages action.',
        webDevelopment: 'Web Development',
        productDesign: 'Product Design',
        performanceSEO: 'Performance Optimization',
        responsiveUI: 'Responsive UI',
        servicesLabel: 'Services',
        servicesTitle: 'What I can help you create.',
        servicesText: 'Every project starts with clear priorities and moves through a refined production workflow.',
        serviceWebDesign: 'Web Design',
        serviceWebDesignText: 'I craft clear visual systems, landing pages, and interface concepts aligned with your brand and audience.',
        serviceFrontend: 'Front-End Development',
        serviceFrontendText: 'I turn designs into responsive, accessible, fast-loading experiences using modern front-end practices.',
        serviceUX: 'UX/UI',
        serviceUXText: 'I design intuitive user experiences and visually appealing interfaces that meet both user needs and business goals.',
        selectedProjects: 'Selected Projects',
        projectsTitle: 'Recent work and case studies.',
        projectsText: 'From brand-first launches to business dashboards, each project is built around clarity and measurable outcomes.',
        projectSaasTag: 'SaaS Platform',
        projectAnalyticsTitle: 'Insight Analytics',
        projectAnalyticsText: 'A dashboard experience for reporting, KPI visibility, and customer usage intelligence.',
        projectEcommerceTag: 'Ecommerce',
        projectStudioTitle: 'Studio Supply',
        projectStudioText: 'A conversion-focused online store experience with improved catalogue structure and product storytelling.',
        projectAgencyTag: 'Agency Website',
        projectBrightTitle: 'Bright Labs',
        projectBrightText: 'A modern web presence for a creative consulting company with service-led content strategy.',
        exploreProject: 'Explore project →',
        experienceLabel: 'Experience',
        experienceTitle: 'From strategy to launch.',
        experienceText: 'My process keeps design, implementation, and measurement connected so decisions are grounded in outcomes.',
        experienceRole1: 'Independent Front-End Developer',
        experienceText1: 'Leading website strategy, UI systems, and responsive front-end development for clients across service and e-commerce industries.',
        experienceRole2: 'UI Developer',
        experienceText2: 'Built scalable front-end solutions, collaborated with stakeholders, and improved component libraries for growing product teams.',
        experienceRole3: 'Web Designer & Developer',
        experienceText3: 'Produced high-quality landing pages, service websites, and marketing assets for startups and local businesses.',
        letsConnect: 'Let’s Connect',
        contactTitle: 'Have a project in mind?',
        contactText: 'I’d love to hear about what you’re building and what needs to happen next.',
        contactEmailLabel: 'Email',
        contactLocationLabel: 'Location',
        contactAvailabilityLabel: 'Availability',
        locationValue: 'Pursat / Cambodia',
        availabilityValue: 'Open for projects',
        nameLabel: 'Your Name',
        emailLabel: 'Email Address',
        messageLabel: 'Project Details',
        namePlaceholder: 'Klot Sopheak',
        emailPlaceholder: 'klot@sopheak.com',
        messagePlaceholder: 'Tell me about your project...',
        sendMessage: 'Send Message'
    },
    kh: {
        navHome: 'ទំព័រដើម',
        navAbout: 'អំពីខ្ញុំ',
        navServices: 'សេវាកម្ម',
        navProjects: 'គម្រោង',
        navExperience: 'បទពិសោធ',
        navContact: 'ទាក់ទងខ្ញុំ',
        portfolioBadge: 'ប្រវត្តិ ២០២៦',
        heroTitle: 'ខ្ញុំបង្កើត <span>បទពិសោធន៍</span> ឌីជីថលដែលនាំឱ្យមានចលនាការវាយមួយ។',
        heroSubtitle: 'ខ្ញុំជាអភិជនដែលមានជំនាញក្នុងការរចនា ការអភិវឌ្ឍ និងការបង្កើតវេបសាយ ដែលធ្វើឱ្យមានល្បីល្បាញ និងប្រសើរឡើង។',
        viewWork: 'មើលការងារ',
        hireMe: 'ជួលខ្ញុំ',
        yearsExperience: 'ឆ្នាំនៃបទពិសោធ',
        projectsDelivered: 'គម្រោងបានបញ្ជូន',
        clientSatisfaction: 'ការពេញចិត្តរបស់អតិថិជន',
        availableWork: 'មានសម្រាប់ការងារ',
        freelanceProjects: 'គម្រោងឯករាជ្យ',
        currentFocus: 'ការបណ្តុះវត្តមាន',
        uiSystems: 'ប្រព័ន្ធ UI',
        aboutMe: 'អំពីខ្ញុំ',
        aboutTitle: 'រចនា បង្កើត និងចេញផ្សាយវេបសាយ។',
        aboutText: 'ខ្ញុំលាយបញ្ចូលគំនិត និងការងារល្អជាមួយបច្ចេកទេសដែលជួយអោយផលិតផលឌីជីថលមានភាពឆ្លាត និងឆាប់រីកចម្រើន។',
        aboutSubtitle: 'បង្កើតបទពិសោធន៍ដ៏ល្អ។',
        aboutText1: 'ខ្ញុំជំនាញក្នុងការអភិវឌ្ឍ Front-end សម្រាប់ការងារដែលមានទំនុកចិត្ត និងការគ្រប់គ្រងទិន្នន័យ។',
        aboutText2: 'ខ្ញុំជួយរៀបចំប្រព័ន្ធបណ្តាញ និងទំព័រលក់ដែលជួយបង្ហាញតម្លៃផលិតផល។',
        webDevelopment: 'អភិវឌ្ឍន៍វេបសាយ',
        productDesign: 'រចនាផលិតផល',
        performanceSEO: 'បន្ទាត់ប្រតិបត្តិ',
        responsiveUI: 'UI ឆ្លើយតប',
        servicesLabel: 'សេវាកម្ម',
        servicesTitle: 'ខ្ញុំអាចជួយអ្នកបង្កើតអ្វីបាន។',
        servicesText: 'គម្រោងនីមួយៗចាប់ផ្តើមពីការកំណត់គោលដៅ និងបញ្ចប់ដោយការអនុវត្តឆ្លើយតប។',
        serviceWebDesign: 'រចនាវេបសាយ',
        serviceWebDesignText: 'ខ្ញុំរចនារូបរាង តំបន់បារម្មណ៍ និងចំណុចប្រទាក់ដែលស្របនឹងធាតុពណ៌និងរូបភាព។',
        serviceFrontend: 'អភិវឌ្ឍ Front-End',
        serviceFrontendText: 'ខ្ញុំបម្លែងការរចនាទៅជាទំព័រដែលឆ្លើយតប និងមានល្បឿនល្អ។',
        serviceUX: 'UX/UI',
        serviceUXText: 'ខ្ញុំរចនាបទពិសោធន៍អ្នកប្រើ និងចំណុចប្រទាក់ដែលស្របតាមតម្រូវការ។',
        selectedProjects: 'គម្រោងជ្រើសរើស',
        projectsTitle: 'ការងារថ្មីៗ និងករណីសិក្សា។',
        projectsText: 'ពីការចាប់ផ្តើមដល់ការបោះផ្សាយ ការងារមានគោលដៅ និងលទ្ធផលច្បាស់លាស់។',
        projectSaasTag: 'ប្រព័ន្ធ SaaS',
        projectAnalyticsTitle: 'Insight Analytics',
        projectAnalyticsText: 'បទពិសោធន៍ dashboard សម្រាប់រាយការណ៍ និង KPI ។',
        projectEcommerceTag: 'ការលក់អនឡាញ',
        projectStudioTitle: 'Studio Supply',
        projectStudioText: 'បទពិសោធន៍ហាងលក់ដែលមានលក្ខណៈចរោះបញ្ជូនយ៉ាងឆ្លាត។',
        projectAgencyTag: 'វេបសាយទីភ្នាក់ងារ',
        projectBrightTitle: 'Bright Labs',
        projectBrightText: 'វេបសាយទំនើប សម្រាប់ក្រុមប្រឹក្សាណាណខ្លាំង។',
        exploreProject: 'ស្វែងរកគម្រោង →',
        experienceLabel: 'បទពិសោធ',
        experienceTitle: 'ពីគោលការណ៍ដល់ការចេញផ្សាយ។',
        experienceText: 'ដំណារងារខ្ញុំត្រូវបានភ្ជាប់ពីរចនា ទៅជាការអនុវត្ត និងការវាស់វែងមេរៀន។',
        experienceRole1: 'អភិវឌ្ឍ Front-End បុគ្គល',
        experienceText1: 'ទាក់ទងនឹងយុទ្ធសាស្ត្រ គ្រប់គ្រង UI និងការអភិវឌ្ឍ web សម្រាប់អតិថិជន។',
        experienceRole2: 'អ្នកអភិវឌ្ឍ UI',
        experienceText2: 'បង្កើតផ្នែក Front-end និងធ្វើឱ្យមានស្ថាប័នប្រសើរ។',
        experienceRole3: 'អ្នករចនា & អភិវឌ្ឍ Web',
        experienceText3: 'ផលិត landing page និង marketing assets សម្រាប់សហគ្រិនថ្មីៗ។',
        letsConnect: 'ត្រូវសាកលក្ខណ៍',
        contactTitle: 'អ្នកមានគម្រោងមែនទេ?',
        contactText: 'ខ្ញុំចង់ស្តាប់ពីអ្វីដែលអ្នកកំពុងបង្កើត។',
        contactEmailLabel: 'អ៊ីមែល',
        contactLocationLabel: 'ទីតាំង',
        contactAvailabilityLabel: 'មុខងារ',
        locationValue: 'ពោធិ៏សាត់ / កម្ពុជា',
        availabilityValue: 'នៅមានសម្រាប់គម្រោង',
        nameLabel: 'ឈ្មោះរបស់អ្នក',
        emailLabel: 'អ៊ីមែល',
        messageLabel: 'ព័ត៌មានគម្រោង',
        namePlaceholder: 'ក្លោត សុភាខ',
        emailPlaceholder: 'klot@sopheak.com',
        messagePlaceholder: 'ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក...',
        sendMessage: 'ផ្ញើសារ'
    }
};

const allTranslationNodes = document.querySelectorAll('[data-i18n]');
const allPlaceholderNodes = document.querySelectorAll('[data-i18n-placeholder]');

function switchLanguage(lang) {
    const language = translations[lang] ? lang : 'en';
    const dictionary = translations[language];

    allTranslationNodes.forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (dictionary[key]) {
            if (key === 'heroTitle') {
                node.innerHTML = dictionary[key];
            } else {
                node.textContent = dictionary[key];
            }
        }
    });

    allPlaceholderNodes.forEach((node) => {
        const key = node.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            node.setAttribute('placeholder', dictionary[key]);
        }
    });

    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach((button) => {
        button.classList.toggle('active', button.getAttribute('data-lang') === language);
    });
}

const langButtons = document.querySelectorAll('[data-lang]');
langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switchLanguage(button.getAttribute('data-lang'));
    });
});