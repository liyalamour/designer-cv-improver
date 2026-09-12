const templates = {
  'zh-Hant': {
    eyebrow: '六種履歷版型',
    title: '依你的經歷，選擇最適合的呈現方式。',
    lede: '每次視覺優化都會先提供至少兩個真正不同的方向，再由你選擇要延伸的版本。',
    cards: [
      ['專業經歷型', '工作經歷完整的產品、UX 與資深設計師。以職涯影響力為重心。', 'Professional Experience'],
      ['資深觀點型', '有清楚定位與敘事主軸的資深設計師或設計主管。', 'Senior Editorial'],
      ['成果證據型', '專案、實習、獎項或社群經驗多；以具體證據呈現能力。', 'Evidence-led'],
      ['作品集創意型', '學生、早期職涯、視覺或品牌設計師；讓作品與創意成為視覺焦點。', 'Portfolio Creative'],
      ['產品系統型', 'UX/UI、互動設計與設計系統背景；凸顯方法、工具與系統能力。', 'Product Systems'],
      ['ATS 求職平台型', '需要透過招募平台投遞，或把解析正確性放在第一優先。', 'ATS-safe Linear']
    ]
  },
  en: {
    eyebrow: 'Six CV templates',
    title: 'Choose a format that fits the evidence you have.',
    lede: 'Every visual upgrade starts with at least two genuinely different directions, then you choose which version to refine.',
    cards: [
      ['Professional Experience', 'For established product, UX, and senior designers. Puts career impact first.', '專業經歷型'],
      ['Senior Editorial', 'For senior designers and leaders with a clear point of view and narrative.', '資深觀點型'],
      ['Evidence-led', 'For project-, internship-, award-, or community-rich experience. Makes proof easy to scan.', '成果證據型'],
      ['Portfolio Creative', 'For students, early-career, visual, and brand designers. Brings projects and craft forward.', '作品集創意型'],
      ['Product Systems', 'For UX/UI, interaction, and design-system depth. Highlights methods, tools, and systems.', '產品系統型'],
      ['ATS-safe Linear', 'For application portals or parsing reliability as the top priority.', 'ATS 求職平台型']
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const copy = templates[document.documentElement.lang] || templates.en;
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'templates';
  section.innerHTML = `<div class="template-intro"><div class="eyebrow">${copy.eyebrow}</div><h2>${copy.title}</h2><p class="lede" style="font-size:16px">${copy.lede}</p></div><div class="template-grid">${copy.cards.map(([name, description, label]) => `<article class="template-card"><h3>${name}</h3><p>${description}</p><small>${label}</small></article>`).join('')}</div>`;
  document.querySelector('#install').before(section);
});
