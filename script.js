const invite = {
  groom: {
    uz: "Farrux",
    ru: "Фаррух",
  },
  bride: {
    uz: "Gulmira",
    ru: "Гульмира",
  },
  dateTime: "2026-07-07T18:00:00+05:00",
  venue: {
    uz: "Shoxona restorani",
    ru: "Shoxona restorani",
  },
  venueType: {
    uz: "Restoran",
    ru: "Ресторан",
  },
  address: {
    uz: "Manzil: 439C+76Q, M-34, Yangiyo'l, Toshkent viloyati, O'zbekiston",
    ru: "Адрес: 439C+76Q, M-34, Янгиюль, Ташкентская область, Узбекистан",
  },
  mapUrl:
    "https://www.google.com/maps/place//data=!4m2!3m1!1s0x38ae7bffb15a5365:0x7011b9db17a0830?entry=s&sa=X&ved=2ahUKEwjioK-0xdOUAxVL0gIHHWGzAL4Q4kB6BAgVEAA&hl=ru&g_ep=Eg1tbF8yMDI2MDUyMF8wIOC7DCoASAJQAg%3D%3D",
  yandexUrl: "https://yandex.com/maps/?ll=69.0705289%2C41.1181339&z=17&text=Shoxona%20restorani",
  gift: {
    uz: {
      receiver: "Farrux",
      cardNumber: "8600 0000 0000 0000",
    },
    ru: {
      receiver: "Гульмира",
      cardNumber: "9860 0000 0000 0000",
    },
  },
  whatsappPhone: "998901234567",
};

const translations = {
  uz: {
    pageTitle: "Farrux & Gulmira | Taklifnoma",
    lockKicker: "Maxsus taklifnoma",
    lockTitle: "Sizga taklifnoma keldi",
    lockText:
      "Qulfni oching va to'y oqshomimizga bag'ishlangan taklifnomani ko'ring.",
    openInvite: "Qulfni ochish",
    introKicker: "To'y taklifnomasi",
    and: "va",
    introText:
      "Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz.",
    swipe: "Pastga suring",
    calendarLead:
      "Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz.",
    calendarButton: "Kalendarga qo'shish",
    next: "Keyingisi",
    countDays: "kun",
    countHours: "soat",
    countMinutes: "daq",
    countSeconds: "soniya",
    countdownPhrase: "Baxtli kunimizgacha qoldi",
    venueType: "Restoran",
    timeLabel: "Vaqti:",
    replyTitle: "Kelishingizni bildiring",
    nameLabel: "Ismingiz",
    guestLabel: "Mehmonlar soni",
    giftTitle: "To'yona",
    giftText: "Istasangiz, to'yonani karta orqali yuborishingiz mumkin.",
    giftReceiverLabel: "Qabul qiluvchi",
    giftCardLabel: "Karta raqami",
    giftCopyButton: "Karta raqamini nusxalash",
    giftCopied: "Karta raqami nusxalandi",
    musicOn: "Musiqani yoqish",
    musicOff: "Musiqani o'chirish",
    months: [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentabr",
      "oktabr",
      "noyabr",
      "dekabr",
    ],
    weekdays: ["Du", "Se", "Chor", "Pay", "Ju", "Sha", "Ya"],
    whatsapp: {
      title: "To'y taklifnomasiga javob:",
      name: "Ism",
      guests: "Mehmonlar soni",
      status: "Kelaman",
    },
  },
  ru: {
    pageTitle: "Фаррух & Гульмира | Приглашение",
    lockKicker: "Особое приглашение",
    lockTitle: "Вам пришло приглашение",
    lockText:
      "Откройте замок и посмотрите приглашение на наш свадебный вечер.",
    openInvite: "Открыть замок",
    introKicker: "Свадебное приглашение",
    and: "и",
    introText:
      "Будем с радостью ждать вас среди дорогих гостей в наш счастливый день.",
    swipe: "Листайте вниз",
    calendarLead:
      "Будем с радостью ждать вас среди дорогих гостей в наш счастливый день.",
    calendarButton: "Добавить в календарь",
    next: "Далее",
    countDays: "дней",
    countHours: "час",
    countMinutes: "мин",
    countSeconds: "сек",
    countdownPhrase: "До нашего счастливого дня",
    venueType: "Ресторан",
    timeLabel: "Время:",
    replyTitle: "Подтвердите участие",
    nameLabel: "Ваше имя",
    guestLabel: "Количество гостей",
    giftTitle: "Подарок",
    giftText: "При желании вы можете отправить подарок на карту.",
    giftReceiverLabel: "Получатель",
    giftCardLabel: "Номер карты",
    giftCopyButton: "Скопировать номер карты",
    giftCopied: "Номер карты скопирован",
    musicOn: "Включить музыку",
    musicOff: "Выключить музыку",
    months: [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ],
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    whatsapp: {
      title: "Ответ на свадебное приглашение:",
      name: "Имя",
      guests: "Количество гостей",
      status: "Приду",
    },
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const weddingDate = new Date(invite.dateTime);
let currentLang = "uz";
let currentStep = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function numericDate() {
  return `${pad(weddingDate.getDate())}.${pad(
    weddingDate.getMonth() + 1,
  )}.${weddingDate.getFullYear()}`;
}

function text(key) {
  return translations[currentLang][key];
}

function updateLanguageButtons() {
  $$("[data-lang-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langButton === currentLang);
  });

  $$(".mini-langs").forEach((group) => {
    const [ru, uz] = group.querySelectorAll("span");
    ru.classList.toggle("is-active", currentLang === "ru");
    uz.classList.toggle("is-active", currentLang === "uz");
  });
}

function updateText() {
  document.documentElement.lang = currentLang;
  document.title = text("pageTitle");

  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[currentLang][key]) {
      node.textContent = translations[currentLang][key];
    }
  });

  $$("[data-name='groom']").forEach((node) => {
    node.textContent = invite.groom[currentLang];
  });
  $$("[data-name='bride']").forEach((node) => {
    node.textContent = invite.bride[currentLang];
  });

  $("#venueTitle").firstChild.textContent = `${invite.venue[currentLang]} `;
  $("#venueAddress").textContent = invite.address[currentLang];
  $("#venueTime").textContent = `${pad(weddingDate.getHours())}:${pad(
    weddingDate.getMinutes(),
  )}`;
  $("#weddingDay").textContent = pad(weddingDate.getDate());
  $("#weddingDateText").textContent = `${translations[currentLang].months[
    weddingDate.getMonth()
  ]}, ${pad(weddingDate.getHours())}:${pad(weddingDate.getMinutes())}`;
  $("#yandexLink").textContent =
    currentLang === "uz" ? "Yandex xaritasi" : "Яндекс Карты";
  $("#googleLink").textContent = "Google Maps";
  $("#giftReceiver").textContent = invite.gift[currentLang].receiver;
  $("#giftCardNumber").textContent = invite.gift[currentLang].cardNumber;
  $("#giftCopyButton").setAttribute("aria-label", text("giftCopyButton"));
  $("#copyNote").textContent = "";
  $("#musicToggle").setAttribute("aria-label", musicEnabled ? text("musicOff") : text("musicOn"));
  renderCalendar();
  updateLanguageButtons();
  updateCountdown();
}

function setupLanguage() {
  $$("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.langButton;
      updateText();
    });
  });
}

function renderCalendar() {
  const grid = $("#calendarGrid");
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const labels = translations[currentLang].weekdays;
  const cells = [];

  labels.forEach((label) => {
    cells.push(`<span class="weekday">${label}</span>`);
  });

  for (let index = 0; index < firstWeekday; index += 1) {
    cells.push('<span class="muted"></span>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const selected = day === weddingDate.getDate() ? " selected" : "";
    cells.push(`<span class="${selected.trim()}">${day}</span>`);
  }

  grid.innerHTML = cells.join("");
  $("#calendarTitle").textContent = `${translations[currentLang].months[month]} ${year}`;
}

function setupOpening() {
  $("#openInvite").addEventListener("click", () => {
    $("#lockScreen").classList.add("is-hidden");
    $("#storyApp").classList.add("is-active");
    $("#storyApp").setAttribute("aria-hidden", "false");
    document.body.classList.remove("is-locked");
    startMusic();
  });
}

function updateProgress(step) {
  currentStep = step;
  $$(".progress span").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === step);
    dot.classList.toggle("is-done", index < step);
  });
}

function setupSlides() {
  const slides = $("#slides");
  const panels = $$(".story-panel");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateProgress(Number(entry.target.dataset.step));
          }
        });
      },
      { root: slides, threshold: 0.62 },
    );

    panels.forEach((panel) => observer.observe(panel));
  }

  $$("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentPanel = button.closest(".story-panel");
      const currentIndex = panels.indexOf(currentPanel);
      const step = currentIndex >= 0 ? currentIndex : currentStep;
      const nextPanel = panels[Math.min(step + 1, panels.length - 1)];

      slides.scrollTo({
        top: nextPanel.offsetTop,
        behavior: "smooth",
      });
    });
  });
}

function updateCountdown() {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / 1000);
  const values = { days, hours, minutes, seconds };

  Object.entries(values).forEach(([key, value]) => {
    $$(`[data-countdown-value="${key}"]`).forEach((node) => {
      node.textContent = key === "days" ? String(value) : pad(value);
    });
  });
}

function setupCountdown() {
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

let audioContext;
let masterGain;
let musicTimer;
let musicEnabled = false;

function playNote(frequency, startAt, duration) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, startAt);
  gain.gain.linearRampToValueAtTime(0.11, startAt + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.04);
}

function scheduleMusic() {
  if (!audioContext || !musicEnabled) {
    return;
  }

  const now = audioContext.currentTime;
  const notes = [392, 493.88, 587.33, 659.25, 587.33, 493.88];

  notes.forEach((note, index) => {
    playNote(note, now + index * 0.44, 0.72);
  });
}

function startMusic() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;

  if (!AudioCtor) {
    return;
  }

  if (!audioContext) {
    audioContext = new AudioCtor();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.08;
    masterGain.connect(audioContext.destination);
  }

  audioContext.resume();
  musicEnabled = true;
  window.clearInterval(musicTimer);
  scheduleMusic();
  musicTimer = window.setInterval(scheduleMusic, 2800);
  $("#musicToggle").classList.add("is-playing");
  $("#musicToggle").setAttribute("aria-pressed", "true");
  $("#musicToggle").setAttribute("aria-label", text("musicOff"));
}

function stopMusic() {
  musicEnabled = false;
  window.clearInterval(musicTimer);
  $("#musicToggle").classList.remove("is-playing");
  $("#musicToggle").setAttribute("aria-pressed", "false");
  $("#musicToggle").setAttribute("aria-label", text("musicOn"));
}

function setupMusic() {
  $("#musicToggle").addEventListener("click", () => {
    if (musicEnabled) {
      stopMusic();
    } else {
      startMusic();
    }
  });
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function setupCalendarButton() {
  $("#calendarButton").addEventListener("click", () => {
    const endDate = new Date(weddingDate.getTime() + 4 * 60 * 60 * 1000);
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding Invitation//UZ//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}-${invite.groom.uz}-${invite.bride.uz}@wedding-invitation`,
      `DTSTAMP:${formatIcsDate(new Date())}`,
      `DTSTART:${formatIcsDate(weddingDate)}`,
      `DTEND:${formatIcsDate(endDate)}`,
      `SUMMARY:${invite.groom[currentLang]} ${text("and")} ${invite.bride[currentLang]}`,
      `LOCATION:${invite.venue[currentLang]}, ${invite.address[currentLang]}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "wedding-invitation.ics";
    link.click();
    URL.revokeObjectURL(url);
  });
}

function setupLinks() {
  $("#googleLink").href = invite.mapUrl;
  $("#yandexLink").href = invite.yandexUrl;
}

function setupGiftCard() {
  $("#giftCopyButton").addEventListener("click", async () => {
    const cardNumber = invite.gift[currentLang].cardNumber;

    try {
      await navigator.clipboard.writeText(cardNumber.replace(/\s/g, ""));
    } catch (error) {
      const textarea = document.createElement("textarea");
      textarea.value = cardNumber.replace(/\s/g, "");
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    $("#copyNote").textContent = text("giftCopied");
  });
}

function setupWhatsapp() {
  $("#whatsappButton").addEventListener("click", () => {
    const name = $("#guestName").value.trim();
    const guests = $("#guestCount").value;
    const message = [
      translations[currentLang].whatsapp.title,
      `${translations[currentLang].whatsapp.name}: ${name || "-"}`,
      `${translations[currentLang].whatsapp.guests}: ${guests}`,
      `${translations[currentLang].whatsapp.status}`,
    ].join("\n");

    window.open(
      `https://wa.me/${invite.whatsappPhone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noreferrer",
    );
  });
}

setupLanguage();
setupOpening();
setupSlides();
setupMusic();
setupCountdown();
setupCalendarButton();
setupLinks();
setupGiftCard();
setupWhatsapp();
updateText();
