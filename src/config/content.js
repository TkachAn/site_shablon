export const content = {
  header: {
    logo: "LendSha",
    ctaText: "Оставить заявку",
  },
  hero: {
    title: "Инновационное решение для вашего бизнеса",
    description: "Наш продукт поможет вам автоматизировать процессы и увеличить прибыль уже в первый месяц использования.",
    ctaText: "Купить",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
  },
  features: [
    {
      id: 1,
      title: "Быстрая настройка",
      description: "Запуск за 5 минут без программиста.",
      icon: "Zap",
    },
    {
      id: 2,
      title: "Аналитика",
      description: "Полный контроль над всеми метриками.",
      icon: "BarChart",
    },
    {
      id: 3,
      title: "Поддержка 24/7",
      description: "Мы всегда на связи, чтобы помочь вам.",
      icon: "ShieldCheck",
    },
  ],
  gallery: [
    { type: "image", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", alt: "Workspace" },
    { type: "video", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg", alt: "Intro Video" },
    { type: "image", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", alt: "Code" },
    { type: "image", url: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80", alt: "Hardware" },
    { type: "image", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", alt: "Team" },
    { type: "image", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", alt: "Global" },
  ],
  steps: [
    { id: 1, title: "Заявка", description: "Оставьте заявку на сайте.", icon: "ClipboardCheck" },
    { id: 2, title: "Консультация", description: "Мы перезвоним вам для уточнения деталей.", icon: "PhoneCall" },
    { id: 3, title: "Оплата", description: "Удобные способы оплаты.", icon: "CreditCard" },
    { id: 4, title: "Получение", description: "Ваш заказ готов к использованию.", icon: "Truck" },
  ],
  products: {
    main: {
      id: "main-prod",
      name: "Основной тариф Профессионал",
      price: 15000,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80",
    },
    upsell: {
      id: "upsell-prod",
      name: "Дополнительный модуль Аналитика+",
      price: 5000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=300&q=80",
    },
  },
  footer: {
    copyright: "© 2026 LendSha. Все права защищены.",
    socials: [
      { name: "Telegram", url: "#" },
      { name: "VK", url: "#" },
    ],
  },
};
