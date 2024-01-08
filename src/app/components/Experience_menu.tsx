'use client';
import React, { useState, useEffect } from 'react';

export default function ExpMenu() {
  const ombumn22 = "/Image/ombumn2022.png";
  const ombumn23 = "/Image/ombumn2023a.png";
  const bem = "/Image/LOGO BEM.png";
  const katak = "/Image/katak.png";
  const stukm22 = "/Image/logo-stukm2022.png";
  const stukm23 = "/Image/logo-stukm23.png"
  const title1 = "OMB UMN 2022";
  const title2 = "Serah Tahunan UKM 2022";
  const title3 = "Teater KaTaK 2022";
  const title4 = "BEM UMN Gen XIII";
  const title5 = "OMB UMN 2023";
  const title6 = "Serah Tahunan UKM 2023";
  const body1 = "";
  const body2 = "";
  const body3 = "";
  const body4 = "";
  const body5 = "";
  const body6 = "";
  
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedImage, setSelectedImage] = useState(ombumn22);
  const [selectedDescTitle, setSelectedDesc] = useState (title1);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    if (animateLogo) {
      const logoElement = document.getElementById("logo");
      const descElement = document.getElementById("logo-desc");
  
      logoElement.classList.add("logo-animation");
      descElement.classList.add("desc-animation");
  
      setTimeout(() => {
        logoElement.classList.remove("logo-animation");
        descElement.classList.remove("desc-animation");
        setAnimateLogo(false);
      }, 1500);
    }
  }, [animateLogo]);

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  
    switch (menuId) {
      case "menu1":
        setSelectedImage(ombumn22);
        setSelectedDesc(title1);
        break;
      case "menu2":
        setSelectedImage(stukm22);
        setSelectedDesc(title2);
        break;
      case "menu3":
        setSelectedImage(katak);
        setSelectedDesc(title3);
        break;
      case "menu4":
        setSelectedImage(bem);
        setSelectedDesc(title4);
        break;
      case "menu5":
        setSelectedImage(ombumn23);
        setSelectedDesc(title5);
        break;
      case "menu6":
        setSelectedImage(stukm23);
        setSelectedDesc(title6);
        break;
      default:
        setSelectedImage(ombumn22);
        setSelectedDesc(title1);
    }
  
    setAnimateLogo(true);
  };

  const getMenuColor = (menuId) => {
    switch (menuId) {
      case "menu1":
        return '#ACCFE6';
      case "menu2":
        return 'white';
      case "menu3":
        return '#4EB147';
      case "menu4":
        return '#CCF0FF';
      case "menu5":
        return '#73B5CB';
      case "menu6":
        return '#F9C352';
      default:
        return '#ACCFE6';
    }
  };

  return (
    <div className='experience-div'>
      <div className='box-div'>
        <div
          className='justify-content-end d-flex align-items-center box-logo'
          style={{
            backgroundColor: getMenuColor(selectedMenu)
          }}>
          <div id="logo-desc" className='d-flex'>
            <div>
              {selectedDescTitle}
            </div>
          </div>
          <img src={selectedImage} id="logo" alt="Selected Image"/>
        </div>
      </div>
      <div className='menu-div'>
        <div className='d-flex carousel-menu'>
          <a id="menu1" onClick={() => handleMenuClick("menu1")}>OMB UMN 2022</a>
          <a id="menu2" onClick={() => handleMenuClick("menu2")}>STUKM 2022</a>
          <a id="menu3" onClick={() => handleMenuClick("menu3")}>Teater Katak 2022</a>
        </div>
        <div className='d-flex carousel-menu'>
        <a id="menu4" onClick={() => handleMenuClick("menu4")}>BEM UMN Gen XIII</a>
          <a id="menu5" onClick={() => handleMenuClick("menu5")}>OMB UMN 2023</a>
          <a id="menu6" onClick={() => handleMenuClick("menu6")}>STUKM 2023</a>
        </div>
      </div>
    </div>
  );
}