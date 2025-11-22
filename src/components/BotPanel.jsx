import starIcon from "../assets/star.png";

function BotPanel() {
  return (
    <div className="bot-card">
      <h2 className="bot-title">숨봇에게 편하게 물어보세요</h2>
      <p className="bot-subtitle">숨봇 이용자들이 자주 하는 질문</p>

      <button className="faq-question">
        미성년자가 법적인 도움을 요청할 수 있는 곳은<br />
        어디인가요?
      </button>

      {/* 새 입력창 */}
      <input
        className="bot-input"
        type="text"
        placeholder="숨봇에게 궁금한 내용을 질문해주세요"
      />
      <img src={starIcon} alt="즐겨찾기 별" className="bot-star" />

    </div>
  );
}


export default BotPanel;
