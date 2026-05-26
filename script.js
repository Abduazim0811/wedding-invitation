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
      cardNumber: "9860 6067 4325 0932",
    },
    ru: {
      receiver: "Гульмира",
      cardNumber: "2202205385544959",
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
    familyMessageTitle: "Azizlarim, eng yaqin insonlarim!",
    familyMessage:
      "Qalbimizning eng go‘zal, eng yorug‘ lahzasida sizlarni yonimizda his qilish — biz uchun katta baxt. Shu muborak kunda sizning duolaringiz, tabassumingiz va mehr-muhabbatingiz bizga eng kuchli tayanch bo‘ladi.\n\nSizni unutilmas lahzalarga taklif qilamiz. Yiroqda bo‘lsangiz ham qalbimiz siz bilan — shuning uchun bu taklifnoma sizga yetib kelishini juda istardik.\n\nIltimos, taklifnomani ko‘rib chiqing va kelish imkoniyatingiz haqida bizga xabar bering.\n\nSizni kutib qolamiz — sevgi va hurmat bilan.",
    familySignature: "Yakubjanovlar oilasi",
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
    familyMessageTitle: "Дорогие наши, самые близкие нам люди!",
    familyMessage:
      "В самый прекрасный и светлый момент нашей жизни чувствовать вас рядом - большое счастье для нас. В этот благословенный день ваши молитвы, улыбки и любовь станут для нас самой сильной поддержкой.\n\nМы приглашаем вас разделить с нами незабываемые мгновения. Даже если вы далеко, наши сердца рядом с вами - поэтому нам очень хотелось, чтобы это приглашение дошло до вас.\n\nПожалуйста, просмотрите приглашение и сообщите нам, сможете ли вы прийти.\n\nБудем ждать вас - с любовью и уважением.",
    familySignature: "Семья Якубжановых",
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

const musicBeat = 0.48;
const musicLoopSeconds = musicBeat * 20;
const melodyNotes = [
  { frequency: 392, beat: 0, duration: 1.6 },
  { frequency: 493.88, beat: 2, duration: 1 },
  { frequency: 523.25, beat: 3, duration: 1 },
  { frequency: 587.33, beat: 4, duration: 1.6 },
  { frequency: 659.25, beat: 6, duration: 1 },
  { frequency: 587.33, beat: 7, duration: 1 },
  { frequency: 523.25, beat: 8, duration: 1.4 },
  { frequency: 493.88, beat: 10, duration: 1.4 },
  { frequency: 440, beat: 12, duration: 1 },
  { frequency: 493.88, beat: 13, duration: 1 },
  { frequency: 523.25, beat: 14, duration: 1.4 },
  { frequency: 392, beat: 16, duration: 2.4 },
];
const harmonyNotes = [
  { frequencies: [196, 246.94, 293.66], beat: 0, duration: 3.5 },
  { frequencies: [174.61, 261.63, 329.63], beat: 4, duration: 3.5 },
  { frequencies: [196, 261.63, 329.63], beat: 8, duration: 3.5 },
  { frequencies: [220, 293.66, 369.99], beat: 12, duration: 3.5 },
  { frequencies: [196, 246.94, 293.66], beat: 16, duration: 3.5 },
];

function playNote(frequency, startAt, duration, volume = 0.08, type = "sine") {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.linearRampToValueAtTime(volume, startAt + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.04);
}

function playChord(frequencies, startAt, duration) {
  frequencies.forEach((frequency, index) => {
    playNote(frequency, startAt + index * 0.015, duration, 0.025, "triangle");
  });
}

function scheduleMusic() {
  if (!audioContext || !musicEnabled) {
    return;
  }

  const now = audioContext.currentTime + 0.04;

  harmonyNotes.forEach((note) => {
    playChord(note.frequencies, now + note.beat * musicBeat, note.duration * musicBeat);
  });
  melodyNotes.forEach((note) => {
    playNote(note.frequency, now + note.beat * musicBeat, note.duration * musicBeat, 0.07);
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
    masterGain.gain.value = 0.11;
    masterGain.connect(audioContext.destination);
  }

  audioContext.resume();
  musicEnabled = true;
  window.clearInterval(musicTimer);
  scheduleMusic();
  musicTimer = window.setInterval(scheduleMusic, musicLoopSeconds * 1000);
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
