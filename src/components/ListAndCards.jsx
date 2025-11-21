import iconSelfTest from "../assets/icon_1.png";
import iconRecord from "../assets/icon_2.png";


function ListAndCards() {
  return (
    <>
      {/* 리스트 / 지도 / 즐겨찾기 프레임 */}
      <img src={iconSelfTest} alt="자가진단 아이콘" className="icon-selftest" />
      <img src={iconRecord} alt="증거 기록 보관 아이콘" className="icon-record" />

      <div className="content-left">
        <div className="tabs">
          <button className="tab active">리스트</button>
          <button className="tab">지도</button>
          <button className="tab">즐겨찾기</button>
        </div>

        <div className="list-box">
          <p>여기에 신고 센터 리스트가 들어갈 예정입니다.</p>
        </div>
      </div>

      {/* 아래 두 개 카드 프레임만 배경 박스만 먼저 보여주기 */}
      <div className="card-selftest" />

      <div className="card-record" />

      {/* 텍스트는 전체 프레임 기준 좌표에 맞춰 배치 */}
      <p className="selftest-title">가정 폭력 자가 진단</p>
      <p className="record-title">증거 기록 보관</p>
    </>
  );
}

export default ListAndCards;
