/* Showcase locale layer: when <html dir="rtl">, swap English copy for Arabic.
   Runs before showcase.js so headline splitting sees the final text. Strings not
   listed stay English; bidi isolation in the tokens keeps them readable. */
(() => {
  const html = document.documentElement;
  const btn = document.getElementById('dir-toggle');
  if (btn) {
    const rtl = html.getAttribute('dir') === 'rtl';
    btn.textContent = rtl ? 'English' : 'العربية';
    btn.setAttribute('aria-label', rtl ? 'Switch to English, left to right' : 'التبديل إلى العربية، من اليمين إلى اليسار');
    btn.setAttribute('lang', rtl ? 'en' : 'ar');
    btn.addEventListener('click', () => {
      try {
        localStorage.setItem('cory-dir', rtl ? 'ltr' : 'rtl');
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        sessionStorage.setItem('cory-dir-switch', String(scrollY / max));
      } catch (e) {}
      document.documentElement.style.transition = 'opacity 160ms ease';
      document.documentElement.style.opacity = '0';
      setTimeout(() => location.reload(), 160);
    });
  }
  if (html.getAttribute('dir') !== 'rtl') return;
  const AR = {
    'Color': 'الألوان', 'Type': 'الخطوط', 'Components': 'المكوّنات', 'Voice': 'الأسلوب', 'Guide': 'الدليل',
    'Explore templates': 'استكشف القوالب', 'Cory': 'كوري', '● Online': '● متصل', 'Contact rate': 'معدل التواصل',
    '⚡ <60s response': '⚡ استجابة في أقل من 60 ثانية', 'Engagement': 'التفاعل',
    'AgentCory Design System · v1': 'نظام تصميم AgentCory · الإصدار 1',
    'A design system': 'نظام تصميم', 'with a': 'له', 'voice.': 'صوت.',
    'Every token, component, and template behind Cory, the AI admissions assistant that answers in under 60 seconds. Built to ship, ready to copy.': 'كل رمز ومكوّن وقالب يقف خلف كوري، مساعد القبول الذكي الذي يجيب في أقل من 60 ثانية. جاهز للإطلاق والنسخ.',
    'Explore the templates': 'استكشف القوالب', 'Meet the components': 'تعرّف على المكوّنات',
    'Response time': 'وقت الاستجابة', 'Avg. ROI': 'متوسط العائد', 'Hours saved': 'ساعات موفّرة', 'scroll': 'مرّر',
    'Foundations · Color': 'الأساسيات · الألوان', 'Navy ink.': 'حبر كحلي.', 'Signal gradient.': 'تدرّج الإشارة.',
    'A two-part identity: deep navy for the words that ground you, a blue→cyan sweep for the moments that move you. Cool slate neutrals on an off-white surface.': 'هوية من جزأين: كحلي عميق للكلمات التي تمنحك الثبات، وتدرّج من الأزرق إلى السماوي للّحظات التي تحرّكك. ألوان رمادية هادئة على سطح فاتح.',
    'Ink': 'الحبر', 'Signal start': 'بداية الإشارة', 'Signal end': 'نهاية الإشارة', 'The gradient': 'التدرّج', 'Positive': 'إيجابي', 'Neutral': 'محايد',
    'Foundations · Typography': 'الأساسيات · الطباعة', 'Friendly, geometric,': 'ودود، هندسي،', 'extrabold.': 'وعريض.',
    'One family across the whole brand, JetBrains Mono for the numbers that do the talking. Display weights run heavy with tight tracking.': 'عائلة خط واحدة للعلامة كلها، مع خط IBM Plex Sans Arabic للنص العربي وخط JetBrains Mono للأرقام. أوزان العناوين ثقيلة وواضحة.',
    'Boost admissions': 'عزّز القبول', 'Why teams choose Cory': 'لماذا تختار الفرق كوري',
    'Meet prospects where they are, voice, SMS, email, and chat.': 'قابل المتقدمين حيث هم: اتصال ورسائل وبريد ومحادثة.',
    'The kit': 'المجموعة', 'Twenty-nine components,': 'تسعة وعشرون مكوّناً،', 'zero guesswork.': 'بلا تخمين.',
    'Pill buttons, soft corners, navy-tinted shadows. Every piece ships as a ready-to-import React component; six of them are previewed here.': 'أزرار مستديرة، زوايا ناعمة، وظلال بلمسة كحلية. كل قطعة مكوّن React جاهز للاستيراد.',
    'Button': 'الزر', 'Badge': 'الشارة', 'StatCard': 'بطاقة الإحصاء', 'ChatBubble': 'فقاعة المحادثة', 'Input': 'حقل الإدخال', 'Avatar': 'الصورة الرمزية',
    'Book My Demo': 'احجز عرضي التوضيحي', 'Try Cory Now': 'جرّب كوري الآن', '⚡ <60s Response': '⚡ استجابة فورية',
    '+54% yield': 'تسجيل أعلى بنسبة 54%', 'New': 'جديد', 'AI-Powered': 'بالذكاء الاصطناعي', '▲ from 40%': '▲ من 40%',
    "Hi, I'm Cory 👋 Ready to see what I can do?": 'مرحباً، أنا كوري 👋 هل أنت مستعد لترى ما يمكنني فعله؟',
    'Show me the fall deadlines': 'أرني مواعيد التقديم للخريف', 'Focus me, blue ring, soft glow.': 'ركّز هنا: حلقة زرقاء وتوهّج ناعم.', '● Always on': '● متاح دائماً',
    'Templates': 'القوالب', 'Four starting points,': 'أربع نقاط انطلاق،', 'ready to copy.': 'جاهزة للنسخ.',
    'Previews of four of the twenty-five templates, every one built entirely from the system you just scrolled through.': 'معاينات لأربعة قوالب، وكل قالب مبني بالكامل من النظام الذي تصفحته للتو.',
    'Landing Page': 'الصفحة الرئيسية', 'Full marketing homepage, hero to footer': 'صفحة تسويقية كاملة من الواجهة إلى التذييل', 'Open': 'افتح',
    'Pitch Deck': 'عرض تقديمي', '6-slide 16:9 sales deck': 'عرض مبيعات من 6 شرائح بمقاس 16:9', 'One-Pager': 'صفحة واحدة',
    'Printable Letter-size overview': 'ملخص قابل للطباعة بمقاس Letter', 'Outreach Email': 'بريد التواصل', '600px marketing email from Cory': 'بريد تسويقي بعرض 600px من كوري',
    'Brand voice': 'صوت العلامة', 'Cory speaks in': 'كوري يتحدث', 'first person.': 'بصيغة المتكلم.',
    'The defining trait of the brand. Section labels talk': 'السمة المميزة للعلامة. عناوين الأقسام تتحدث', 'about': 'عن',
    'Cory; CTAs and conversation come': 'كوري، أما الدعوات للإجراء والمحادثة فتأتي', 'from': 'من',
    'Cory. Confident, benefit-led, warm, and always quantified.': 'كوري. واثق، يركّز على الفائدة، دافئ، ومدعوم بالأرقام دائماً.',
    '"I", never "it"': '«أنا»، لا «هو»', '"Ready to see what I can do for your admissions team?"': '«هل أنت مستعد لترى ما يمكنني فعله لفريق القبول لديك؟»',
    'Numbers do the talking': 'الأرقام تتحدث', 'Lead with the figure: <60s, 94%, 10x, $2.4M.': 'ابدأ بالرقم: أقل من 60 ثانية، 94%، 10 أضعاف، 2.4 مليون دولار.',
    '"You", not "we"': '«أنت»، لا «نحن»', 'Copy centers your team, your counselors, your yield.': 'النص يتمحور حول فريقك ومستشاريك ونتائجك.',
    "Hi, I'm Cory 👋 Ready to see what I can do for your admissions team?": 'مرحباً، أنا كوري 👋 هل أنت مستعد لترى ما يمكنني فعله لفريق القبول لديك؟',
    "We're losing inquiries after hours.": 'نخسر الاستفسارات بعد ساعات العمل.',
    'Not anymore. I answer every inquiry in under 60 seconds, call, text, chat, or email. Want me to call you and show you?': 'ليس بعد الآن. أجيب على كل استفسار في أقل من 60 ثانية، بالاتصال أو الرسائل أو المحادثة أو البريد. هل تريد أن أتصل بك لأريك؟',
    'Strike while the iron is hot. ⚡': 'اغتنم الفرصة وهي سانحة. ⚡',
    'Open source of truth': 'مرجع واحد للحقيقة', "Build your next surface with Cory's system.": 'ابنِ واجهتك القادمة بنظام كوري.',
    'Tokens, components, guidelines, and four copy-ready templates, everything in one place, consistent by default.': 'الرموز والمكوّنات والإرشادات وأربعة قوالب جاهزة، كل شيء في مكان واحد ومتّسق افتراضياً.',
    'Start from a template': 'ابدأ من قالب', 'Review the foundations': 'راجع الأساسيات', 'NotebookLM how-to guide': 'دليل NotebookLM',
    'AgentCory Design System · a Colaberry product': 'نظام تصميم AgentCory · منتج من Colaberry',
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const hits = [];
  let n; while ((n = walker.nextNode())) {
    const p = n.parentElement; if (!p || p.closest('script,style,.marquee,code,.mono,small.no-i18n')) continue;
    const raw = n.textContent, key = raw.replace(/\s+/g, ' ').trim();
    if (AR[key]) hits.push([n, (raw.match(/^\s*/)[0]) + AR[key] + (raw.match(/\s*$/)[0])]);
  }
  hits.forEach(([node, text]) => { node.textContent = text; });
  document.title = 'نظام تصميم AgentCory، العرض';
})();
