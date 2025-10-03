const { createApp, ref, computed, watch } = Vue;

createApp({
  setup() {
    // data 相当
    const question = ref("Microsoft Office 97から追加されたOfficeアシスタントの名前は？");
    const answer = ref("カイル");
    const userAnswer = ref(""); // 入力欄の内容
    const result = ref("");
    const hint = ref("");
    const isCorrect = computed(() => userAnswer.value === answer.value);
　　const wrongCount = ref(0); // 間違えた回数
    
        function checkAnswer() {
      if (userAnswer.value === answer.value) {
        result.value = "✅ 正解！";
        wrongCount.value = 0; // リセット
        hint.value = "";
      } else {
        result.value = "❌ 不正解…";
        wrongCount.value++;
      }
    }

        // watch で間違い回数の変化を監視
    watch(wrongCount, (newVal) => {
      console.log("不正解回数:", newVal);
      if (newVal >= 3) {
        hint.value = "💡 ヒント: お前を消す方法でおなじみ！";
      }
    });
    
    return { question, answer, userAnswer, result, hint, checkAnswer, isCorrect }; //isCorrectを追加
  }
}).mount("#app");