export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.tag": "Freelance Web Developer",
    "hero.headline": "Custom Web Solutions\nBuilt to Grow With You",
    "hero.sub":
      "I design and build modern web applications, e-commerce stores, and digital experiences for startups and businesses that need more than a template.",
    "hero.cta": "Start a Project",
    "hero.secondary": "View Services",

    // Services
    "services.title": "What I Build",
    "services.sub": "From bespoke applications to performant storefronts — tailored to your goals.",
    "services.custom.title": "Custom Web Development",
    "services.custom.desc": "Fully bespoke websites and web systems built from scratch. Clean code, great performance, zero bloat.",
    "services.custom.badge": "Core service",
    "services.apps.title": "Web Apps & PWA / SaaS",
    "services.apps.desc": "Interactive web applications, dashboards, and SaaS products with modern frameworks and solid architecture.",
    "services.ecom.title": "E-commerce",
    "services.ecom.desc": "Custom storefronts and headless commerce solutions built for conversion and scalability.",
    "services.wp.title": "WordPress & WooCommerce",
    "services.wp.desc": "Theme customisation, plugin development, and WooCommerce stores when the project calls for it.",

    // About
    "about.title": "About Me",
    "about.p1":
      "I'm a full-stack web developer behind dzf soft, focused on delivering high-quality, tailor-made web solutions. I work closely with clients — from early-stage startups to growing businesses — to turn ideas into fast, reliable, and beautiful products.",
    "about.p2":
      "My stack centres around modern JavaScript (TypeScript, React, Astro, Node.js) and I take performance, accessibility, and clean code seriously. No cookie-cutter solutions — every project gets the attention it deserves.",
    "about.cta": "Let's work together →",

    // CTA section
    "cta.title": "Ready to Build Something Great?",
    "cta.sub": "Tell me about your project and let's figure out the best path forward together.",
    "cta.btn": "Get in Touch",

    // Contact page
    "contact.title": "Get in Touch",
    "contact.sub": "Have a project in mind? Drop me a message and I'll get back to you as soon as possible.",
    "contact.name": "Full Name",
    "contact.name.placeholder": "Jane Smith",
    "contact.email": "Email Address",
    "contact.email.placeholder": "jane@example.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell me about your project, goals, or any questions you have…",
    "contact.send": "Send Message",
    "contact.success": "Message sent! I'll be in touch soon.",
    "contact.error": "Something went wrong. Please try again.",
    "contact.required": "This field is required.",
    "contact.email.invalid": "Please enter a valid email address.",

    // Footer
    "footer.tagline": "Building the web, one project at a time.",
    "footer.rights": "All rights reserved.",
  },

  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.tag": "Desarrollador Web Freelance",
    "hero.headline": "Soluciones Web a Medida\nQue Crecen Contigo",
    "hero.sub":
      "Diseño y construyo aplicaciones web modernas, tiendas en línea y experiencias digitales para startups y empresas que necesitan más que una plantilla.",
    "hero.cta": "Iniciar un Proyecto",
    "hero.secondary": "Ver Servicios",

    // Services
    "services.title": "Qué Construyo",
    "services.sub": "Desde aplicaciones a medida hasta tiendas de alto rendimiento — adaptadas a tus objetivos.",
    "services.custom.title": "Desarrollo Web a Medida",
    "services.custom.desc":
      "Sitios web y sistemas web completamente personalizados, construidos desde cero. Código limpio, gran rendimiento, sin relleno.",
    "services.custom.badge": "Servicio principal",
    "services.apps.title": "Aplicaciones Web & PWA / SaaS",
    "services.apps.desc": "Aplicaciones web interactivas, dashboards y productos SaaS con frameworks modernos y arquitectura sólida.",
    "services.ecom.title": "E-commerce",
    "services.ecom.desc": "Tiendas personalizadas y soluciones de comercio headless orientadas a la conversión y la escalabilidad.",
    "services.wp.title": "WordPress & WooCommerce",
    "services.wp.desc": "Personalización de temas, desarrollo de plugins y tiendas WooCommerce cuando el proyecto lo requiere.",

    // About
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy un desarrollador web full-stack detrás de dzf soft, enfocado en entregar soluciones web de alta calidad y hechas a medida. Trabajo de cerca con clientes — desde startups en etapa temprana hasta negocios en crecimiento — para convertir ideas en productos rápidos, confiables y atractivos.",
    "about.p2":
      "Mi stack se centra en JavaScript moderno (TypeScript, React, Astro, Node.js) y me tomo en serio el rendimiento, la accesibilidad y el código limpio. Sin soluciones genéricas — cada proyecto recibe la atención que merece.",
    "about.cta": "Trabajemos juntos →",

    // CTA section
    "cta.title": "¿Listo para Construir Algo Genial?",
    "cta.sub": "Cuéntame sobre tu proyecto y encontremos juntos el mejor camino a seguir.",
    "cta.btn": "Contáctame",

    // Contact page
    "contact.title": "Contáctame",
    "contact.sub": "¿Tienes un proyecto en mente? Envíame un mensaje y te responderé a la brevedad.",
    "contact.name": "Nombre Completo",
    "contact.name.placeholder": "Ana García",
    "contact.email": "Correo Electrónico",
    "contact.email.placeholder": "ana@ejemplo.com",
    "contact.message": "Mensaje",
    "contact.message.placeholder": "Cuéntame sobre tu proyecto, objetivos o cualquier pregunta que tengas…",
    "contact.send": "Enviar Mensaje",
    "contact.success": "¡Mensaje enviado! Me pondré en contacto pronto.",
    "contact.error": "Algo salió mal. Por favor intenta de nuevo.",
    "contact.required": "Este campo es obligatorio.",
    "contact.email.invalid": "Por favor ingresa un correo válido.",

    // Footer
    "footer.tagline": "Construyendo la web, un proyecto a la vez.",
    "footer.rights": "Todos los derechos reservados.",
  },
} as const;
