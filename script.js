const questions = [
  {
    type: 'mcq',
    question:
      'Trong tình huống mở đầu có 20 phiếu câu hỏi đánh số từ 1 đến 20. Số kết quả có thể khi rút ngẫu nhiên 1 phiếu là:',
    options: ['4', '12', '20', '24'],
    answer: 2,
    explain: 'Có 20 phiếu phân biệt nên không gian mẫu có 20 kết quả có thể.',
  },
  {
    type: 'mcq',
    question:
      'Hộp có 5 quả xanh đánh số 1→5 và 4 quả đỏ đánh số 1→4. Lấy ngẫu nhiên 1 quả. Có bao nhiêu kết quả có thể?',
    options: ['5', '9', '4', '20'],
    answer: 1,
    explain: 'Mỗi quả được phân biệt bởi màu + số: tổng cộng 5 + 4 = 9.',
  },
  {
    type: 'mcq',
    question:
      'Với biến cố E: “Sơn rút được phiếu thuộc lĩnh vực Lịch sử - Địa lí” khi các phiếu 1→4 thuộc lĩnh vực này, số kết quả thuận lợi là:',
    options: ['2', '4', '8', '16'],
    answer: 1,
    explain: 'Các kết quả thuận lợi là phiếu 1,2,3,4 nên có 4 kết quả thuận lợi.',
  },
  {
    type: 'mcq',
    question:
      'Gieo một con xúc xắc. Biến cố A: “Số chấm là hợp số”. Tập kết quả thuận lợi là:',
    options: ['{1,2,3}', '{2,3,5}', '{4,6}', '{1,4,6}'],
    answer: 2,
    explain: 'Trong {1,2,3,4,5,6}, hợp số là 4 và 6.',
  },
  {
    type: 'tf',
    stem: 'Một hộp có thẻ ghi số từ 1 đến 12. Xét các mệnh đề sau:',
    statements: [
      { text: 'Biến cố “rút được số chẵn” có 6 kết quả thuận lợi.', truth: true },
      { text: 'Biến cố “rút được số nguyên tố” có 6 kết quả thuận lợi.', truth: false },
      { text: 'Biến cố “rút được số chính phương” có tập thuận lợi là {1,4,9}.', truth: true },
      { text: 'Xác suất rút được số chia hết cho 3 là $\\dfrac{1}{2}$.', truth: false },
    ],
    explain:
      'Số nguyên tố trong 1→12 là 2,3,5,7,11 (5 số). Chia hết cho 3 có 4/12 = 1/3.',
  },
  {
    type: 'mcq',
    question:
      'Đội văn nghệ có 14 bạn gồm 4 bạn 8A, 5 bạn 8B, 3 bạn 8C, 2 bạn 8D. Biến cố F: “Chọn được một bạn nữ” có số kết quả thuận lợi là:',
    options: ['5', '7', '9', '14'],
    answer: 1,
    explain: 'Nữ gồm 5 bạn lớp 8B và 2 bạn lớp 8D nên có 7 kết quả thuận lợi.',
  },
  {
    type: 'mcq',
    question:
      'Bạn An có 16 cuốn sách: 4 tiểu thuyết, 5 lịch sử, 3 khoa học tự nhiên, 4 toán. Biến cố G: “Lấy được sách không phải lịch sử” có số kết quả thuận lợi là:',
    options: ['5', '11', '16', '8'],
    answer: 1,
    explain: 'Không phải lịch sử = 16 - 5 = 11 cuốn.',
  },
  {
    type: 'tf',
    stem: 'Gieo một con xúc xắc cân đối. Đánh giá đúng/sai:',
    statements: [
      { text: 'Không gian mẫu có 6 kết quả có thể.', truth: true },
      { text: 'Biến cố “ra số lẻ” có 2 kết quả thuận lợi.', truth: false },
      { text: 'Biến cố “ra số nhỏ hơn 5” có xác suất $\\dfrac{4}{6}=\\dfrac{2}{3}$.', truth: true },
      { text: 'Biến cố “ra số chấm bằng 7” là biến cố chắc chắn.', truth: false },
    ],
    explain: 'Số lẻ là 1,3,5 (3 kết quả). Số 7 không thể xuất hiện trên xúc xắc 6 mặt.',
  },
  {
    type: 'mcq',
    question:
      'Rút ngẫu nhiên 1 chữ cái trong cụm “TOÁN HỌC VÀ TUỔI TRẺ” (bỏ qua khoảng trắng). Kết quả có thể được hiểu phù hợp nhất là:',
    options: [
      'Chỉ tính các chữ cái khác nhau',
      'Mỗi vị trí chữ là một kết quả có thể',
      'Chỉ có 5 kết quả vì có 5 từ',
      'Không xác định được',
    ],
    answer: 1,
    explain:
      'Theo cách mô hình hóa hành động chọn ngẫu nhiên một kí tự trong cụm, mỗi vị trí kí tự là một kết quả có thể.',
  },
  {
    type: 'mcq',
    question:
      'Nếu xác suất của biến cố E được tính theo công thức cổ điển với các kết quả đồng khả năng thì:',
    options: [
      '$P(E)=\\dfrac{n(E)}{n(\\Omega)}$',
      '$P(E)=n(E)+n(\\Omega)$',
      '$P(E)=\\dfrac{n(\\Omega)}{n(E)}$',
      '$P(E)=n(E)-n(\\Omega)$',
    ],
    answer: 0,
    explain:
      'Công thức xác suất cổ điển: số kết quả thuận lợi chia cho tổng số kết quả có thể.',
  },
  {
    type: 'tf',
    stem: 'Xét 20 phiếu câu hỏi, trong đó lĩnh vực KHTN là phiếu số 5 đến 12:',
    statements: [
      { text: 'Biến cố “rút được câu KHTN” có 8 kết quả thuận lợi.', truth: true },
      { text: 'Xác suất rút được câu KHTN là $\\dfrac{8}{20}=\\dfrac{2}{5}$.', truth: true },
      { text: 'Biến cố “rút được câu Toán học” có 4 kết quả thuận lợi.', truth: false },
      { text: 'Biến cố “rút được câu Văn học” có xác suất $\\dfrac{6}{20}=\\dfrac{3}{10}$.', truth: true },
    ],
    explain:
      'Toán học chỉ có phiếu 19-20 nên 2 kết quả thuận lợi, không phải 4.',
  },
  {
    type: 'mcq',
    question:
      'Một túi có 5 bi đỏ, 4 bi xanh, 3 bi vàng; các bi cùng hình dạng, chỉ khác màu. Lấy 1 bi ngẫu nhiên. Số kết quả có thể hợp lí nhất là:',
    options: ['12', '3', '5', '7'],
    answer: 1,
    explain: 'Vì chỉ phân biệt theo màu nên kết quả có thể: đỏ, xanh, vàng (3 kết quả).',
  },
];

const state = {
  idx: 0,
  leftScore: 0,
  rightScore: 0,
  turn: 'left',
  answered: false,
};

const questionContainer = document.getElementById('questionContainer');
const previewContainer = document.getElementById('previewContainer');
const leftScoreEl = document.getElementById('leftScore');
const rightScoreEl = document.getElementById('rightScore');
const currentIndexEl = document.getElementById('currentIndex');
const totalQuestionsEl = document.getElementById('totalQuestions');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const teams = document.getElementById('teams');
const turnBadgeLeft = document.getElementById('turnBadgeLeft');
const turnBadgeRight = document.getElementById('turnBadgeRight');
const resultDialog = document.getElementById('resultDialog');
const resultText = document.getElementById('resultText');
const restartBtn = document.getElementById('restartBtn');

totalQuestionsEl.textContent = questions.length;

function updateTurnBadge() {
  const leftTurn = state.turn === 'left';
  turnBadgeLeft.textContent = leftTurn ? 'Lượt hiện tại' : 'Đang chờ';
  turnBadgeRight.textContent = leftTurn ? 'Đang chờ' : 'Lượt hiện tại';
}

function updateRope() {
  const delta = state.leftScore - state.rightScore;
  const x = Math.max(-80, Math.min(80, delta * 15));
  const angle = Math.max(-12, Math.min(12, delta * 2));
  teams.style.transform = `translateX(${x}px) rotate(${angle}deg)`;
}

function setFeedback(msg, type = '') {
  feedbackEl.textContent = msg;
  feedbackEl.className = `feedback ${type}`;
}

function renderPreview() {
  const nextQ = questions[state.idx + 1];
  if (!nextQ) {
    previewContainer.innerHTML = '<em>Đây là câu cuối cùng!</em>';
    return;
  }
  const label = nextQ.type === 'mcq' ? 'Trắc nghiệm 4 lựa chọn' : 'Đúng/Sai 4 mệnh đề';
  const content = nextQ.type === 'mcq' ? nextQ.question : nextQ.stem;
  previewContainer.innerHTML = `<strong>${label}</strong><br>${content}`;
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([previewContainer]);
}

function renderQuestion() {
  const q = questions[state.idx];
  if (!q) return;
  state.answered = false;
  nextBtn.disabled = true;
  currentIndexEl.textContent = state.idx + 1;
  updateTurnBadge();
  renderPreview();

  if (q.type === 'mcq') {
    questionContainer.innerHTML = `
      <div class="question-text">${q.question}</div>
      <div class="choices">
        ${q.options
          .map(
            (opt, i) =>
              `<button class="choice-btn" data-choice="${i}"><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</button>`,
          )
          .join('')}
      </div>
    `;

    questionContainer.querySelectorAll('.choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (state.answered) return;
        state.answered = true;
        const choice = Number(btn.dataset.choice);
        const isCorrect = choice === q.answer;
        const all = questionContainer.querySelectorAll('.choice-btn');
        all.forEach((b, i) => {
          if (i === q.answer) b.classList.add('correct');
          if (i === choice && !isCorrect) b.classList.add('wrong');
          b.disabled = true;
        });
        handleResult(isCorrect, q.explain);
      });
    });
  } else {
    questionContainer.innerHTML = `
      <div class="question-text">${q.stem}</div>
      <div class="tf-grid" id="tfGrid">
        ${q.statements
          .map(
            (s, i) => `
          <div class="tf-row" data-i="${i}">
            <div class="statement">${i + 1}) ${s.text}</div>
            <button data-val="true">Đúng</button>
            <button data-val="false">Sai</button>
          </div>
        `,
          )
          .join('')}
      </div>
      <button class="submit-tf" id="submitTf">Nộp đáp án đúng/sai</button>
    `;

    const selections = Array(q.statements.length).fill(null);
    questionContainer.querySelectorAll('.tf-row').forEach((row) => {
      const idx = Number(row.dataset.i);
      row.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (state.answered) return;
          row.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          selections[idx] = btn.dataset.val === 'true';
        });
      });
    });

    document.getElementById('submitTf').addEventListener('click', () => {
      if (state.answered) return;
      if (selections.some((v) => v === null)) {
        setFeedback('Bạn cần chọn đủ Đúng/Sai cho cả 4 mệnh đề.', 'bad');
        return;
      }
      state.answered = true;
      const rows = questionContainer.querySelectorAll('.tf-row');
      let correctCount = 0;
      rows.forEach((row, i) => {
        const pickedTrue = selections[i];
        const shouldTrue = q.statements[i].truth;
        const buttons = row.querySelectorAll('button');
        buttons.forEach((b) => {
          const val = b.dataset.val === 'true';
          if (val === shouldTrue) b.classList.add('correct');
          if (val === pickedTrue && val !== shouldTrue) b.classList.add('wrong');
          b.disabled = true;
        });
        if (pickedTrue === shouldTrue) correctCount += 1;
      });
      document.getElementById('submitTf').disabled = true;
      const isCorrect = correctCount >= 3;
      handleResult(
        isCorrect,
        `${q.explain} Bạn đúng ${correctCount}/4 mệnh đề${
          isCorrect ? ' (đạt ngưỡng tính điểm).' : ' (chưa đạt ngưỡng 3/4).'
        }`,
      );
    });
  }

  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([questionContainer]);
}

function handleResult(isCorrect, explanation) {
  if (isCorrect) {
    if (state.turn === 'left') state.leftScore += 1;
    else state.rightScore += 1;
    setFeedback(`✅ Chính xác! ${explanation}`, 'ok');
  } else {
    setFeedback(`❌ Chưa đúng. ${explanation}`, 'bad');
  }

  leftScoreEl.textContent = state.leftScore;
  rightScoreEl.textContent = state.rightScore;
  updateRope();
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  state.idx += 1;
  state.turn = state.turn === 'left' ? 'right' : 'left';

  if (state.idx >= questions.length) {
    const winner =
      state.leftScore === state.rightScore
        ? 'Hai đội hòa nhau cực kỳ kịch tính!'
        : state.leftScore > state.rightScore
          ? '🏆 Đội Trái chiến thắng!'
          : '🏆 Đội Phải chiến thắng!';
    resultText.textContent = `${winner} Tỉ số ${state.leftScore} - ${state.rightScore}.`;
    resultDialog.showModal();
    return;
  }

  setFeedback('Tiếp tục nào! Đội kế tiếp hãy trả lời thật nhanh!', '');
  renderQuestion();
});

restartBtn.addEventListener('click', () => {
  resultDialog.close();
  state.idx = 0;
  state.leftScore = 0;
  state.rightScore = 0;
  state.turn = 'left';
  leftScoreEl.textContent = '0';
  rightScoreEl.textContent = '0';
  updateRope();
  setFeedback('Ván mới bắt đầu, chúc hai đội may mắn!', '');
  renderQuestion();
});

renderQuestion();
updateRope();
