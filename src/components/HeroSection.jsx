import headerImg from "../assets/header_image.png";
import heroButton from "../assets/button.png";


function HeroSection() {
  return (
    <section className="hero-section">
      <img src={headerImg} alt="메인 배경" className="hero-bg" />

      <div className="hero-line"></div>

      <h1 className="hero-title">
        위급 상황,<br />
        한 번의 클릭으로 빠르게 신고하세요!
        </h1>

      <button className="hero-main-btn">원클릭 신고</button>

      <img
        src={heroButton}
        alt="원클릭 신고 플로팅 버튼"
        className="hero-float-btn"
      />
    </section>
  );
}

export default HeroSection;
