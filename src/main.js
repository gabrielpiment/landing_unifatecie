import './style.css'

// Comprehensive Course Database
const allCourses = [
    // Tecnólogos
    { name: "Design de Produto", category: "Tecnólogo", duration: "2 Anos", icon: "inventory_2" },
    { name: "Jogos Digitais", category: "Tecnólogo", duration: "2.5 Anos", icon: "sports_esports" },
    { name: "Produção Publicitária", category: "Tecnólogo", duration: "2 Anos", icon: "ad_units" },
    { name: "Segurança no Trânsito", category: "Tecnólogo", duration: "2 Anos", icon: "traffic" },
    { name: "Agente Comunitário", category: "Tecnólogo", duration: "2 Anos", icon: "hail" },
    { name: "Processos Escolares", category: "Tecnólogo", duration: "2 Anos", icon: "border_color" },
    { name: "Análise e Desenvolvimento de Sistemas", category: "Tecnólogo", duration: "2.5 Anos", icon: "code" },
    { name: "Comércio Exterior", category: "Tecnólogo", duration: "2 Anos", icon: "public" },
    { name: "Design de Interiores", category: "Tecnólogo", duration: "2 Anos", icon: "chair" },
    { name: "Design de Moda", category: "Tecnólogo", duration: "2 Anos", icon: "checkroom" },
    { name: "Design Gráfico", category: "Tecnólogo", duration: "2 Anos", icon: "palette" },
    { name: "Gastronomia", category: "Tecnólogo", duration: "2 Anos", icon: "restaurant" },
    { name: "Gestão Ambiental", category: "Tecnólogo", duration: "2 Anos", icon: "eco" },
    { name: "Gestão Comercial", category: "Tecnólogo", duration: "2 Anos", icon: "storefront" },
    { name: "Gestão da Produção Industrial", category: "Tecnólogo", duration: "3 Anos", icon: "factory" },
    { name: "Gestão da Qualidade", category: "Tecnólogo", duration: "2 Anos", icon: "verified" },
    { name: "Gestão da Segurança Privada", category: "Tecnólogo", duration: "2 Anos", icon: "security" },
    { name: "Gestão de Recursos Humanos", category: "Tecnólogo", duration: "2 Anos", icon: "groups" },
    { name: "Gestão do Agronegócio", category: "Tecnólogo", duration: "3 Anos", icon: "agriculture" },
    { name: "Gestão Financeira", category: "Tecnólogo", duration: "2 Anos", icon: "payments" },
    { name: "Gestão Hospitalar", category: "Tecnólogo", duration: "3 Anos", icon: "local_hospital" },
    { name: "Hotelaria", category: "Tecnólogo", duration: "2 Anos", icon: "hotel" },
    { name: "Investigação Forense e Perícia Criminal", category: "Tecnólogo", duration: "3 Anos", icon: "search" },
    { name: "Logística", category: "Tecnólogo", duration: "2 Anos", icon: "local_shipping" },
    { name: "Marketing", category: "Tecnólogo", duration: "2 Anos", icon: "trending_up" },
    { name: "Negócios Imobiliários", category: "Tecnólogo", duration: "2 Anos", icon: "real_estate_agent" },
    { name: "Podologia", category: "Tecnólogo", duration: "2 Anos", icon: "footprint" },
    { name: "Processos Gerenciais", category: "Tecnólogo", duration: "2 Anos", icon: "auto_fix_high" },
    { name: "Processos Jurídicos", category: "Tecnólogo", duration: "2 Anos", icon: "gavel" },
    { name: "Processos Químicos", category: "Tecnólogo", duration: "2 Anos", icon: "science" },
    { name: "Segurança da Informação", category: "Tecnólogo", duration: "2.5 Anos", icon: "lock_open" },
    { name: "Segurança do Trabalho", category: "Tecnólogo", duration: "3 Anos", icon: "engineering" },
    { name: "Segurança Pública", category: "Tecnólogo", duration: "2 Anos", icon: "policy" },
    { name: "Secretariado", category: "Tecnólogo", duration: "2 Anos", icon: "support_agent" },
    { name: "Sistemas para Internet", category: "Tecnólogo", duration: "2.5 Anos", icon: "language" },
    { name: "Estética e Cosmética", category: "Tecnólogo", duration: "2.5 Anos", icon: "face" },
    { name: "Terapias Integrativas e Complementares", category: "Tecnólogo", duration: "2 Anos", icon: "spa" },
    { name: "Radiologia", category: "Tecnólogo", duration: "3 Anos", icon: "radiology" },

    // Bacharelados
    { name: "Administração", category: "Bacharelado", duration: "4 Anos", icon: "school" },
    { name: "Arquitetura e Urbanismo", category: "Bacharelado", duration: "5 Anos", icon: "architecture" },
    { name: "Biomedicina", category: "Bacharelado", duration: "4 Anos", icon: "biotech" },
    { name: "Ciências Contábeis", category: "Bacharelado", duration: "4 Anos", icon: "account_balance" },
    { name: "Ciências Econômicas", category: "Bacharelado", duration: "4 Anos", icon: "trending_up" },
    { name: "Educação Física", category: "Bacharelado", duration: "4 Anos", icon: "fitness_center" },
    { name: "Engenharia Ambiental e Sanitária", category: "Bacharelado", duration: "5 Anos", icon: "compost" },
    { name: "Engenharia Civil", category: "Bacharelado", duration: "5 Anos", icon: "construction" },
    { name: "Engenharia da Computação", category: "Bacharelado", duration: "5 Anos", icon: "memory" },
    { name: "Engenharia de Software", category: "Bacharelado", duration: "4 Anos", icon: "terminal" },
    { name: "Engenharia de Produção", category: "Bacharelado", duration: "5 Anos", icon: "precision_manufacturing" },
    { name: "Engenharia Elétrica", category: "Bacharelado", duration: "5 Anos", icon: "bolt" },
    { name: "Engenharia Mecânica", category: "Bacharelado", duration: "5 Anos", icon: "settings" },
    { name: "Farmácia", category: "Bacharelado", duration: "5 Anos", icon: "medication" },
    { name: "Fisioterapia", category: "Bacharelado", duration: "5 Anos", icon: "personal_injury" },
    { name: "Fonoaudióloga", category: "Bacharelado", duration: "4 Anos", icon: "hearing" },
    { name: "Jornalismo", category: "Bacharelado", duration: "4 Anos", icon: "newspaper" },
    { name: "Nutrição", category: "Bacharelado", duration: "4 Anos", icon: "nutrition" },
    { name: "Psicopedagogia", category: "Bacharelado", duration: "4 Anos", icon: "psychology" },
    { name: "Publicidade e Propaganda", category: "Bacharelado", duration: "4 Anos", icon: "campaign" },
    { name: "Sistemas de Informação", category: "Bacharelado", duration: "4 Anos", icon: "devices" },
    { name: "Serviço Social", category: "Bacharelado", duration: "4 Anos", icon: "volunteer_activism" },
    { name: "Teologia", category: "Bacharelado", duration: "4 Anos", icon: "menu_book" },
    { name: "Terapia Ocupacional", category: "Bacharelado", duration: "4 Anos", icon: "accessibility" },

    // Licenciaturas
    { name: "Artes", category: "Licenciatura", duration: "4 Anos", icon: "brush" },
    { name: "Ciências Biológicas", category: "Licenciatura", duration: "4 Anos", icon: "biotech" },
    { name: "Educação Especial", category: "Licenciatura", duration: "4 Anos", icon: "diversity_3" },
    { name: "Educação Física", category: "Licenciatura", duration: "4 Anos", icon: "sports_and_outdoors" },
    { name: "Filosofia", category: "Licenciatura", duration: "4 Anos", icon: "lightbulb" },
    { name: "Geografia", category: "Licenciatura", duration: "4 Anos", icon: "map" },
    { name: "História", category: "Licenciatura", duration: "4 Anos", icon: "history_edu" },
    { name: "Letras Português / Inglês", category: "Licenciatura", duration: "4 Anos", icon: "language" },
    { name: "Letras Português / Libras", category: "Licenciatura", duration: "4 Anos", icon: "sign_language" },
    { name: "Matemática", category: "Licenciatura", duration: "4 Anos", icon: "calculate" },
    { name: "Música", category: "Licenciatura", duration: "4 Anos", icon: "music_note" },
    { name: "Pedagogia", category: "Licenciatura", duration: "4 Anos", icon: "menu_book" },
    { name: "Sociologia", category: "Licenciatura", duration: "4 Anos", icon: "groups_2" },

    // 2ª Graduação em 1 Ano
    { name: "Segunda Graduação em 1 Ano", category: "2grad", duration: "1 Ano", icon: "fast_forward" }
];

// Pagination Logic
let displayLimit = 9;
const initialLimit = 9;
let currentFilteredList = [];

// Intersection Observer for Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Render Function
function renderCourses(list) {
    const grid = document.getElementById('course-grid');
    const noResults = document.getElementById('no-results');
    const loadMoreContainer = document.getElementById('load-more-container');
    
    grid.innerHTML = '';

    if (list.length === 0) {
        noResults.classList.remove('hidden');
        loadMoreContainer.classList.add('hidden');
        return;
    }

    noResults.classList.add('hidden');
    
    // Check if we are on desktop to apply limit
    const isDesktop = window.innerWidth >= 768;
    const coursesToDisplay = isDesktop ? list.slice(0, displayLimit) : list;

    coursesToDisplay.forEach(course => {
        const card = document.createElement('div');
        card.className = "min-w-[85vw] md:min-w-0 snap-start py-8 px-2 md:px-0";
        card.innerHTML = `
            <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col h-full group transition-all duration-300">
                <div class="flex justify-between items-start mb-6">
                    <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-custom group-hover:bg-primary-custom group-hover:text-white transition-colors duration-500">
                        <span class="material-symbols-outlined text-3xl">${course.icon}</span>
                    </div>
                    <div class="flex flex-col gap-1 items-end">
                        <span class="bg-orange-50 text-primary-custom text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">70% OFF</span>
                        <span class="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Matrícula Grátis</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">${course.category}</span>
                    <h3 class="font-headline font-bold text-xl md:text-2xl text-slate-800 mb-2 leading-tight">${course.name}</h3>
                    <p class="text-slate-400 text-xs font-semibold flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">schedule</span>
                        Duração: ${course.duration}
                    </p>
                </div>
                <p class="text-slate-500 text-sm mb-8 line-clamp-2">Inicie sua carreira no Megapolo Unifatecie com o melhor suporte EAD.</p>
                <div class="mt-auto">
                    <a href="https://wa.me/5534998630055?text=${encodeURIComponent('Olá vim pelo site e gostaria de saber mais sobre o curso ' + course.name)}" target="_blank" class="w-full bg-white border border-slate-200 text-slate-700 py-3 md:py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-custom hover:text-white hover:border-primary-custom transition-all">
                        Falar com Consultor
                        <span class="material-symbols-outlined text-lg">chat</span>
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
        observer.observe(card);
    });

    // Handle Load More visibility
    if (isDesktop && list.length > displayLimit) {
        loadMoreContainer.classList.remove('hidden');
    } else {
        loadMoreContainer.classList.add('hidden');
    }
}

// Global Filtering Logic
let activeCategory = 'todos';
let searchQuery = '';

function filterAndRender() {
    currentFilteredList = allCourses.filter(course => {
        const matchesCategory = activeCategory === 'todos' || course.category === activeCategory;
        const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderCourses(currentFilteredList);
}

// Event Listeners
document.getElementById('course-search')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    displayLimit = initialLimit; // Reset limit on search
    filterAndRender();
});

document.querySelectorAll('.course-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.course-tab').forEach(t => {
            t.classList.remove('active', 'bg-primary-custom', 'text-white', 'shadow-lg', 'shadow-orange-500/20');
            t.classList.add('bg-slate-50', 'text-slate-500');
        });
        tab.classList.add('active', 'bg-primary-custom', 'text-white', 'shadow-lg', 'shadow-orange-500/20');
        tab.classList.remove('bg-slate-50', 'text-slate-500');

        activeCategory = tab.getAttribute('data-category');
        displayLimit = initialLimit; // Reset limit on tab change
        filterAndRender();
    });
});

document.getElementById('load-more-btn')?.addEventListener('click', () => {
    displayLimit += 9;
    renderCourses(currentFilteredList);
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn?.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenuBtn?.addEventListener('click', () => mobileMenu.classList.add('hidden'));

// Close mobile menu when any link inside it is clicked (including WhatsApp/External)
mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }

        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});

// Accordion/FAQ Logic
document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('.material-symbols-outlined');
        const item = trigger.parentElement;
        
        // Toggle current item
        const isOpen = !content.classList.contains('hidden');
        
        // Close all others
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-trigger .material-symbols-outlined').forEach(i => i.style.transform = 'rotate(0deg)');
        document.querySelectorAll('.faq-item').forEach(it => it.classList.remove('border-primary-custom', 'ring-1', 'ring-primary-custom'));
        
        if (!isOpen) {
            content.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
            item.classList.add('border-primary-custom', 'ring-1', 'ring-primary-custom');
        }
    });
});

// Initial Render and Observer Initialization
function init() {
    filterAndRender();

    // Observe all static fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

init();
