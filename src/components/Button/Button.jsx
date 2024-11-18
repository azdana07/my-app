import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({
  children,
  href,
  to,
  onClick,
  className = "",
  type = "button",
  ...rest
}) {
  // Tentukan tipe elemen yang akan dirender
  const Component = to ? Link : href ? "a" : "button";

  // Props umum untuk elemen
  const commonProps = { className, onClick, ...rest };

  // Jika elemen adalah "button", tambahkan atribut "type"
  if (Component === "button") {
    commonProps.type = type;
  }

  // Jika elemen adalah "a" (anchor), tambahkan atribut "href"
  if (Component === "a") {
    commonProps.href = href;
  }

  // Jika elemen adalah "Link", tambahkan atribut "to"
  if (Component === Link) {
    commonProps.to = to;
  }

  // Render elemen dengan props yang sesuai
  return <Component {...commonProps}>{children}</Component>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Wajib, elemen anak seperti teks atau elemen lainnya
  href: PropTypes.string, // URL jika elemen berupa <a>
  to: PropTypes.string, // Route jika elemen berupa <Link>
  onClick: PropTypes.func, // Fungsi untuk event klik
  className: PropTypes.string, // Kelas CSS tambahan
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Jenis button
};
