import logoImg from "../assets/soom_logo.png";
import searchIcon from "../assets/search_icon.png";
import accountIcon from "../assets/account_icon.png";


function Header() {
  return (
    <header className="header">

      {/* 로고 영역 */}
      <div className="logo">
        <img src={logoImg} alt="SOOM 로고" className="logo-img" />
      </div>

      {/* 메뉴 */}
      <nav className="nav">
        <button className="nav-item">원클릭 신고</button>
        <button className="nav-item">증거 기록 보관</button>
        <button className="nav-item">신고 가이드</button>
        <button className="nav-item">숨봇</button>
        <button className="nav-item">자가진단</button>
      </nav>

      {/* 서치바 */}
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="검색" />
        <img src={searchIcon} className="search-icon" alt="search" />
</div>
      {/* 계정 아이콘 */}
      <img src={accountIcon} className="account-icon" alt="account" />

    </header>
  );
}

export default Header;
