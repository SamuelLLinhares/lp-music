 $(document).ready(function () {
  const startDate = new Date("2025-08-07");
  const endDate = new Date("2025-12-05");
  const calendarWrapper = $("#calendarWrapper");
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  let current = new Date(startDate);
  let lessonsByMonth = {};

  let lessonNumber = 1;
  function formatDateISO(date) {
    return date.toISOString().split("T")[0];
  }

  while (current <= endDate) {
    if (current.getDay() === 4) { // Quinta-feira
      const month = current.getMonth();
      const dateStr = `${weekdays[current.getDay()]}, ${current.toLocaleDateString("pt-BR")}`;
      // Ajustado para dia 4 Dezembro
      const isFinal = formatDateISO(current) === "2025-12-05";
      console.log(formatDateISO(current))
      if (!lessonsByMonth[month]) {
        lessonsByMonth[month] = [];
      }

      lessonsByMonth[month].push({
        date: dateStr,
        isFinal: isFinal,
        text: isFinal
            ? "📌 Prova Semestral"
            : `📚 Aula ${lessonNumber}: Conteúdo Teórico`
      });

      if (!isFinal) lessonNumber++;
    }
    current.setDate(current.getDate() + 1);
  }

  // Gera os blocos por mês
  Object.keys(lessonsByMonth).forEach(month => {
    const monthId = `month-${month}`;
    const lessons = lessonsByMonth[month];
    const monthName = monthNames[month];

    const monthCard = $(`
      <div class="month-card" data-month="${monthId}">
        <div class="month-title">${monthName}</div>
        <div class="lessons-list" id="${monthId}"></div>
      </div>
    `);

    lessons.forEach(lesson => {
      const item = $(`
        <div class="lesson-item ${lesson.isFinal ? 'final' : ''}">
          <span class="date">${lesson.date}</span>
          <span class="text">${lesson.text}</span>
        </div>
      `);
      monthCard.find(".lessons-list").append(item);
    });

    calendarWrapper.append(monthCard);
  });

  // Toggle: só abre o clicado e fecha os outros
  $(".month-card").on("click", function () {
      const monthCard = $(this).closest(".month-card");
      const lessonsList = monthCard.find(".lessons-list");
      // const id = lessonsList.attr("id");

      // Fecha todos menos o clicado
      // $(".lessons-list").not(`#${id}`).slideUp(300);

      // Toggle no clicado
      lessonsList.stop(true, true).slideToggle(300);
  });
});