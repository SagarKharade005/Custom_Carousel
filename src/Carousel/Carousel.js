import { CARD_BUTTONS } from "./Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import classNames from "classnames";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./Carousel.sass";
import { useCallback } from "react";

export default function Carousel({ list, fevoriteMovie, selectedMovies }) {
  const onfevoriteClick = useCallback(
    (data) => {
      fevoriteMovie(data);
    },
    [list]
  );
  return (
    <div className="carousel">
      <Swiper
        hasNavigation
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {list &&
          list?.map((e) => (
            <SwiperSlide>
              <CCard className={style.Carousel}>
                <CCardTitle
                  className={classNames(
                    selectedMovies?.includes(e.imdbID) ? "selected" : ""
                  )}
                >
                  {e.Title}
                </CCardTitle>
                <CCardImage orientation="top" src={e.Poster} />
                <CCardBody>
                  <CButton onClick={() => onfevoriteClick(e)} href="#">
                    {CARD_BUTTONS.Like}
                  </CButton>
                  <CButton href="#">{CARD_BUTTONS.Own}</CButton>
                </CCardBody>
              </CCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
