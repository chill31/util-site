import Link from "next/link";
import cStyles from "../styles/Component.module.css";

import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

export default function Menu() {

  let open = false;

  function handleMenu(){
    if(!open) {
      open = true;
      document.querySelector(".mobile_menu_main").setAttribute("open", "");
    } else {
      open = false;
        document.querySelector(".mobile_menu_main").removeAttribute("open");
    }
  }
  
  return (
    <div className={cStyles.menu_container}>
      <div className={cStyles.menu_mobile}>
        <button className={cStyles.activator} onClick={handleMenu}>
          <BsList tabIndex="0" className={cStyles.icon}></BsList>
        </button>

        <div
          className={`${cStyles.mobile_menu_main} mobile_menu_main`}
        >
          <div className={cStyles.properties}>
            <BsXLg className={cStyles.close_icon} onClick={handleMenu}></BsXLg>
            <h1 className={cStyles.sub}>utility-text</h1>
          </div>
          <span className={cStyles.divider}></span>

          <div className={cStyles.mobile_content}>
            <Link href="/">Home</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/docs/main">Docs</Link>
            <Link href="/presets">Presets and Defaults</Link>
            <Link href="https://npmjs.com/package/utility-text">
              Package Link
            </Link>
          </div>

          <span className={cStyles.divider}></span>
        </div>
      </div>

      <div className={cStyles.menu_main}>
        <div className={cStyles.division1}>
          <Link className={cStyles.div1_text} href="/">
            Home
          </Link>
          <Link className={cStyles.div1_text} href="/examples">
            Examples
          </Link>
          <Link className={cStyles.div1_text} href="/docs/main">
            Docs
          </Link>
        </div>

        <div className={cStyles.division2}>
          <Link
            className={cStyles.text_invite}
            href="https://npmjs.com/package/utility-text"
          >
            Package Link
          </Link>
        </div>
      </div>
    </div>
  );
}
