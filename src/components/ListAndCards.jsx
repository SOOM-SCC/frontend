import { useEffect } from "react";
import iconSelfTest from "../assets/icon_1.png";
import iconRecord from "../assets/icon_2.png";

function ListAndCards() {
  const KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

  useEffect(() => {
    
    const initMap = () => {
        const container = document.getElementById('kakao-map-container');
        
        if (!container) {
            console.error("카카오맵 컨테이너(ID: kakao-map-container)를 찾을 수 없습니다.");
            return;
        }

        const options = {
          center: new window.kakao.maps.LatLng(37.5915, 127.0107),
        };
        
        new window.kakao.maps.Map(container, options);
    };

    if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
            initMap();
        });
        return;
    }
    
    const script = document.createElement('script');
    
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`; 
    script.async = true;
    
    script.onload = () => {
      window.kakao.maps.load(() => {
        initMap();
      });
    };
    
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(script);
    };
    
    }, [KAKAO_MAP_API_KEY]); 

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

        <div id="kakao-map-container" className="list-box">
        </div>
      </div>

      <div className="card-selftest" />

      <div className="card-record" />

      <p className="selftest-title">가정 폭력 자가 진단</p>
      <p className="record-title">증거 기록 보관</p>
    </>
  );
}

export default ListAndCards;