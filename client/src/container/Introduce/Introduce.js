import { Link } from "react-router-dom";
import classes from "./Introduce.module.css";
import Layout from "../../components/Layout/Layout";
import SSPhimIntroduce from "../../assets/SSPhimIntroduce.jpg";
import TVIntroduce from "../../assets/TVIntroduce.jpg";
import SSPhimIntroduceDowload from "../../assets/SSPhimIntroduceDowload.jfif";
import SSPhimIntroduceChildren from "../../assets/SSPhimIntroduceChildren.png";
import SSPhimIntroduceWatch from "../../assets/SSPhimIntroduceWatch.jpg";
import IntroduceSectionLeft from "../../components/IntroduceSection/IntroduceSectionLeft/IntroduceSectionLeft";
import IntroduceSectionRight from "../../components/IntroduceSection/IntroduceSectionRight/IntroduceSectionRight";
import IntroduceSectionNotPicture from "../../components/IntroduceSection/IntroduceSectionNotPicture/IntroduceSectionNotPicture";
import { useEffect, useState } from "react";

function Introduce(props) {
  const [position, setPosition] = useState(window.scrollY);
  useEffect(() => {
    function handleScroll() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div>
        <section className="bg-black">
          <div className="container m-auto">
            <div className="relative">
              <div className="w-full flex items-center justify-center">
                <div>
                  <img
                    src={SSPhimIntroduce}
                    alt="SSPhim Img Introduce"
                    className="block"
                  ></img>
                </div>
              </div>
              <div
                className={`text-white absolute top-0 left-0 w-full h-full flex items-center justify-center ${classes.backgroundColor}`}
              >
                <div className="lg:w-3/4">
                  <h1
                    className={`${classes.fontTextTitle} text-center font-bold`}
                  >
                    Ch????ng tr??nh truy???n h??nh, phim kh??ng gi???i h???n v?? nhi???u n???i
                    dung kh??c.
                  </h1>
                  <h3
                    className={`${classes.fontTextContent} text-3xl text-center font-bold mt-4`}
                  >
                    Xem ??? m???i n??i. H???y b???t k??? l??c n??o
                  </h3>
                  <p className={`${classes.fontText} text-center mt-4`}>
                    B???n ???? s???n s??ng ch??a? ????ng k?? ????? t???o v?? k??ch ho???t t?? c??ch
                    th??nh vi??n c???a b???n
                  </p>
                  <div className="block mt-8">
                    <div
                      className={`m-auto pt-3 pb-3 pr-4 pl-4 bg-red-600 w-1/3 text-center font-bold rounded-sm ${classes.cursorPointer} ${classes.textButton}`}
                    >
                      <Link to="/register">????ng K?? Ngay</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <IntroduceSectionLeft
          position={position}
          title={"Th?????ng th???c tr??n TV c???a b???n."}
          content="Xem tr??n TV th??ng minh, Playstation, Xbox, Chromecast, Apple
                    TV, ?????u ph??t Blu-ray v?? nhi???u thi???t b??? kh??c."
          imgUrl={TVIntroduce}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
        <IntroduceSectionRight
          position={position}
          imgUrl={SSPhimIntroduceDowload}
          title={"T???i xu???ng n???i dung ????? xem ngo???i tuy???n."}
          content={
            "L??u l???i nh???ng n???i dung y??u th??ch m???t c??ch d??? d??ng v?? lu??n c?? th??? ????? xem."
          }
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
        <IntroduceSectionNotPicture
          position={position}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
          title={"Xem ??? m???i n??i."}
          content={
            "Ph??t tr???c tuy???n kh??ng gi???i h???n phim v?? ch????ng tr??nh truy???n h??nh tr??n ??i???n tho???i, m??y t??nh b???ng, m??y t??nh x??ch tay v?? TV."
          }
        />
        <IntroduceSectionRight
          position={position}
          imgUrl={SSPhimIntroduceChildren}
          title={"T???o h??? s?? cho tr??? em."}
          content={
            "????a c??c em v??o nh???ng cu???c phi??u l??u v???i nh??n v???t ???????c y??u th??ch trong m???t kh??ng gian ri??ng."
          }
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />

        <IntroduceSectionLeft
          position={position}
          title={
            "B???n c?? ??i???n tho???i ch???? H??y th??? truy c???p mi???n ph?? v??o trang web!"
          }
          content="Xem c??c b??? phim v?? ch????ng tr??nh truy???n h??nh m???i ???????c tuy???n
            ch???n."
          imgUrl={SSPhimIntroduceWatch}
          fontTextTitle={classes.fontTextTitle}
          fontText={classes.fontText}
        />
      </div>
    </Layout>
  );
}
export default Introduce;
